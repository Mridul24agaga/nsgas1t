"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Pricing that scales with you</h2>
        <p className="text-gray-600">
          Whichever plan you pick, it's free until you love your docs. That's our promise.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-full text-sm ${
              billingCycle === "monthly" ? "bg-white shadow-sm" : "text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-full text-sm ${
              billingCycle === "yearly" ? "bg-white shadow-sm" : "text-gray-700"
            }`}
          >
            Yearly
            <span className="ml-1 bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Free plan */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-blue-600">Free</span>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">$0</span>
              <span className="ml-1 text-gray-500 text-sm">/month</span>
            </div>
            <p className="mt-2 text-sm text-amber-600 font-medium">Perfect for individual users</p>

            <div className="mt-6">
              <button className="w-full py-3 px-4 rounded-full text-sm font-medium bg-white border border-gray-300 hover:bg-gray-50 text-gray-900">
                Start Free
              </button>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-gray-900 mb-4">Everything in Pro +</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Custom domain</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">SEO-optimizations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Auto-generated API docs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Built-in components library</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Startup plan */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-blue-500 text-white text-xs font-medium py-1 px-3 text-center">Popular</div>
          <div className="p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-blue-600">Startup</span>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">$12</span>
              <span className="ml-1 text-gray-500 text-sm">/month</span>
            </div>
            <p className="mt-2 text-sm text-amber-600 font-medium">Ideal for professionals and small teams</p>

            <div className="mt-6">
              <button className="w-full py-3 px-4 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white">
                Upgrade to Pro
              </button>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-gray-900 mb-4">Everything in Pro +</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Custom domain</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">SEO-optimizations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Auto-generated API docs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Built-in components library</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">E-commerce integration</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">User authentication system</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Multi-language support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Real-time collaboration tools</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise plan */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-blue-600">Enterprise</span>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold">$24</span>
              <span className="ml-1 text-gray-500 text-sm">/month</span>
            </div>
            <p className="mt-2 text-sm text-amber-600 font-medium">
              Best for large teams and enterprise-level organizations
            </p>

            <div className="mt-6">
              <button className="w-full py-3 px-4 rounded-full text-sm font-medium bg-black hover:bg-gray-900 text-white">
                Contact Sales
              </button>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-gray-900 mb-4">Everything in Pro +</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Custom domain</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">SEO-optimizations</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Auto-generated API docs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Built-in components libraries</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
                    <Check className="h-3 w-3 text-gray-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-700">Real-time collaboration tools</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
