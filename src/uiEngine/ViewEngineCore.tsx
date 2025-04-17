import React, { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface ComponentDocProps {
  title: string;
  component: React.ReactNode;
  componentPath: string;
}

interface ComponentRowProps {
  components: {
    title: string;
    component: React.ReactNode;
    componentPath: string;
  }[];
}

export function ComponentRow({ components }: ComponentRowProps) {
  // Group components into rows of 3
  const rows = [];
  for (let i = 0; i < components.length; i += 3) {
    rows.push(components.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {rows.map((rowComponents, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        >
          {rowComponents.map((componentProps, index) => (
            <ComponentDoc
              key={index}
              title={componentProps.title || ""}
              component={componentProps.component}
              componentPath={componentProps.componentPath}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ComponentDoc({
  title,
  component,
  componentPath,
}: ComponentDocProps) {
  const [code, setCode] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch the raw code from the component path
    const fetchCode = async () => {
      try {
        // Make sure the path starts with a slash for correct resolution
        const path = componentPath.startsWith("/")
          ? componentPath
          : `/${componentPath}`;

        console.log("Fetching code from:", path);
        const response = await fetch(path);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }

        const text = await response.text();
        setCode(text);
      } catch (error) {
        console.error("Failed to fetch component code:", error);
        setCode(
          `// Error loading code: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    };

    fetchCode();
  }, [componentPath]);

  // Add an effect to handle fullscreen changes
  useEffect(() => {
    // Add a class to the body when fullscreen is active
    if (isFullscreen) {
      document.body.classList.add("fullscreen-dark-mode");
    } else {
      document.body.classList.remove("fullscreen-dark-mode");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("fullscreen-dark-mode");
    };
  }, [isFullscreen]);

  // Clean path for display (remove ?raw and leading slash)
  const displayPath = componentPath.replace("?raw", "").replace(/^\//, "");

  // Determine language for syntax highlighting
  const getLanguage = () => {
    const ext = displayPath.split(".").pop()?.toLowerCase();
    if (ext === "tsx" || ext === "jsx") return "jsx";
    if (ext === "ts") return "typescript";
    if (ext === "js") return "javascript";
    if (ext === "css") return "css";
    if (ext === "html") return "html";
    return "javascript"; // default
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = displayPath.split("/").pop() || "code.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Get a preview of the code (first 10 lines) when collapsed
  const getCodePreview = () => {
    const lines = code.split("\n");
    if (lines.length <= 10) return code;
    return lines.slice(0, 10).join("\n");
  };

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden shadow-md transition-all duration-300",
        isFullscreen &&
          "fixed inset-0 z-50 m-0 rounded-none h-screen w-screen bg-gray-900"
      )}
    >
      <div
        className={cn(
          "p-4 flex justify-between items-center",
          isFullscreen && ""
        )}
      >
        <h2
          className={cn("text-xl font-semibold", isFullscreen && "text-white")}
        >
          {title}
        </h2>
        {activeTab === "code" && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className={cn(
                "p-2 rounded-md transition-all duration-200 flex items-center justify-center",
                isFullscreen
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
              title={
                isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
              }
            >
              {isDarkTheme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={cn(
                "p-2 rounded-md transition-all duration-200 flex items-center justify-center",
                isFullscreen
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              )}
            </button>
            <button
              onClick={downloadCode}
              className={cn(
                "p-2 rounded-md transition-all duration-200 flex items-center justify-center",
                isFullscreen
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
              title="Download code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex bg-background/50 p-1 border-b border-border pb-5",
          isFullscreen && "bg-gray-800"
        )}
      >
        <div
          className={cn(
            "flex gap-2 ml-4 rounded-lg overflow-hidden p-1",
            isFullscreen ? "bg-gray-700/50" : "bg-muted/50 backdrop-blur-sm"
          )}
        >
          <button
            className={cn(
              "px-6 py-2 font-medium rounded-md transition-all duration-300 outline-none relative flex items-center justify-center",
              activeTab === "preview"
                ? isFullscreen
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-primary text-primary-foreground shadow-md transform scale-105"
                : isFullscreen
                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            )}
            onClick={() => setActiveTab("preview")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Preview
            {activeTab === "preview" && (
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
                  isFullscreen ? "bg-white/30" : "bg-primary-foreground/30"
                )}
              ></span>
            )}
          </button>
          <button
            className={cn(
              "px-6 py-2 font-medium rounded-md transition-all duration-300 outline-none relative flex items-center justify-center",
              activeTab === "code"
                ? isFullscreen
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-primary text-primary-foreground shadow-md transform scale-105"
                : isFullscreen
                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            )}
            onClick={() => setActiveTab("code")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Code
            {activeTab === "code" && (
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
                  isFullscreen ? "bg-white/30" : "bg-primary-foreground/30"
                )}
              ></span>
            )}
          </button>
        </div>
      </div>

      <div>
        {activeTab === "preview" && (
          <div
            className={cn(
              "p-6 flex items-start justify-start",
              isFullscreen ? "bg-gray-800" : "bg-background"
            )}
          >
            {component}
          </div>
        )}
        {activeTab === "code" && (
          <div className={cn("p-2 relative", isFullscreen && "bg-gray-900")}>
            <div className="absolute top-6 right-6 z-10 flex space-x-2">
              <button
                onClick={copyToClipboard}
                className={cn(
                  "p-2.5 rounded-md transition-all duration-200 flex items-center justify-center hover:scale-110 hover:shadow-lg transform",
                  isFullscreen
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                )}
                title="Copy code"
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                )}
              </button>
            </div>

            <div
              ref={codeContainerRef}
              className={
                isFullscreen ? "h-[calc(100vh-170px)] overflow-auto" : ""
              }
            >
              <SyntaxHighlighter
                language={getLanguage()}
                style={isDarkTheme ? atomDark : tomorrow}
                customStyle={{
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  backgroundColor: isFullscreen
                    ? "#1a202c"
                    : isDarkTheme
                    ? "#282c34" // Dark theme background
                    : "#ffffff", // Light theme background
                }}
                showLineNumbers
                wrapLines={true}
                wrapLongLines={true}
              >
                {isExpanded ? code : getCodePreview()}
              </SyntaxHighlighter>
            </div>

            {code.split("\n").length > 10 && (
              <div className="mt-2 text-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={cn(
                    "px-4 py-2 rounded-md transition-all duration-200 text-sm flex items-center mx-auto",
                    isFullscreen
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  )}
                >
                  {isExpanded ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                      Show Full Code
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { ComponentDoc as default };
