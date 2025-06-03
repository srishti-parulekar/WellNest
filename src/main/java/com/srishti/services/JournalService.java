package com.srishti.services;

import com.srishti.models.Journal;
import com.srishti.models.User;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface JournalService {
    Journal createEntry(User user, Journal journal);
    Journal updateEntry(User user, Integer id, Journal updatedEntry);
    Optional<Journal> getEntryByDate(User user, LocalDate date);
    List<Journal> getAllEntries(User user);
    void deleteEntry(User user, Integer id);
}