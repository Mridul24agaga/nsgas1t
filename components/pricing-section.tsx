"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-gray-600 text-lg">
            Use Yuktara individually or upgrade to link more accounts and add seats for your team members.
          </p>
        </div>

        <div className="relative">
          {/* Plus icon in the top left */}
          <div className="absolute -top-4 -left-4 text-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Pricing grid with divider lines */}
          <div className="grid grid-cols-3 border-t border-l border-gray-200">
            {/* Starter Plan */}
            <div className="border-r border-gray-200 p-10 pt-14">
              <h3 className="text-gray-500 mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-12 flex items-end">
                <span className="text-black">$49</span>
                <span className="text-gray-500 text-xl ml-1">/month</span>
              </div>

              <div className="space-y-5 mb-12">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Inbox and CRM</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">1 seat</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">1 linked account</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">50 campaign DMs per day</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Up to 5 lists</span>
                </div>
              </div>

              <Link
                href="#"
                className="flex items-center justify-center py-3 px-6 rounded-md border border-gray-300 text-black hover:bg-gray-100 transition-colors w-full"
              >
                Start for free <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="border-r border-gray-200 p-10 pt-14">
              <h3 className="text-gray-500 mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-12 flex items-end">
                <span className="text-black">$79</span>
                <span className="text-gray-500 text-xl ml-1">/account/mo.</span>
              </div>

              <div className="space-y-5 mb-12">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Inbox and CRM</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">+$40 /mo/team member</span>
                    <div className="ml-2 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">?</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Multiple linked accounts</span>
                    <div className="ml-2 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">?</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">400 campaign DMs/account/day</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Unlimited lists</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Advanced lead scraping</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Export leads</span>
                </div>
              </div>

              <Link
                href="#"
                className="flex items-center justify-center py-3 px-6 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
              >
                Start for free <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Custom Plan */}
            <div className="p-10 pt-14">
              <h3 className="text-gray-500 mb-4">Custom</h3>
              <div className="text-4xl font-bold mb-12 flex items-center">
                <span className="text-black">Contact us</span>
                <ChevronRight className="ml-2 w-6 h-6" />
              </div>

              <div className="space-y-5 mb-12">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Inbox and CRM</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Unlimited seats</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Unlimited linked accounts</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">Unlimited campaign DMs</span>
                    <div className="ml-2 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">?</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Unlimited lists</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Custom lead scraping</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Custom features</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Dedicated support</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="text-gray-600">Data exports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
