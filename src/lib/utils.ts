import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const setStorage = <T = object>(key: string, value: T) => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(`Error saving to localStorage. Key: "${key}".`, e)
  }
}

export const getStorage = <T = object>(key: string): T | null => {
  if (typeof window === 'undefined') return null

  try {
    return JSON.parse(localStorage.getItem(key) || '') as T
  } catch (e) {
    console.error(`Error retrieving value from localStorage. Key: "${key}".`, e)

    return null
  }
}
