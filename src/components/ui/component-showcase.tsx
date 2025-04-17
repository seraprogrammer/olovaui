import { useState, ReactNode } from "react";

interface ComponentShowcaseProps {
  title: string;
  component: ReactNode;
  sourceCode: string;
}

export function ComponentShowcase({
  title,
  component,
  sourceCode,
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "preview"
                ? "bg-white border-b-2 border-blue-500"
                : "bg-gray-50"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "code"
                ? "bg-white border-b-2 border-blue-500"
                : "bg-gray-50"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === "preview" ? (
            <div className="flex justify-center items-center p-10">
              {component}
            </div>
          ) : (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto">
              <code>{sourceCode || "Loading source code..."}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
