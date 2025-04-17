import { Link } from "react-router-dom";
import { Menu, X, AlignLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ButtonFour from "@/registry/components/Buttons/button4";
import { FaGithub, FaDiscord } from "react-icons/fa";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full border-b border-border shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left section with logo, sidebar toggle and navigation */}
        <div className="flex items-center space-x-4">
          {/* Sidebar toggle button */}
          <button
            className="lg:hidden p-2 rounded-full hover:text-primary transition-colors"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <AlignLeft className="h-5 w-5" />
          </button>

          <Link to="/" className="font-bold text-xl text-primary">
            OlovaUI
          </Link>
          <div className="hidden lg:block">
            <ButtonFour />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/components"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Components
            </Link>
            <Link
              to="/templates"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Templates
            </Link>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/yourusername/sera.js"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-primary transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-primary transition-colors"
          >
            <FaDiscord className="h-5 w-5" />
          </a>

          <ModeToggle />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full border-b border-border shadow-md transition-all duration-300 ease-in-out bg-background",
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <nav className="mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link
            to="/components"
            className="py-2 px-4 hover:text-primary rounded-md transition-colors bg-muted/50 hover:bg-muted"
            onClick={() => setIsMenuOpen(false)}
          >
            Components
          </Link>
          <Link
            to="/templates"
            className="py-2 px-4 hover:text-primary rounded-md transition-colors bg-muted/50 hover:bg-muted"
            onClick={() => setIsMenuOpen(false)}
          >
            Templates
          </Link>
        </nav>
      </div>
    </header>
  );
}
