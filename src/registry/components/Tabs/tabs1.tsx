import { useState } from "react";

export default function TabsUI() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Photos",
      type: "content",
      content:
        "This is the PHOTOS tab content. Here you would display your photo gallery or image collection.",
    },
    {
      id: 2,
      name: "Music",
      type: "content",
      content:
        "This is the MUSIC tab content. Here you would display your music player or audio tracks.",
    },
    {
      id: 3,
      name: "Videos",
      type: "content",
      content:
        "This is the VIDEOS tab content. Here you would display your video player or video collection.",
    },
  ];

  // Find the active tab
  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-black text-white rounded-md overflow-hidden w-full max-w-2xl shadow-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 text-sm transition-colors ${
              activeTab === tab.id
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800 hover:text-white text-gray-400"
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div role="tabpanel">
        {activeTabContent ? (
          <div className="p-6 bg-black text-white">
            {activeTabContent.content}
          </div>
        ) : (
          <div className="p-6 bg-black text-white">{tabs[0].content}</div>
        )}
      </div>
    </div>
  );
}
