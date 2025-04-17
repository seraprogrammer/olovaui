import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import {
  SidebarItemProps,
  getSidebarItems,
  getUtilityItems,
} from "@/config/SidebarRegistry";

// Add props for sidebar visibility and toggle function
interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const SidebarItem = ({
  icon,
  label,
  to,
  active,
  children,
  defaultOpen = false,
}: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasChildren = Array.isArray(children) && children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={handleToggle}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 rounded-md text-left",
            active
              ? "bg-sidebar-hover/50 text-primary"
              : "hover:bg-sidebar-hover"
          )}
        >
          <div className="flex items-center gap-3">
            {icon && <div className="text-primary/80">{icon}</div>}
            <span className="font-medium">{label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-primary" />
          ) : (
            <ChevronRight className="h-4 w-4 text-primary" />
          )}
        </button>

        {isOpen && (
          <div className="pl-9 mt-1 space-y-1">
            {children.map((child, index) => (
              <Link
                key={index}
                to={child.to || "#"}
                className={cn(
                  "block py-2 px-3 rounded-md text-sm",
                  child.active
                    ? "bg-sidebar-hover/50 text-primary"
                    : "hover:bg-sidebar-hover"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={to || "#"}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md mb-1",
        active ? "bg-sidebar-hover/50 text-primary" : "hover:bg-sidebar-hover"
      )}
    >
      {icon && <div className="text-primary/80">{icon}</div>}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar({
  isMobileOpen,
  setIsMobileOpen,
}: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isTablet, setIsTablet] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64); // Default header height

  // Get header height and handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector("header");
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      }

      setIsTablet(window.innerWidth < 1024);

      // Auto-close sidebar on mobile when resizing to smaller screens
      if (window.innerWidth < 768) {
        setIsMobileOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Run once after the header is fully rendered
    setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileOpen]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (isMobileOpen && sidebar && !sidebar.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen && isTablet) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen, isTablet, setIsMobileOpen]);

  const sidebarItems = getSidebarItems(currentPath);
  const utilityItems = getUtilityItems(currentPath);

  // Dynamic style for the sidebar height based on header height
  const sidebarStyle = {
    height: `calc(100vh - ${headerHeight}px)`,
    top: `${headerHeight}px`,
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isTablet && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        id="sidebar"
        style={sidebarStyle}
        className={cn(
          "flex flex-col border-r border-sidebar-border transition-all duration-300 ease-in-out bg-sidebar",
          // Desktop: Fixed width, tablet/mobile: absolute position
          isTablet ? "fixed z-40 shadow-xl" : "sticky",
          // Desktop: always visible, tablet/mobile: controlled by state
          isTablet && !isMobileOpen ? "-translate-x-full" : "translate-x-0",
          // Width adjustments
          "w-72 lg:w-64"
        )}
      >
        {/* Mobile close button */}
        {isTablet && (
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute right-3 top-3 p-1.5 rounded-full hover:bg-sidebar-hover"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>
        )}

        <div className="p-4 overflow-y-auto flex-1 scrollbar-thin">
          <div className="space-y-1 mb-6">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-sidebar-border">
            <p className="text-xs font-semibold px-3 mb-2 uppercase tracking-wider text-muted-foreground">
              Resources
            </p>
            <div className="space-y-1">
              {utilityItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-hover/30 rounded-lg p-3 text-sm">
            <p className="font-medium mb-1">Need help?</p>
            <p className="text-xs text-muted-foreground">
              Check our documentation for guidance and tutorials.
            </p>
            <Link
              to="/docs"
              className="mt-2 inline-flex items-center text-xs font-medium text-primary hover:underline"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
