import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Frown,
  Meh,
  Smile,
} from "lucide-react";
import React, { useState } from "react";

import TodaysEntry from "../../components/Journal/TodaysEntry";
import CalendarDay from "../../components/Calender/CalendarDay";
import EntryFormModal from "../../components/Journal/EntryFormModal";
import EntryDetailModal from "../../components/Journal/EntryDetailedModal";

const Journal = () => {
  const MoodIcon = ({ mood, size = 16 }) => {
    const moodIcons = {
      happy: <Smile size={size} className="text-amber-600" />,
      neutral: <Meh size={size} className="text-amber-500" />,
      sad: <Frown size={size} className="text-amber-700" />,
    };
    return moodIcons[mood] || moodIcons.neutral;
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  const [entries, setEntries] = useState({
    "2025-06-02": {
      id: 1,
      date: "2025-06-02",
      content:
        "Today was a wonderful day! I finally finished the project I've been working on for weeks...",
      mood: "happy",
      tags: ["work", "accomplishment", "gratitude"],
      createdAt: "2025-06-02T18:30:00Z",
    },
    "2025-06-01": {
      id: 2,
      date: "2025-06-01",
      content: "Feeling a bit overwhelmed with everything going on...",
      mood: "sad",
      tags: ["stress", "work", "self-care"],
      createdAt: "2025-06-01T20:15:00Z",
    },
  });

  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];
  const todaysEntry = entries[todayKey];

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 41); 

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      days.push(new Date(date));
    }
    return days;
  };

  const handleDateClick = (date) => {
    const dateKey = date.toISOString().split("T")[0];
    if (entries[dateKey]) {
      setSelectedDate(date);
    }
  };

  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setShowEntryForm(true);
    setSelectedDate(null);
  };

  const handleSaveEntry = (entry) => {
    const dateKey = entry.date;
    setEntries((prev) => ({
      ...prev,
      [dateKey]: entry,
    }));
    setShowEntryForm(false);
    setEditingEntry(null);
  };

  const handleSaveTodaysEntry = (entry) => {
    setEntries((prev) => ({
      ...prev,
      [entry.date]: entry,
    }));
  };

  const handleCreateEntry = (date) => {
    setEditingEntry(null);
    setSelectedDate(date);
    setShowEntryForm(true);
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const calendarDays = generateCalendarDays();
  const currentMonth = currentDate.getMonth();
  const selectedEntry = selectedDate
    ? entries[selectedDate.toISOString().split("T")[0]]
    : null;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      className="min-h-screen p-6"
      style={{ backgroundColor: "rgb(255, 250, 224)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen size={32} style={{ color: "rgb(120, 53, 15)" }} />
            <h1
              className="text-4xl font-bold"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              My Journal
            </h1>
          </div>
          <p className="text-lg text-amber-700">
            Capture today's moments and reflect on your journey
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <TodaysEntry
              todaysEntry={todaysEntry}
              onSave={handleSaveTodaysEntry}
            />
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-amber-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar size={24} style={{ color: "rgb(120, 53, 15)" }} />
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "rgb(120, 53, 15)" }}
                  >
                    Past Entries
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-full hover:bg-amber-100"
                >
                  <ChevronLeft
                    size={20}
                    style={{ color: "rgb(120, 53, 15)" }}
                  />
                </button>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "rgb(120, 53, 15)" }}
                >
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-full hover:bg-amber-100"
                >
                  <ChevronRight
                    size={20}
                    style={{ color: "rgb(120, 53, 15)" }}
                  />
                </button>
              </div>

              <div className="border border-amber-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-7 bg-amber-100">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 text-center text-sm font-semibold"
                      style={{ color: "rgb(120, 53, 15)" }}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {calendarDays.map((date, index) => {
                    const dateKey = date.toISOString().split("T")[0];
                    const entry = entries[dateKey];
                    const isToday =
                      date.toDateString() === today.toDateString();
                    const isCurrentMonth = date.getMonth() === currentMonth;
                    const isFuture = date > today;

                    return (
                      <CalendarDay
                        key={index}
                        date={date}
                        entry={entry}
                        isToday={isToday}
                        isCurrentMonth={isCurrentMonth}
                        isFuture={isFuture}
                        onClick={handleDateClick}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="text-amber-600" size={16} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "rgb(120, 53, 15)" }}
                    >
                      Total Entries
                    </span>
                  </div>
                  <p
                    className="text-xl font-bold mt-1"
                    style={{ color: "rgb(120, 53, 15)" }}
                  >
                    {Object.keys(entries).length}
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <div className="flex items-center space-x-2">
                    <Smile className="text-amber-600" size={16} />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "rgb(120, 53, 15)" }}
                    >
                      This Month
                    </span>
                  </div>
                  <p
                    className="text-xl font-bold mt-1"
                    style={{ color: "rgb(120, 53, 15)" }}
                  >
                    {
                      Object.keys(entries).filter((date) => {
                        const d = new Date(date);
                        return (
                          d.getMonth() === currentDate.getMonth() &&
                          d.getFullYear() === currentDate.getFullYear()
                        );
                      }).length
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md border border-amber-200 flex flex-col justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-amber-600" size={20} />
                  <span
                    className="font-semibold"
                    style={{ color: "rgb(120, 53, 15)" }}
                  >
                    Total Entries
                  </span>
                </div>
                <p
                  className="text-2xl font-bold mt-2 "
                  style={{ color: "rgb(120, 53, 15)" }}
                >
                  {Object.keys(entries).length}
                </p>
              </div>

              {["happy", "neutral", "sad"].map((mood) => {
                const count = Object.values(entries).filter(
                  (entry) => entry.mood === mood
                ).length;
                return (
                  <div
                    key={mood}
                    className="bg-white rounded-lg p-4 shadow-md border border-amber-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <MoodIcon mood={mood} size={20} />
                      <span
                        className="font-semibold capitalize"
                        style={{ color: "rgb(120, 53, 15)" }}
                      >
                        {mood}
                      </span>
                    </div>
                    <p
                      className="text-2xl font-bold mt-2"
                      style={{ color: "rgb(120, 53, 15)" }}
                    >
                      {count}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {selectedDate && (
          <EntryDetailModal
            date={selectedDate}
            entry={selectedEntry}
            onClose={() => setSelectedDate(null)}
            onEdit={handleEditEntry}
            onCreate={handleCreateEntry}
          />
        )}

        {showEntryForm && (
          <EntryFormModal
            entry={editingEntry}
            date={editingEntry ? new Date(editingEntry.date) : selectedDate}
            onSave={handleSaveEntry}
            onCancel={() => {
              setShowEntryForm(false);
              setEditingEntry(null);
              setSelectedDate(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Journal;
