"use client";

export default function Billing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["1,000 requests/month", "Basic search", "Community support"],
      current: true
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      features: ["50,000 requests/month", "Advanced search", "Priority support", "Custom integrations"],
      current: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: ["Unlimited requests", "Dedicated infrastructure", "24/7 support", "SLA guarantee"],
      current: false
    }
  ];

  return (
    <>
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Billing</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Manage your subscription and billing information
        </p>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">Current Usage</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  You've used 247 of 1,000 requests this month (24.7%)
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Choose Your Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-800 rounded-lg border-2 p-6 ${
                  plan.current 
                    ? 'border-blue-600 dark:border-blue-400' 
                    : 'border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {plan.current && (
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full mb-4">
                    Current Plan
                  </span>
                )}
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{plan.price}</span>
                  <span className="text-zinc-600 dark:text-zinc-400 text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  disabled={plan.current}
                  className={`w-full px-4 py-2 rounded-lg font-medium ${
                    plan.current
                      ? 'bg-zinc-100 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
