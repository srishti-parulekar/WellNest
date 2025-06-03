package com.srishti.repository;

import com.srishti.models.Journal;
import com.srishti.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface JournalRepository extends JpaRepository<Journal, Integer> {
    Optional<Journal> findByUserAndJournalDate(User user, LocalDate journalDate);
    List<Journal> findAllByUserOrderByJournalDateDesc(User user);
}