package com.srishti.services;

import com.srishti.models.Community;
import com.srishti.models.User;

import java.util.List;

public interface CommunityService {

    Community createCommunity(User reqUser, Community community) throws Exception;

    Community findCommunityById(Long communityId) throws Exception;

    List<Community> findCommunitiesCreatedByUser(User user);

    Community updateCommunity(Long communityId, User reqUser, Community community) throws Exception;

    void deleteCommunity(Long communityId, User reqUser) throws Exception;

    List<Community> findAllCommunities();
}