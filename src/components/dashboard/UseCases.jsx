"use client";

export default function UseCases() {
  const useCases = [
    {
      title: "AI-Powered Research",
      description: "Enhance your AI applications with real-time web search capabilities",
      icon: "🤖",
      examples: ["LLM augmentation", "RAG systems", "AI assistants"]
    },
    {
      title: "Data Collection",
      description: "Gather comprehensive data from across the web for analysis",
      icon: "📊",
      examples: ["Market research", "Competitive analysis", "Trend monitoring"]
    },
    {
      title: "Content Generation",
      description: "Create content backed by current, accurate information",
      icon: "✍️",
      examples: ["Blog posts", "Reports", "News summaries"]
    },
    {
      title: "Knowledge Base",
      description: "Build and maintain up-to-date knowledge repositories",
      icon: "📚",
      examples: ["Documentation", "FAQs", "Training data"]
    }
  ];

  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Use Cases</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Discover how to leverage Tavily Search in your applications
        </p>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {useCase.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {useCase.description}
              </p>
              <div className="space-y-2">
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Examples:</div>
                <ul className="space-y-1">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
