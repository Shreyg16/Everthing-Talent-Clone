'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import myLogo from '../public/image/nextbase-dark-logo.jpg'
import { ModeToggle } from './ui/ModeToggle'
import { Button } from './ui/button'
import { RainbowButton } from './ui/rainbow-button'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Use Cases', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Resources', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'Support', href: '/' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='border-b-2 border-gray-500 bg-black text-white'>
      <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href="/" className='flex items-center'>
              <Image 
                src={myLogo} 
                alt="Everything Talent Logo" 
                width={40} 
                height={40} 
                className='cursor-pointer'
              />
              <h1 className='ml-2 font-bold text-base sm:text-lg md:text-xl cursor-pointer truncate max-w-[120px] sm:max-w-full'>Everything Talent</h1>
            </Link>
          </div>
          <div className='hidden lg:block flex-grow'>
            <ul className='flex justify-center space-x-2 md:space-x-5'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className='text-[#acb5c2] hover:text-white py-2 rounded-md text-sm md:text-base'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center space-x-2 md:space-x-4'>
            <ModeToggle />
            <div className="hidden lg:block">
              <Link className="w-full" href="/">
              {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
           focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl 
           transition duration-200 h-8 px-4 py-2 group w-full">Login<svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button> */}
            <RainbowButton>
              Login
              <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </RainbowButton>
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-expanded={isMobileMenuOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {isMobileMenuOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50'>
          <div className='bg-gray-900 h-full w-64 p-5 transform transition-transform duration-300 ease-in-out'>
            <div className='flex justify-between items-center mb-5'>
            <h1 className='ml-2 font-bold text-base sm:text-lg md:text-xl cursor-pointer truncate max-w-[120px] sm:max-w-full'>Everything Talent</h1>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-white hover:text-gray-300'
              >
                <X className='h-6 w-6' />
              </button>
            </div>
            <div className='space-y-3'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/" 
                className='block mt-4'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full justify-center group">
                  Login
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

