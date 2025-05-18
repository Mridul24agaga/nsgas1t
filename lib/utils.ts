import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes properly.
 * This is useful for conditionally applying classes and handling class conflicts.
 *
 * @param inputs - Class names to be combined
 * @returns A merged string of class names
 *
 * Example:
 * cn("text-red-500", isActive && "bg-blue-500", "p-4")
 * // Returns "text-red-500 bg-blue-500 p-4" if isActive is true
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date to a human-readable string
 *
 * @param date - The date to format
 * @param options - Intl.DateTimeFormat options
 * @returns A formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  },
) {
  return new Intl.DateTimeFormat("en-US", {
    ...options,
  }).format(new Date(date))
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 *
 * @param str - The string to truncate
 * @param length - Maximum length before truncation
 * @returns The truncated string
 */
export function truncate(str: string, length: number) {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Generates a random number between min and max (inclusive)
 *
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns A random number
 */
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Delays execution for a specified number of milliseconds
 *
 * @param ms - Milliseconds to delay
 * @returns A promise that resolves after the delay
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
