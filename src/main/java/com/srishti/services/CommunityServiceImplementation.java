package com.srishti.services;

import com.srishti.models.Community;
import com.srishti.models.User;
import com.srishti.repository.CommunityRepository;
import com.srishti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityServiceImplementation implements CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    @Override
    public Community createCommunity(User reqUser, Community community) throws Exception {
        if (communityRepository.findByName(community.getName()).isPresent()) {
            throw new Exception("Community with name '" + community.getName() + "' already exists");
        }
        community.setCreatedBy(reqUser);
        return communityRepository.save(community);
    }

    @Override
    public Community findCommunityById(Long communityId) throws Exception {
        Optional<Community> opt = communityRepository.findById(communityId);
        if (opt.isEmpty()) {
            throw new Exception("Community not found with id: " + communityId);
        }
        return opt.get();
    }

    @Override
    public List<Community> findCommunitiesCreatedByUser(User user) {
        return communityRepository.findByCreatedBy(user);
    }

    @Override
    public Community updateCommunity(Long communityId, User reqUser, Community community) throws Exception {
        Community existing = findCommunityById(communityId);

        if (existing.getCreatedBy().getUserid() != reqUser.getUserid()) {
            throw new Exception("You are not authorized to update this community");
        }

        if (!existing.getName().equals(community.getName()) &&
                communityRepository.findByName(community.getName()).isPresent()) {
            throw new Exception("Community with name '" + community.getName() + "' already exists");
        }

        // Update fields
        existing.setName(community.getName());
        existing.setDescription(community.getDescription());
        existing.setCategory(community.getCategory());
        existing.setGuidelines(community.getGuidelines());
        existing.setWelcomeMessage(community.getWelcomeMessage());
        existing.setIcon(community.getIcon());
        existing.setTags(community.getTags());

        return communityRepository.save(existing);
    }

    @Override
    public void deleteCommunity(Long communityId, User reqUser) throws Exception {
        Community community = findCommunityById(communityId);

        if (community.getCreatedBy().getUserid() != reqUser.getUserid()) {
            throw new Exception("You are not authorized to delete this community");
        }

        communityRepository.delete(community);
    }

    @Override
    public List<Community> findAllCommunities() {
        return communityRepository.findAll();
    }
}
