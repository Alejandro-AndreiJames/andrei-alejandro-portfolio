import { motion, useReducedMotion } from 'motion/react'

function Backdrop() {
  const prefersReducedMotion = useReducedMotion()

  const drift = prefersReducedMotion
    ? undefined
    : {
        x: [0, 420, -260, 180, 0],
        y: [0, -220, 170, -90, 0],
        scale: [1, 1.28, 0.82, 1.14, 1],
      }

  const counterDrift = prefersReducedMotion
    ? undefined
    : {
        x: [0, -460, 300, -160, 0],
        y: [0, 200, -160, 110, 0],
        scale: [1, 0.82, 1.3, 0.92, 1],
      }

  const slowDrift = prefersReducedMotion
    ? undefined
    : {
        x: [0, 260, -340, 120, 0],
        y: [0, 180, 90, -150, 0],
        scale: [1, 1.2, 0.86, 1.1, 1],
      }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="ambient-noise absolute inset-0" />

      <motion.div
        className="absolute -top-32 left-[10%] h-[32rem] w-[32rem] rounded-full bg-accent opacity-[var(--theme-orb)] blur-[110px]"
        animate={drift}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-[40%] right-[5%] h-[26rem] w-[26rem] rounded-full bg-accent opacity-[var(--theme-orb-soft)] blur-[100px]"
        animate={counterDrift}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[5%] left-[35%] h-[22rem] w-[22rem] rounded-full bg-accent opacity-[var(--theme-orb-soft)] blur-[105px]"
        animate={slowDrift}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default Backdrop
