package com.srishti.services;

import com.srishti.models.Journal;
import com.srishti.models.User;
import com.srishti.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class JournalServiceImplementation implements JournalService {

    @Autowired
    private JournalRepository journalRepository;

    @Override
    public Journal createEntry(User user, Journal journal) {
        journal.setUser(user);
        return journalRepository.save(journal);
    }

    @Override
    public Journal updateEntry(User user, Integer id, Journal updatedEntry) {
        Journal journal = journalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Entry not found"));

        if (journal.getUser().getUserid() != user.getUserid()) {
            throw new RuntimeException("Unauthorized to update this entry");
        }

        journal.setMood(updatedEntry.getMood());
        journal.setEntry(updatedEntry.getEntry());
        journal.setTags(updatedEntry.getTags());
        journal.setJournalDate(updatedEntry.getJournalDate());

        return journalRepository.save(journal);
    }

    @Override
    public Optional<Journal> getEntryByDate(User user, LocalDate date) {
        return journalRepository.findByUserAndJournalDate(user, date);
    }

    @Override
    public List<Journal> getAllEntries(User user) {
        return journalRepository.findAllByUserOrderByJournalDateDesc(user);
    }

    @Override
    public void deleteEntry(User user, Integer id) {
        Journal journal = journalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Entry not found"));

        if (journal.getUser().getUserid() != user.getUserid()) {
            throw new RuntimeException("Unauthorized to delete this entry");
        }
    }
}