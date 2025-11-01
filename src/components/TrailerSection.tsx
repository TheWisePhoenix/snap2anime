import { motion } from 'framer-motion';
import { useState } from 'react';
import { Film, Play } from 'lucide-react';

interface TrailerSectionProps {
  onContinue: () => void;
}

export default function TrailerSection({ onContinue }: TrailerSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-[#1C1917] mb-12"
        >
          Create Your Anime Trailer
        </motion.h2>

        {!showPreview ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl border-3 border-[#1C1917] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] p-12"
          >
            <motion.div
              animate={isGenerating ? { rotate: 360 } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 mx-auto mb-8"
            >
              <Film size={128} className="text-[#E86AA6]" />
            </motion.div>

            <h3 className="text-2xl font-bold text-[#1C1917] mb-4">
              {isGenerating ? 'Generating Trailer...' : 'Generate a 10-15s Trailer'}
            </h3>

            <p className="text-[#1C1917]/70 mb-8">
              Create a cinematic trailer for your anime poster
              <br />
              <span className="text-sm">(AI trailer generator coming soon)</span>
            </p>

            {!isGenerating ? (
              <button
                onClick={handleGenerate}
                className="bg-[#E86AA6] text-white px-10 py-4 rounded-lg font-bold text-lg
                         border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                         hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                         active:scale-[0.97] transition-all duration-150 inline-flex items-center gap-3"
              >
                <Film size={24} />
                Generate Trailer
              </button>
            ) : (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-2 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <motion.div
                      className="h-full bg-[#E86AA6]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="aspect-video bg-gradient-to-br from-[#1C1917] to-[#4B5FE1] rounded-xl border-3 border-[#1C1917] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 border-[#1C1917]"
                >
                  <Play size={40} className="text-[#1C1917] ml-1" fill="#1C1917" />
                </motion.div>
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                00:15
              </div>
              <motion.div
                className="absolute inset-0 text-white text-6xl flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💧
              </motion.div>
            </div>

            <button
              onClick={onContinue}
              className="bg-[#4B5FE1] text-white px-10 py-4 rounded-lg font-bold text-lg
                       border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                       hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                       active:scale-[0.97] transition-all duration-150"
            >
              Continue to Download
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
