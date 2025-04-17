import { useState, useEffect } from "react";
import Header from "@/pages/Header";
import Sideber from "@/pages/Sidebar";
import Layout from "@/pages/Layout";
import { cn } from "@/lib/utils";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(isLargeScreen);

      // On larger screens, sidebar is always open
      if (isLargeScreen) {
        setIsSidebarOpen(true);
      } else {
        // On initial mobile/tablet load, sidebar is closed
        setIsSidebarOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background flex-col">
      {/* Header at the top */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Overlay for mobile when sidebar is open */}
        {!isDesktop && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sideber
          isMobileOpen={isSidebarOpen}
          setIsMobileOpen={setIsSidebarOpen}
        />

        {/* Main content */}
        <div
          className={cn(
            "flex flex-col flex-1 overflow-hidden transition-all duration-300 ease-in-out"
          )}
        >
          <main className="flex-1 overflow-y-auto p-6">
            <Layout />
          </main>
        </div>
      </div>
    </div>
  );
}
