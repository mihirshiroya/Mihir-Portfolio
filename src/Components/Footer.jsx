import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and tagline */}
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="text-2xl font-bold text-gray-800 font-allura">
               Mihir Shiroya
              </a>
              <p className="mt-2 text-sm text-white/55">
                Crafting digital experiences with passion and precision.
              </p>
            </div>
            <div className='w-full flex flex-row justify-around'>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase()}`} className="text-base text-white/55 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Connect</h3>
                <ul className="mt-4 text-white/55 space-y-2">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/55 hover:text-gray-900">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/55 hover:text-gray-900">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/55 hover:text-gray-900">
                      <Twitter className="h-5 w-5 mr-2" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick links */}

          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-gray-900 pt-8">
            <p className="text-sm text-white/55 text-center">
              © {new Date().getFullYear()} Mihir Shiroya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}