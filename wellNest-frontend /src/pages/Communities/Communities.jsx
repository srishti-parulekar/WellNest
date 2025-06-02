import React, { useState } from "react";
import { Search } from "lucide-react";
import { Heart, Sunrise, BookOpen, Shield, Coffee, Star } from "lucide-react";
import CommunityCard from "../../components/Communities/CommunityCard";
import { useNavigate } from "react-router-dom";

const CommunitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [joinedCommunities, setJoinedCommunities] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const communities = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      description:
        "A safe space to share experiences, coping strategies, and find comfort among those who understand anxiety challenges.",
      members: 2847,
      posts: 1204,
      category: "Support Groups",
      icon: Heart,
      color: "bg-amber-100",
      isPrivate: false,
    },
    {
      id: 2,
      name: "Depression Warriors",
      description:
        "Together we fight the darkness. Share your journey, find hope, and support others on their path to healing.",
      members: 1923,
      posts: 856,
      category: "Support Groups",
      icon: Sunrise,
      color: "bg-orange-100",
      isPrivate: false,
    },
    {
      id: 3,
      name: "Mindfulness & Meditation",
      description:
        "Explore mindfulness practices, meditation techniques, and cultivate inner peace through shared wisdom.",
      members: 3421,
      posts: 2103,
      category: "Wellness",
      icon: BookOpen,
      color: "bg-yellow-100",
      isPrivate: false,
    },
    {
      id: 4,
      name: "PTSD Recovery Hub",
      description:
        "A supportive community for trauma survivors. Share healing resources and connect with understanding peers.",
      members: 1456,
      posts: 734,
      category: "Support Groups",
      icon: Shield,
      color: "bg-amber-50",
      isPrivate: true,
    },
    {
      id: 5,
      name: "College Mental Health",
      description:
        "Student-focused community addressing academic stress, social anxiety, and campus mental health resources.",
      members: 987,
      posts: 445,
      category: "Life Stages",
      icon: BookOpen,
      color: "bg-orange-50",
      isPrivate: false,
    },
    {
      id: 6,
      name: "Daily Check-ins",
      description:
        "Start your day right. Share daily goals, mood updates, and celebrate small victories with supportive friends.",
      members: 4302,
      posts: 5847,
      category: "Daily Support",
      icon: Coffee,
      color: "bg-yellow-50",
      isPrivate: false,
    },
    {
      id: 7,
      name: "Creative Therapy",
      description:
        "Express yourself through art, writing, music, and other creative outlets. Healing through creativity.",
      members: 1672,
      posts: 892,
      category: "Wellness",
      icon: Star,
      color: "bg-amber-100",
      isPrivate: false,
    },
    {
      id: 8,
      name: "Family & Relationships",
      description:
        "Navigate family dynamics, relationship challenges, and communication struggles with empathetic support.",
      members: 2156,
      posts: 1357,
      category: "Relationships",
      icon: Heart,
      color: "bg-orange-100",
      isPrivate: false,
    },
  ];

  const categories = [
    "All",
    "Support Groups",
    "Wellness",
    "Life Stages",
    "Daily Support",
    "Relationships",
  ];

  const filteredCommunities = communities.filter((community) => {
    const matchesSearch =
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || community.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoin = (communityId) => {
    setJoinedCommunities((prev) => new Set([...prev, communityId]));
  };

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-14">
      <div className="max-w-7xl mx-auto mt-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ color: "rgb(120, 53, 15)" }}
          >
            Find Your Community
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Connect with others who understand your journey. Join supportive
            communities where you can share, learn, and grow together.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-20 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "text-white shadow-md"
                    : "bg-white text-amber-700 hover:bg-amber-100 shadow-sm"
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: "rgb(120, 53, 15)" }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.id}
              community={community}
              isJoined={joinedCommunities.has(community.id)}
              handleJoin={handleJoin}
            />
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              No communities found
            </h3>
            <p className="text-amber-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-[#78350f] rounded-2xl p-8 shadow-lg mx-auto w-full">
            <h2
              className="text-2xl font-bold mb-4 text-[#fffbeb]"
            >
              Can't find the right community?
            </h2>
            <p className="text-[#fffbeb] mb-6 text-center">
              Every journey is unique. If you don't see a community that fits
              your needs, consider creating one to help others on similar paths.
            </p>
            <button
              className="px-8 py-3 bg-[#fffbeb] text-[#78350f] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:opacity-90"
              onClick={() => navigate("/create-community")}
            >
              Create Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;
