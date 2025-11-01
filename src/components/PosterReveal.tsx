import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PosterRevealProps {
  onContinue: () => void;
}

const title = 'Hydro Hero';
const description =
  'When an ordinary bottle awakens with the spirit of hidden springs, one unlikely hero must journey through the flowing currents of destiny to save a world on the brink of drought.';

export default function PosterReveal({ onContinue }: PosterRevealProps) {
  const [titleText, setTitleText] = useState('');
  const [descText, setDescText] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex < title.length) {
        setTitleText(title.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setTimeout(() => {
          let descIndex = 0;
          const descInterval = setInterval(() => {
            if (descIndex < description.length) {
              setDescText(description.slice(0, descIndex + 1));
              descIndex++;
            } else {
              clearInterval(descInterval);
              setTimeout(() => setShowButton(true), 500);
            }
          }, 30);
        }, 300);
      }
    }, 80);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          <div className="w-64 h-96 md:w-80 md:h-[480px] bg-gradient-to-br from-[#4B5FE1] to-[#48C7B5] rounded-xl border-4 border-[#1C1917] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">💧</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm font-semibold mb-2">COMING SOON</div>
              <div className="text-2xl font-bold">HYDRO HERO</div>
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-[#FFBA49]" size={32} fill="#FFBA49" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1917] min-h-[60px]">
            {titleText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </h2>

          <p className="text-lg md:text-xl text-[#1C1917]/80 max-w-2xl mx-auto min-h-[120px] leading-relaxed">
            {descText}
            {descText.length < description.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </p>
        </motion.div>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContinue}
            className="mt-12 bg-[#4B5FE1] text-white px-10 py-4 rounded-lg font-bold text-lg
                     border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                     hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                     transition-all duration-150"
          >
            Continue
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
