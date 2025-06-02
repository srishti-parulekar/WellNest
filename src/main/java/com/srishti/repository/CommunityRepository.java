package com.srishti.repository;

import com.srishti.models.Community;
import com.srishti.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    Optional<Community> findByName(String name);
    List<Community> findByCreatedBy(User createdBy);
}
