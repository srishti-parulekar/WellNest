import React from 'react';
import { Users, MessageCircle, Shield } from 'lucide-react';

const CommunityCard = ({ community, isJoined, handleJoin }) => {
  const IconComponent = community.icon;
  return (
    <div
      key={community.id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 overflow-hidden"
    >
      <div className={`${community.color} h-2/3 p-4 relative`}>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-white rounded-full shadow-sm">
            <IconComponent className="w-6 h-6" style={{ color: 'rgb(120, 53, 15)' }} />
          </div>
          {community.isPrivate && (
            <div className="flex items-center gap-1 bg-amber-600 text-white px-2 py-1 rounded-full text-xs">
              <Shield className="w-3 h-3" />
              Private
            </div>
          )}
        </div>
        <h3 className="font-bold text-lg mb-2" style={{ color: 'rgb(120, 53, 15)' }}>
          {community.name}
        </h3>
        <p className="text-sm text-amber-800 mb-3 line-clamp-4">
          {community.description}
        </p>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{community.members.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{community.posts.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleJoin(community.id)}
            disabled={isJoined}
            className={`flex-1 py-2 px-4 rounded-full font-medium text-sm transition-all duration-200 ${
              isJoined
                ? 'bg-green-100 text-green-700 cursor-not-allowed'
                : 'text-white hover:opacity-90 shadow-md hover:shadow-lg'
            }`}
            style={!isJoined ? { backgroundColor: 'rgb(120, 53, 15)' } : {}}
          >
            {isJoined ? 'Joined ✓' : 'Join'}
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-amber-200 text-amber-700 hover:bg-amber-50 transition-all duration-200 text-sm font-medium">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;