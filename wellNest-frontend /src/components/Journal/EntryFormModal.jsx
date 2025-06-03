import { Frown, Meh, Smile, X } from 'lucide-react';
import React, { useState } from 'react';

const EntryFormModal = ({ entry, onSave, onCancel }) => {
  const [content, setContent] = useState(entry?.content || '');
  const [mood, setMood] = useState(entry?.mood || 'neutral');
  const [tags, setTags] = useState(entry?.tags?.join(', ') || '');

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    const updatedEntry = {
      ...entry,
      content: content.trim(),
      mood,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    onSave(updatedEntry);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div 
        className="w-full max-w-2xl rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: 'rgb(255, 250, 224)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'rgb(120, 53, 15)' }}>
            Edit Entry
          </h2>
          <button
            onClick={onCancel}
            className="p-2 rounded-full hover:bg-amber-100 transition-colors"
            style={{ color: 'rgb(120, 53, 15)' }}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-lg font-medium mb-4" style={{ color: 'rgb(120, 53, 15)' }}>
              {formatDate(entry.date)}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'rgb(120, 53, 15)' }}>
              How were you feeling?
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'happy', label: 'Happy', icon: Smile },
                { value: 'neutral', label: 'Neutral', icon: Meh },
                { value: 'sad', label: 'Sad', icon: Frown }
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMood(value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                    mood === value 
                      ? 'border-amber-600 bg-amber-100' 
                      : 'border-amber-300 hover:border-amber-400'
                  }`}
                >
                  <Icon size={20} className={mood === value ? 'text-amber-700' : 'text-amber-600'} />
                  <span style={{ color: 'rgb(120, 53, 15)' }}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'rgb(120, 53, 15)' }}>
              Your thoughts
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
              style={{ backgroundColor: 'rgb(255, 250, 224)' }}
              rows={8}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'rgb(120, 53, 15)' }}>
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="work, family, gratitude, reflection..."
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              style={{ backgroundColor: 'rgb(255, 250, 224)' }}
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="flex-1 py-3 px-6 rounded-lg font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: 'rgb(120, 53, 15)' }}
            >
              Update Entry
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-6 border-2 rounded-lg font-medium transition-colors hover:bg-amber-50"
              style={{ borderColor: 'rgb(120, 53, 15)', color: 'rgb(120, 53, 15)' }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EntryFormModal;