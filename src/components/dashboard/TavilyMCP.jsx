"use client";

export default function TavilyMCP() {
  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Tavily MCP</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Model Context Protocol integration for AI assistants
            </p>
          </div>
          <a
            href="https://github.com/tavily/mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600 text-white rounded-lg font-medium"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-3xl font-bold">Tavily MCP Server</h2>
            </div>
            <p className="text-lg text-purple-100 mb-6">
              Integrate Tavily Search directly into Claude Desktop, Cline, and other MCP-compatible AI tools
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50">
                Install Now
              </button>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium border border-white/20">
                View Guide
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Real-time Web Search",
                  description: "Access current information from across the web",
                  icon: "🔍"
                },
                {
                  title: "Claude Desktop Integration",
                  description: "Works seamlessly with Claude Desktop app",
                  icon: "🖥️"
                },
                {
                  title: "Easy Configuration",
                  description: "Simple JSON configuration file",
                  icon: "⚙️"
                },
                {
                  title: "Open Source",
                  description: "Free and open source on GitHub",
                  icon: "💻"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Installation */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Quick Installation</h2>
            <div className="bg-zinc-900 rounded-lg p-6 text-zinc-100 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">{`# Install via npm
npm install -g @tavily/mcp-server

# Add to Claude Desktop config
{
  "mcpServers": {
    "tavily": {
      "command": "npx",
      "args": ["-y", "@tavily/mcp-server"],
      "env": {
        "TAVILY_API_KEY": "your-api-key-here"
      }
    }
  }
}`}</pre>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Resources</h2>
            <div className="space-y-3">
              {[
                { title: "Installation Guide", url: "#" },
                { title: "Configuration Options", url: "#" },
                { title: "Troubleshooting", url: "#" },
                { title: "GitHub Repository", url: "https://github.com/tavily/mcp" }
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {resource.title}
                  </span>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
