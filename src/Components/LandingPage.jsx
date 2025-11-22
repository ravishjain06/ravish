import React, { useMemo, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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

const RLogo = ({ width = 700, height = 700, animated = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
    className="opacity-[0.08] select-none pointer-events-none"
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

const getRandom = (min, max) => Math.random() * (max - min) + min

const generateRoamingDots = (count = 6) =>
  Array.from({ length: count }).map(() => ({
    size: getRandom(10, 18),
    color: [
      'bg-blue-400',
      'bg-pink-400',
      'bg-purple-400',
      'bg-yellow-400',
      'bg-green-400',
      'bg-cyan-400'
    ][Math.floor(Math.random() * 6)],
    initial: {
      x: getRandom(-350, 350),
      y: getRandom(-250, 250)
    },
    animate: {
      x: getRandom(-350, 350),
      y: getRandom(-250, 250)
    },
    duration: getRandom(6, 14),
    delay: getRandom(0, 4)
  }))

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const [roamingDots, setRoamingDots] = useState(() => generateRoamingDots(7))

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Regenerate roaming dots animation every time all finish
  useEffect(() => {
    if (!isLoaded || prefersReducedMotion) return
    const interval = setInterval(() => {
      setRoamingDots(generateRoamingDots(7))
    }, 12000)
    return () => clearInterval(interval)
  }, [isLoaded, prefersReducedMotion])

  // Reduced number of floating elements for better performance
  const floatingShapes = useMemo(() =>
    [...Array(3)].map(() => ({
      width: Math.random() * 80 + 60,
      height: Math.random() * 80 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 25 + Math.random() * 10,
      delay: Math.random() * 5,
    })), []
  )

  const floatingParticles = useMemo(() =>
    [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 4,
    })), []
  )

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 relative overflow-hidden">
      {/* Static Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Diagonal Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Subtle Gradient Overlays */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-full h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      />



      {/* Centered Logo as Background */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
        <RLogo width={600} height={600} animated={isLoaded && !prefersReducedMotion} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center min-h-screen px-6 sm:px-16 md:px-28 lg:px-40 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mt-32"
        >
    

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight leading-tight">
            Ravish Jain
          </h1>

       

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-300 mb-6 tracking-wide">
            Full Stack Developer
          </p>

          <p className="text-base sm:text-lg font-medium text-zinc-400 leading-relaxed max-w-2xl mb-12">
            Creating exceptional digital experiences through innovative solutions and elegant code.
            Passionate about building products that make a difference.
          </p>

        </motion.div>
      </div>

    </div>
  )
}

export default LandingPage