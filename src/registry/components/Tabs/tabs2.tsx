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

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden w-full max-w-2xl">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span>{tab.name}</span>
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div role="tabpanel" className="p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {tabs.find(tab => tab.id === activeTab)?.content || tabs[0].content}
      </div>
    </div>
  );
}
