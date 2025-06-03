package com.srishti.controller;

import com.srishti.models.Journal;
import com.srishti.models.User;
import com.srishti.services.JournalService;
import com.srishti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/journal")
public class JournalController {

    @Autowired
    private JournalService journalService;

    @Autowired
    private UserService userService;

    @PostMapping
    public Journal createEntry(@RequestBody Journal journal, @RequestHeader("Authorization") String jwt) {
        User user = userService.findUserByJwt(jwt);
        return journalService.createEntry(user, journal);
    }

    @PutMapping("/{id}")
    public Journal updateEntry(@PathVariable Integer id,
                               @RequestBody Journal updatedEntry,
                               @RequestHeader("Authorization") String jwt) {
        User user = userService.findUserByJwt(jwt);
        return journalService.updateEntry(user, id, updatedEntry);
    }

    @GetMapping(("/all"))
    public List<Journal> getAllEntries(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserByJwt(jwt);
        return journalService.getAllEntries(user);
    }

    @GetMapping("/by-date")
    public Optional<Journal> getEntryByDate(@RequestParam String date,
                                            @RequestHeader("Authorization") String jwt) {
        User user = userService.findUserByJwt(jwt);
        return journalService.getEntryByDate(user, LocalDate.parse(date));
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable Integer id,
                            @RequestHeader("Authorization") String jwt) {
        User user = userService.findUserByJwt(jwt);
        journalService.deleteEntry(user, id);
    }
}