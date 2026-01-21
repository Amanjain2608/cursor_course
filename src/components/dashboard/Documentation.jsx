"use client";

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Quick Start Guide", description: "Get up and running in 5 minutes" },
        { name: "Authentication", description: "Learn how to authenticate your requests" },
        { name: "Basic Search", description: "Make your first search request" }
      ]
    },
    {
      title: "API Reference",
      items: [
        { name: "Search Endpoint", description: "Complete search API documentation" },
        { name: "Rate Limits", description: "Understanding rate limits and quotas" },
        { name: "Response Format", description: "Understanding API responses" }
      ]
    },
    {
      title: "Advanced Topics",
      items: [
        { name: "Custom Filters", description: "Refine your search results" },
        { name: "Webhooks", description: "Set up real-time notifications" },
        { name: "Best Practices", description: "Optimize your integration" }
      ]
    }
  ];

  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Documentation</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Complete guide to using the Tavily Search API
            </p>
          </div>
          <a
            href="https://docs.tavily.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
          >
            View Full Docs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Search */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-100"
            />
          </div>

          {/* Documentation Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  >
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Code Example */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Quick Example
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 text-zinc-100 font-mono text-sm overflow-x-auto">
              <pre>{`import { TavilyClient } from '@tavily/api';

const client = new TavilyClient({ 
  apiKey: 'your-api-key' 
});

const results = await client.search({
  query: 'latest AI developments',
  maxResults: 5
});

console.log(results);`}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
