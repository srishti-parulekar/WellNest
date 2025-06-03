import React, { useState } from "react";
import { Edit3, BookOpen, Smile, Frown, Meh, PenTool } from "lucide-react";

// Mood icons mapping

// Today's Entry Section Component
const TodaysEntry = ({ todaysEntry, onSave }) => {
  const [content, setContent] = useState(todaysEntry?.content || "");
  const [mood, setMood] = useState(todaysEntry?.mood || "neutral");
  const [tags, setTags] = useState(todaysEntry?.tags?.join(", ") || "");
  const [isEditing, setIsEditing] = useState(!todaysEntry);

  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];

  const MoodIcon = ({ mood, size = 16 }) => {
    const moodIcons = {
      happy: <Smile size={size} className="text-amber-600" />,
      neutral: <Meh size={size} className="text-amber-500" />,
      sad: <Frown size={size} className="text-amber-700" />,
    };
    return moodIcons[mood] || moodIcons.neutral;
  };

  const handleSave = () => {
    if (!content.trim()) return;

    const entry = {
      id: todaysEntry?.id || Date.now(),
      date: todayKey,
      content: content.trim(),
      mood,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
      createdAt: todaysEntry?.createdAt || new Date().toISOString(),
    };

    onSave(entry);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    if (todaysEntry) {
      setContent(todaysEntry.content);
      setMood(todaysEntry.mood);
      setTags(todaysEntry.tags?.join(", ") || "");
      setIsEditing(false);
    } else {
      setContent("");
      setMood("neutral");
      setTags("");
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-amber-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <PenTool size={24} style={{ color: "rgb(120, 53, 15)" }} />
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Today's Entry
            </h2>
            <p className="text-amber-700">{formatDate(today)}</p>
          </div>
        </div>

        {todaysEntry && !isEditing && (
          <div className="flex items-center space-x-3">
            <MoodIcon mood={todaysEntry.mood} size={20} />
            <button
              onClick={handleEdit}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-colors hover:bg-amber-50"
              style={{
                borderColor: "rgb(120, 53, 15)",
                color: "rgb(120, 53, 15)",
              }}
            >
              <Edit3 size={16} />
              <span>Edit</span>
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              How are you feeling today?
            </label>
            <div className="flex space-x-4">
              {[
                { value: "happy", label: "Happy", icon: Smile },
                { value: "neutral", label: "Neutral", icon: Meh },
                { value: "sad", label: "Sad", icon: Frown },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMood(value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    mood === value
                      ? "border-amber-600 bg-amber-100"
                      : "border-amber-300 hover:border-amber-400"
                  }`}
                >
                  <Icon
                    size={20}
                    className={
                      mood === value ? "text-amber-700" : "text-amber-600"
                    }
                  />
                  <span style={{ color: "rgb(120, 53, 15)" }}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              What's on your mind?
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts, experiences, and reflections from today..."
              className="w-full p-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
              style={{ backgroundColor: "rgb(255, 250, 224)" }}
              rows={8}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-3"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="work, family, gratitude, reflection..."
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              style={{ backgroundColor: "rgb(255, 250, 224)" }}
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              disabled={!content.trim()}
              className="flex-1 py-3 px-6 rounded-lg font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: "rgb(120, 53, 15)" }}
            >
              {todaysEntry ? "Update Entry" : "Save Entry"}
            </button>
            {todaysEntry && (
              <button
                onClick={handleCancel}
                className="px-6 py-3 border-2 rounded-lg font-medium transition-colors hover:bg-amber-50"
                style={{
                  borderColor: "rgb(120, 53, 15)",
                  color: "rgb(120, 53, 15)",
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      ) : todaysEntry ? (
        <div>
          <div className="mb-4">
            <p className="text-amber-800 leading-relaxed whitespace-pre-wrap">
              {todaysEntry.content}
            </p>
          </div>

          {todaysEntry.tags && todaysEntry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {todaysEntry.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: "rgb(120, 53, 15)",
                    color: "rgb(255, 250, 224)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <BookOpen size={48} className="mx-auto mb-4 text-amber-400" />
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "rgb(120, 53, 15)" }}
          >
            Start today's entry
          </h3>
          <p className="text-amber-700 mb-6">
            Capture your thoughts and feelings from today
          </p>
        </div>
      )}
    </div>
  );
};

export default TodaysEntry;
