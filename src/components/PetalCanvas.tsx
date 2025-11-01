import { motion } from 'framer-motion';

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 4,
  x: Math.random() * 100,
}));

export default function PetalCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-3 bg-[#E86AA6] rounded-full opacity-30"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 50, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
