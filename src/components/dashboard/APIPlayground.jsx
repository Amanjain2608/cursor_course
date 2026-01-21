"use client";

import { useState } from "react";

export default function APIPlayground() {
  const [apiKey, setApiKey] = useState("");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!apiKey || !query) {
      alert("Please enter both API key and query");
      return;
    }

    setLoading(true);
    try {
      // Simulated API call - replace with actual Tavily API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResponse({
        results: [
          { title: "Example Result 1", url: "https://example.com/1", snippet: "This is a sample search result..." },
          { title: "Example Result 2", url: "https://example.com/2", snippet: "Another sample result..." }
        ]
      });
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">API Playground</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Test your API keys and explore Tavily Search features
        </p>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Search Query
                </label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What would you like to search for?"
                  rows={4}
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-100"
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-50"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          {response && (
            <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Results</h3>
              <div className="space-y-4">
                {response.results.map((result, index) => (
                  <div key={index} className="border-b border-zinc-200 dark:border-zinc-700 pb-4 last:border-0">
                    <h4 className="text-blue-600 dark:text-blue-400 font-medium">{result.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{result.snippet}</p>
                    <a href={result.url} className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 block">
                      {result.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
