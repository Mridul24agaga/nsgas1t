import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 relative z-10">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg">
                {/* Logo image can be placed here */}
                <Image src="/yuktara.png" alt="Logo" width={214} height={214} className="h-6 w-auto" />
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-sm md:text-base">The easiest way to extract data from the web</p>

            {/* Social icons */}
            <div className="flex gap-5 mb-8">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                aria-label="Medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M14.5 9a3.5 3.5 0 0 0-5 0v6a3.5 3.5 0 0 0 5 0"></path>
                  <path d="M8.5 15a3.5 3.5 0 0 0 5 0"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Playground
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Extract
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  SDKs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Student Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  API Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms-and-condition"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 relative z-10">
          <p>© {new Date().getFullYear()} Yuktara. All rights reserved.</p>
        </div>
      </div>

    
    </footer>
  )
}
