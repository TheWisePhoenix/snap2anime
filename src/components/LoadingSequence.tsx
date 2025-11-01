import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FileText, Pencil, Palette, Music, Image } from 'lucide-react';

interface LoadingSequenceProps {
  onComplete: () => void;
}

const loadingSteps = [
  { text: 'Analyzing image…', icon: FileText },
  { text: 'Sketching characters…', icon: Pencil },
  { text: 'Coloring frames…', icon: Palette },
  { text: 'Adding dramatic soundtrack…', icon: Music },
  { text: 'Finalizing your anime poster!', icon: Image },
];

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-lg w-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 mx-auto mb-8 border-4 border-[#4B5FE1] border-t-transparent rounded-full"
        />

        <div className="space-y-6 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              {loadingSteps[currentStep] && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {(() => {
                      const Icon = loadingSteps[currentStep].icon;
                      return <Icon className="text-[#E86AA6]" size={32} />;
                    })()}
                  </motion.div>
                  <p className="text-2xl font-medium text-[#1C1917]">
                    {loadingSteps[currentStep].text}
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 pt-8">
            {loadingSteps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index <= currentStep ? 'bg-[#4B5FE1]' : 'bg-gray-300'
                }`}
                animate={index === currentStep ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.div
                className="h-full bg-[#48C7B5]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
