import React from "react";
import {
  ArrowLeft,
  Users,
  MessageCircle,
  Heart,
  Check,
  TrendingUp,
  Pin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const sampleCommunity = {
    id: 1,
    name: "Anxiety Support Circle",
    description: "A safe space to share experiences, coping strategies, and find comfort among those who understand anxiety challenges. We believe in the power of shared experiences and mutual support.",
    members: 2847,
    posts: 1204,
    category: "Support Groups",
    icon: Heart,
    isPrivate: false,
    createdDate: "March 2023",
    moderators: ["Sarah M.", "Dr. Alex K.", "Jordan L."],
    rules: [
      "Be respectful and kind to all members",
      "No medical advice - share experiences only",
      "Respect privacy and confidentiality",
      "Use trigger warnings when necessary",
      "Report any concerning behavior to moderators"
    ],
    recentPosts: [
      { id: 1, title: "Daily check-in thread", author: "Sarah M.", replies: 23, time: "2 hours ago", pinned: true },
      { id: 2, title: "Breathing techniques that actually work", author: "Alex_22", replies: 15, time: "4 hours ago" },
      { id: 3, title: "Had my first panic-free week!", author: "Hope_seeker", replies: 31, time: "6 hours ago" },
      { id: 4, title: "Resources for workplace anxiety", author: "WorkingMom", replies: 8, time: "1 day ago" }
    ]
  };


const CommunityViewPage = () => {
    const navigate = useNavigate();
    
return(    
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => navigate("/communities")}
        className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Communities
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-amber-100 rounded-full">
                <Heart
                  className="w-8 h-8"
                  style={{ color: "rgb(120, 53, 15)" }}
                />
              </div>
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{ color: "rgb(120, 53, 15)" }}
                >
                  {sampleCommunity.name}
                </h1>
                <p className="text-amber-600">
                  Created {sampleCommunity.createdDate}
                </p>
              </div>
            </div>

            <p className="text-amber-800 text-lg mb-6">
              {sampleCommunity.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-amber-700" />
                <span className="text-amber-700 font-medium">
                  {sampleCommunity.members.toLocaleString()} members
                </span>
              </div>
              <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                <MessageCircle className="w-4 h-4 text-amber-700" />
                <span className="text-amber-700 font-medium">
                  {sampleCommunity.posts.toLocaleString()} posts
                </span>
              </div>
              <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-amber-700" />
                <span className="text-amber-700 font-medium">Very Active</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 min-w-[200px]">
            <button
              onClick={() => setCurrentPage("join")}
              className="py-3 px-6 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: "rgb(120, 53, 15)" }}
            >
              Join Community
            </button>
            <button className="py-3 px-6 rounded-lg border-2 border-amber-200 text-amber-700 hover:bg-amber-50 transition-all font-medium">
              Follow Updates
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Recent Discussions
            </h2>
            <div className="space-y-4">
              {sampleCommunity.recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="border-b border-amber-100 last:border-b-0 pb-4 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    {post.pinned && (
                      <Pin className="w-4 h-4 text-amber-600 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-amber-900 hover:text-amber-700 cursor-pointer">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-amber-600 mt-1">
                        <span>by {post.author}</span>
                        <span>{post.replies} replies</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Rules */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Community Guidelines
            </h3>
            <ul className="space-y-2">
              {sampleCommunity.rules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-amber-800"
                >
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)};
export default CommunityViewPage;
