import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TabsUI() {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading effect when changing tabs
  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const tabs = [
    {
      id: 1,
      name: "Photos",
      icon: "📸",
      type: "content",
      content:
        "This is the PHOTOS tab content. Here you would display your photo gallery or image collection.",
    },
    {
      id: 2,
      name: "Music",
      icon: "🎵",
      type: "content",
      content:
        "This is the MUSIC tab content. Here you would display your music player or audio tracks.",
    },
    {
      id: 3,
      name: "Videos",
      icon: "🎬",
      type: "content",
      content:
        "This is the VIDEOS tab content. Here you would display your video player or video collection.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden w-full max-w-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-blue-500/10">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{tab.icon}</span>
              <span className="tracking-wide">{tab.name}</span>
            </span>
            {activeTab === tab.id && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-600 dark:to-pink-600"
                layoutId="activeTabIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <div
        role="tabpanel"
        className="p-6 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 min-h-[200px] relative backdrop-blur-sm"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin shadow-lg"></div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full"
            >
              <div className="prose dark:prose-invert max-w-none">
                {tabs.find((tab) => tab.id === activeTab)?.content ||
                  tabs[0].content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
