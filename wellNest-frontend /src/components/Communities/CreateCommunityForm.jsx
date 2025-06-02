import React, { useState } from "react";
import {
  ArrowLeft,
  Upload,
  Users,
  Lock,
  Globe,
  Heart,
  MessageCircle,
  Shield,
  BookOpen,
  Coffee,
  Sunrise,
  Star,
  Camera,
  AlertCircle,
} from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api, API_BASE_URL } from "../../config/api";

const CreateCommunityPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    privacy: "public",
    guidelines: "",
    welcomeMessage: "",
    tags: [],
  });

  const [currentTag, setCurrentTag] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("Heart");
  const [coverImage, setCoverImage] = useState(null);
  const [errors, setErrors] = useState({});

  const categories = [
    "Support Groups",
    "Wellness",
    "Life Stages",
    "Daily Support",
    "Relationships",
    "Recovery",
    "Therapy & Treatment",
    "Family Support",
  ];

  const iconOptions = [
    { name: "Heart", icon: Heart },
    { name: "Shield", icon: Shield },
    { name: "BookOpen", icon: BookOpen },
    { name: "Coffee", icon: Coffee },
    { name: "Sunrise", icon: Sunrise },
    { name: "Star", icon: Star },
    { name: "Users", icon: Users },
    { name: "MessageCircle", icon: MessageCircle },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleAddTag = () => {
    if (
      currentTag.trim() &&
      !formData.tags.includes(currentTag.trim()) &&
      formData.tags.length < 5
    ) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Community name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.guidelines.trim())
      newErrors.guidelines = "Community guidelines are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        privacy: formData.privacy.toUpperCase(),
        guidelines: formData.guidelines,
        welcomeMessage: formData.welcomeMessage,
        tags: formData.tags,
        icon: selectedIcon,
      };
      const response = await api.post("/api/communities", payload);
      console.log("Community created:", response.data);
      alert("Community created successfully!");
      navigate("/communities");
    } catch (error) {
      console.log(
        "Error creating community:",
        error.response?.data || error.message || error
      );
      alert(
        error?.response?.data?.message ||
          "Failed to create community. Try again."
      );
    }
  };
  const navigate = useNavigate();
  const SelectedIconComponent =
    iconOptions.find((opt) => opt.name === selectedIcon)?.icon || Heart;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="gap-4 mb-8">
          <button
            onClick={() => navigate("/communities")}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Communities
          </button>
          <div className="text-center mb-6">
            <h1
              className="text-3xl font-bold"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Create New Community
            </h1>
            <p className="text-amber-700 mt-1">
              Build a safe space for others to connect and support each other
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Community Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-4 py-3 text-[#fffbeb] rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-300 focus:border-red-400"
                      : "border-amber-200 focus:border-amber-400"
                  }`}
                  placeholder="Enter a welcoming community name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className={`w-full px-4 py-3 text-[#fffbeb] bg-[#78350f] rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.category
                      ? "border-red-300 focus:border-red-400"
                      : "border-amber-200 focus:border-amber-400"
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Privacy Setting
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:bg-amber-50">
                    <input
                      type="radio"
                      name="privacy"
                      value="public"
                      checked={formData.privacy === "public"}
                      onChange={(e) =>
                        handleInputChange("privacy", e.target.value)
                      }
                      className="text-amber-600"
                    />
                    <Globe className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="font-medium text-amber-800">Public</div>
                      <div className="text-sm text-amber-600">
                        Anyone can discover and join
                      </div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:bg-amber-50">
                    <input
                      type="radio"
                      name="privacy"
                      value="private"
                      checked={formData.privacy === "private"}
                      onChange={(e) =>
                        handleInputChange("privacy", e.target.value)
                      }
                      className="text-amber-600"
                    />
                    <Lock className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="font-medium text-amber-800">Private</div>
                      <div className="text-sm text-amber-600">
                        Members need approval to join
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={4}
                className={`w-full px-4 py-3 text-[#fffbeb] bg-[#78350f] rounded-lg border-2 focus:outline-none transition-colors resize-none ${
                  errors.description
                    ? "border-red-300 focus:border-red-400"
                    : "border-amber-200 focus:border-amber-400"
                }`}
                placeholder="Describe your community's purpose and what kind of support it provides..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          {/* Customization */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Customization
            </h2>

            <div>
              <label className="block text-sm font-medium text-amber-800 mb-3">
                Community Icon
              </label>
              <div className="grid grid-cols-4 gap-2">
                {iconOptions.map(({ name, icon: IconComponent }) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSelectedIcon(name)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedIcon === name
                        ? "border-amber-400 bg-amber-100"
                        : "border-amber-200 hover:border-amber-300 hover:bg-amber-50"
                    }`}
                  >
                    <IconComponent
                      className="w-6 h-6 mx-auto"
                      style={{ color: "rgb(120, 53, 15)" }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-amber-800 mb-2">
                Tags (Optional)
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), handleAddTag())
                  }
                  className="flex-1 px-4 py-2 rounded-lg border-2 text-[#fffbeb] bg-[#78350f] border-amber-200 focus:border-amber-400 focus:outline-none"
                  placeholder="Add relevant tags (press Enter)"
                  maxLength={20}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  disabled={!currentTag.trim() || formData.tags.length >= 5}
                  className="px-4 py-2 rounded-lg text-white font-medium disabled:opacity-50"
                  style={{ backgroundColor: "rgb(120, 53, 15)" }}
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <p className="text-xs text-amber-600 mt-1">
                Maximum 5 tags, 20 characters each
              </p>
            </div>
          </div>

          {/* Guidelines & Welcome Message */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: "rgb(120, 53, 15)" }}
            >
              Community Guidelines & Welcome
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Community Guidelines *
                </label>
                <textarea
                  value={formData.guidelines}
                  onChange={(e) =>
                    handleInputChange("guidelines", e.target.value)
                  }
                  rows={5}
                  className={`w-full px-4 py-3 text-[#fffbeb] bg-[#78350f] rounded-lg border-2 focus:outline-none transition-colors resize-none ${
                    errors.guidelines
                      ? "border-red-300 focus:border-red-400"
                      : "border-amber-200 focus:border-amber-400"
                  }`}
                  placeholder="Set clear guidelines for respectful interaction, content rules, and community expectations..."
                />
                {errors.guidelines && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.guidelines}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-2">
                  Welcome Message (Optional)
                </label>
                <textarea
                  value={formData.welcomeMessage}
                  onChange={(e) =>
                    handleInputChange("welcomeMessage", e.target.value)
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border-2 text-[#fffbeb] bg-[#78350f] border-amber-200 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Write a warm welcome message for new members..."
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="px-8 py-3 rounded-lg border-2 border-amber-300 text-amber-700 font-medium hover:bg-amber-50 transition-all duration-200"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "rgb(120, 53, 15)" }}
              onClick={handleSubmit}
            >
              Create Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunityPage;
