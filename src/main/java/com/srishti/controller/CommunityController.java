package com.srishti.controller;

import com.srishti.models.Community;
import com.srishti.models.User;
import com.srishti.services.CommunityService;
import com.srishti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/communities")
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @Autowired
    private UserService userService;

    @PostMapping
    public Community createCommunity(@RequestHeader("Authorization") String jwt,
                                     @RequestBody Community community) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        return communityService.createCommunity(reqUser, community);
    }

    @GetMapping("/{id}")
    public Community getCommunityById(@PathVariable Long id) throws Exception {
        return communityService.findCommunityById(id);
    }

    @GetMapping("/user")
    public List<Community> findCommunitiesCreatedByUser(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return communityService.findCommunitiesCreatedByUser(user);
    }

    @PutMapping("/{id}")
    public Community updateCommunity(@PathVariable Long id,
                                     @RequestHeader("Authorization") String jwt,
                                     @RequestBody Community community) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        return communityService.updateCommunity(id, reqUser, community);
    }

    @DeleteMapping("/{id}")
    public void deleteCommunity(@PathVariable Long id,
                                @RequestHeader("Authorization") String jwt) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        communityService.deleteCommunity(id, reqUser);
    }

    @GetMapping
    public List<Community> findAllCommunities() {
        return communityService.findAllCommunities();
    }
}