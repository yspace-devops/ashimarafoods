import { motion } from "motion/react"

type MacaroniProps = {
  className?: string
  delay?: number
  rotate?: number
}

function Macaroni({ className = "", delay = 0, rotate = 0 }: MacaroniProps) { 
  
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`absolute ${className}`}
      initial={{ y: 0, rotate, opacity: 0 }}
      animate={{ y: [0, -10, 0], rotate: [rotate, rotate + 6, rotate] as number[], opacity: 1 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <defs>
        <linearGradient id="pasta" x1="0" x2="1">
          <stop offset="0%" stopColor="#e9b949" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path
        d="M20 50c0-16 14-30 30-30s30 14 30 30c0 6-2 10-6 10s-6-4-6-10c0-9-9-18-18-18s-18 9-18 18c0 6-2 10-6 10s-6-4-6-10z"
        fill="url(#pasta)"
      />
    </motion.svg>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Soft page gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-rose-300/25 blur-3xl" />
      </div>

      {/* Top brand chip */}
      <motion.div
        className="absolute left-1/2 top-6 z-20 -translate-x-1/2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-md ring-1 ring-black/5">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">🍽️</span>
          <span>Ashimara Foods</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 grid min-h-screen place-items-center px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <motion.div
            className="mb-6 text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden
          >
            👍
          </motion.div>

          <motion.p
            className="text-xs tracking-[0.2em] text-slate-500"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            WE'RE STILL
          </motion.p>

          <motion.h1
            className="mt-3 text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cooking Our Website.
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-center text-slate-600"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are going to launch our website very soon. Stay tuned.
          </motion.p>
        </div>
      </div>

      {/* Edge decorations */}
      <Macaroni className="-left-4 bottom-24 h-16 w-16" delay={0.3} rotate={-12} />
      <Macaroni className="right-10 bottom-28 h-14 w-14" delay={0.6} rotate={18} />
      <Macaroni className="left-1/3 -bottom-6 h-16 w-16" delay={0.9} rotate={8} />
    </div>
  )
}

export default App
