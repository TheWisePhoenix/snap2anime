import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface VariantGridProps {
  onContinue: () => void;
}

const variants = [
  {
    id: 1,
    title: 'Character Focus',
    color: 'from-[#E86AA6] to-[#FFBA49]',
    emoji: '🌊',
  },
  {
    id: 2,
    title: 'Action Scene',
    color: 'from-[#4B5FE1] to-[#E86AA6]',
    emoji: '⚡',
  },
  {
    id: 3,
    title: 'Landscape View',
    color: 'from-[#48C7B5] to-[#4B5FE1]',
    emoji: '🏔️',
  },
];

export default function VariantGrid({ onContinue }: VariantGridProps) {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1C1917] mb-2">
            Alternate Key Visuals
          </h2>
          <p className="text-lg text-[#1C1917]/70">
            Choose your favorite to share! 🎨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="cursor-pointer"
              onClick={() => setSelectedVariant(variant.id)}
            >
              <div
                className={`aspect-[2/3] bg-gradient-to-br ${variant.color} rounded-xl border-3 border-[#1C1917] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden relative`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">{variant.emoji}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-sm font-semibold mb-1">VARIANT {variant.id}</div>
                  <div className="text-xl font-bold">{variant.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onContinue}
            className="bg-[#48C7B5] text-white px-10 py-4 rounded-lg font-bold text-lg
                     border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                     hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                     active:scale-[0.97] transition-all duration-150"
          >
            Continue to Trailer
          </button>
        </motion.div>
      </div>

      {selectedVariant !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVariant(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVariant(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 border-2 border-[#1C1917] shadow-lg hover:scale-110 transition-transform z-10"
            >
              <X size={24} className="text-[#1C1917]" />
            </button>
            <div
              className={`aspect-[2/3] bg-gradient-to-br ${
                variants.find((v) => v.id === selectedVariant)?.color
              } rounded-xl border-4 border-[#1C1917] shadow-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">
                  {variants.find((v) => v.id === selectedVariant)?.emoji}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-lg font-semibold mb-2">
                  VARIANT {selectedVariant}
                </div>
                <div className="text-3xl font-bold">
                  {variants.find((v) => v.id === selectedVariant)?.title}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
