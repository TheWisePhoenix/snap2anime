import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface UploadCompleteProps {
  image: string;
  onComplete: () => void;
}

export default function UploadComplete({ image, onComplete }: UploadCompleteProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#1C1917] shadow-lg">
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          </div>

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 120],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 120],
                opacity: [1, 0],
                scale: [0, 1.5],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <Sparkles className="text-[#E86AA6]" size={20} />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-bold text-[#1C1917] mb-4"
        >
          Image Uploaded Successfully!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg text-[#1C1917]/70"
        >
          Now let's give it your anime style…
        </motion.p>
      </div>
    </motion.div>
  );
}
