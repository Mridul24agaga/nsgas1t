"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Yuktara</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 font-medium">
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-4">
            <nav className="flex flex-col gap-3">
              <Link
                href="#features"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-gray-100">
                <Link
                  href="/login"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-3 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}