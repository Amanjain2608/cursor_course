"use client";

export default function Certification() {
  const certifications = [
    {
      name: "Tavily Search API Fundamentals",
      description: "Master the basics of integrating Tavily Search into your applications",
      level: "Beginner",
      duration: "2 hours",
      status: "available"
    },
    {
      name: "Advanced Search Optimization",
      description: "Learn advanced techniques for optimizing search results and performance",
      level: "Advanced",
      duration: "4 hours",
      status: "available"
    },
    {
      name: "AI Integration Specialist",
      description: "Become an expert in integrating Tavily with AI systems and LLMs",
      level: "Expert",
      duration: "6 hours",
      status: "coming-soon"
    }
  ];

  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Certification</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Earn certifications and prove your expertise with Tavily Search
        </p>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Become a Certified Tavily Expert</h2>
            <p className="text-blue-100 mb-4">
              Complete our certification programs to demonstrate your skills and stand out in the developer community
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50">
              Get Started
            </button>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {cert.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        cert.level === 'Beginner' 
                          ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                          : cert.level === 'Advanced'
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cert.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    {cert.status === 'available' ? (
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                        Start Course
                      </button>
                    ) : (
                      <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 rounded-lg font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
