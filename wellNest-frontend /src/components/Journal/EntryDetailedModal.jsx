import { BookOpen, Edit3, Frown, Meh, Smile, X } from "lucide-react";
import React from "react";

const EntryDetailModal = ({ date, entry, onClose, onEdit }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const MoodIcon = ({ mood, size = 16 }) => {
    const moodIcons = {
      happy: <Smile size={size} className="text-amber-600" />,
      neutral: <Meh size={size} className="text-amber-500" />,
      sad: <Frown size={size} className="text-amber-700" />
    };
    return moodIcons[mood] || moodIcons.neutral;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div 
        className="w-full max-w-2xl rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: 'rgb(255, 250, 224)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'rgb(120, 53, 15)' }}>
            {formatDate(date)}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-amber-100 transition-colors"
            style={{ color: 'rgb(120, 53, 15)' }}
          >
            <X size={20} />
          </button>
        </div>
        
        {entry ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <MoodIcon mood={entry.mood} size={24} />
                <span className="text-lg font-medium capitalize" style={{ color: 'rgb(120, 53, 15)' }}>
                  {entry.mood}
                </span>
              </div>
              <button
                onClick={() => onEdit(entry)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors hover:bg-amber-50"
                style={{ borderColor: 'rgb(120, 53, 15)', color: 'rgb(120, 53, 15)' }}
              >
                <Edit3 size={16} />
                <span>Edit</span>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-amber-800 leading-relaxed whitespace-pre-wrap">
                {entry.content}
              </p>
            </div>
            
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium rounded-full"
                    style={{ 
                      backgroundColor: 'rgb(120, 53, 15)', 
                      color: 'rgb(255, 250, 224)' 
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
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(120, 53, 15)' }}>
              No entry for this day
            </h3>
            <p className="text-amber-700">
              You haven't written anything for this day yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryDetailModal;