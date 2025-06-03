import { Frown, Meh, Smile } from 'lucide-react';
import React from 'react';

const CalendarDay = ({ date, entry, isToday, isCurrentMonth, isFuture, onClick }) => {
  const day = date.getDate();

  const MoodIcon = ({ mood, size = 16 }) => {
    const moodIcons = {
      happy: <Smile size={size} className="text-amber-600" />,
      neutral: <Meh size={size} className="text-amber-500" />,
      sad: <Frown size={size} className="text-amber-700" />
    };
    return moodIcons[mood] || moodIcons.neutral;
  };

  return (
    <div
      onClick={!isFuture ? () => onClick(date) : undefined}
      className={`
        relative h-24 p-2 border border-amber-200 transition-all duration-200
        ${isCurrentMonth ? '' : 'opacity-50'}
        ${isToday ? 'ring-2 ring-amber-400' : ''}
        ${isFuture ? 'cursor-not-allowed opacity-40' : 'cursor-pointer hover:bg-amber-50'}
        ${entry ? 'bg-white' : 'bg-amber-25'}
      `}
      style={{ backgroundColor: entry ? 'white' : 'rgb(255, 250, 224)' }}
    >
      <div className="flex justify-between items-start">
        <span 
          className={`text-sm font-medium ${
            isToday ? 'text-amber-700 font-bold' : 
            isCurrentMonth ? 'text-amber-800' : 'text-amber-400'
          } ${isFuture ? 'text-amber-300' : ''}`}
        >
          {day}
        </span>
        {entry && !isFuture && (
          <MoodIcon mood={entry.mood} size={14} />
        )}
      </div>

      {entry && !isFuture && (
        <div className="mt-1">
          <p className="text-xs text-amber-700 line-clamp-2 leading-tight">
            {entry.entry?.substring(0, 50)}...
          </p>
          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-1">
              <span 
                className="inline-block px-1 py-0.5 text-xs rounded"
                style={{ 
                  backgroundColor: 'rgb(120, 53, 15)', 
                  color: 'rgb(255, 250, 224)' 
                }}
              >
                {entry.tags[0]}
              </span>
              {entry.tags.length > 1 && (
                <span className="text-xs text-amber-600 ml-1">
                  +{entry.tags.length - 1}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {isFuture && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-amber-300 rounded-full opacity-30"></div>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;