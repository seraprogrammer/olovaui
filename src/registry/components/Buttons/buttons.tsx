import { ComponentRowGrid } from "@/uiEngine/GroupEngine";

export default function GroupButton() {
  const components = [
    {
      code: (
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Default
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Default</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Primary
        </button>
      ),
      codeString: `<button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Primary</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Secondary
        </button>
      ),
      codeString: `<button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Secondary</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Outline
        </button>
      ),
      codeString: `<button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Outline</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Ghost
        </button>
      ),
      codeString: `<button className="hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Ghost</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="text-primary underline-offset-4 hover:underline h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Link
        </button>
      ),
      codeString: `<button className="text-primary underline-offset-4 hover:underline h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Link</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Destructive
        </button>
      ),
      codeString: `<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Destructive</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Purple
        </button>
      ),
      codeString: `<button className="bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Purple</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 text-sm rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Small
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 text-sm rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Small</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Large
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Large</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
          disabled
        >
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none" disabled>
  <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading
</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Gradient
        </button>
      ),
      codeString: `<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Gradient</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none">
          <svg
            className="mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          Add Item
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none">
  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
  Add Item
</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Add"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none" aria-label="Add">
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Pill Button
        </button>
      ),
      codeString: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Pill Button</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Extra Rounded
        </button>
      ),
      codeString: `<button className="bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Extra Rounded</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2 rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Slightly Rounded
        </button>
      ),
      codeString: `<button className="bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2 rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Slightly Rounded</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-gray-800 text-white hover:bg-gray-900 h-10 px-4 py-2 rounded-none font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Square Button
        </button>
      ),
      codeString: `<button className="bg-gray-800 text-white hover:bg-gray-900 h-10 px-4 py-2 rounded-none font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Square Button</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-amber-500 text-white hover:bg-amber-600 h-10 px-4 py-2 rounded-t-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Top Rounded
        </button>
      ),
      codeString: `<button className="bg-amber-500 text-white hover:bg-amber-600 h-10 px-4 py-2 rounded-t-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Top Rounded</button>`,
      filePath: "button.tsx",
    },
    {
      code: (
        <button className="bg-teal-500 text-white hover:bg-teal-600 h-10 px-4 py-2 rounded-b-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">
          Bottom Rounded
        </button>
      ),
      codeString: `<button className="bg-teal-500 text-white hover:bg-teal-600 h-10 px-4 py-2 rounded-b-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none">Bottom Rounded</button>`,
      filePath: "button.tsx",
    },
  ];

  return (
    <ComponentRowGrid
      title="Button Components"
      description="A collection of customizable button components for various use cases. For React, use className attribute ⚛️. For HTML, make sure to change className to class attribute 🌐."
      components={components}
    />
  );
}
