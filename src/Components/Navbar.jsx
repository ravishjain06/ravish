import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const lineVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    transformOrigin: 'left'
  },
  visible: (custom) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.2,
      delay: custom,
      ease: [0.4, 0, 0.2, 1]
    }
  })
}

const RLogo = ({ width = 40, height = 40, animated = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
    className="mr-2"
    style={{ display: 'block' }}
  >
    <defs>
      <linearGradient id="rGradientWhite" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0e0e0" />
      </linearGradient>
    </defs>
    {animated ? (
      <>
        <motion.path
          fill="url(#rGradientWhite)"
          d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
        />
        <motion.path
          fill="url(#rGradientWhite)"
          d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          custom={0.8}
        />
      </>
    ) : (
      <>
        <path
          fill="url(#rGradientWhite)"
          d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
        />
        <path
          fill="url(#rGradientWhite)"
          d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"
        />
      </>
    )}
  </svg>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`
          pointer-events-auto w-[98%] sm:w-[96%] md:w-[92%] lg:w-[84%] xl:w-[72%] mt-4
          flex items-center justify-between px-6 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-3
          transition-all duration-300
          rounded-full shadow-lg
          ${scrolled
            ? 'bg-black/40 backdrop-blur-md'
            : 'bg-white/10 backdrop-blur-md'
          }
        `}
      >
        <div className="flex items-center">
          <RLogo width={40} height={40} animated={true} />
          {/* <span className="text-lg sm:text-xl font-bold text-white tracking-tight">Ravish Jain</span> */}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-6 text-zinc-200 font-medium">
          <li>
            <a
              href="#skills"
              className="hover:text-white transition-colors duration-200"
              onClick={e => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition-colors duration-200"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200"
              onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul
            className="absolute top-[calc(100%+12px)] left-0 right-0 mx-auto w-full max-w-full bg-zinc-900/90 backdrop-blur-md rounded-2xl flex flex-col items-center gap-6 py-6  sm:hidden text-zinc-200 font-medium shadow-2xl z-50 transition-all duration-300"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            
            }}
          >
            <li className="w-full">
              <a
                href="#skills"
                className="hover:text-white transition-colors duration-200 block w-full text-center"
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </a>
            </li>
            <li className="w-full">
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-200 block w-full text-center"
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
            </li>
            <li className="w-full">
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200 block w-full text-center"
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar