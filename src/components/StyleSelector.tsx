import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sword, Coffee, Bot, Sparkles, Zap, Cloud } from 'lucide-react';

interface StyleSelectorProps {
  onComplete: (genre: string, style: string) => void;
}

const genres = [
  { id: 'shounen', label: 'Shounen', icon: Sword, emoji: '⚔️' },
  { id: 'slice-of-life', label: 'Slice-of-Life', icon: Coffee, emoji: '🍵' },
  { id: 'mecha', label: 'Mecha', icon: Bot, emoji: '🤖' },
  { id: 'magical-girl', label: 'Magical Girl', icon: Sparkles, emoji: '🌸' },
  { id: 'sports', label: 'Sports', icon: Zap, emoji: '🏃‍♂️' },
  { id: 'cozy', label: 'Cozy', icon: Cloud, emoji: '☁️' },
];

const styles = [
  { id: '90s-cel', label: '90s Cel-Shaded' },
  { id: 'ghibli', label: 'Ghibli-Like' },
  { id: 'modern', label: 'Modern Digital' },
  { id: 'manga', label: 'Manga B&W' },
  { id: 'vaporwave', label: 'Vaporwave Neon' },
];

export default function StyleSelector({ onComplete }: StyleSelectorProps) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleGenerate = () => {
    if (selectedGenre && selectedStyle) {
      onComplete(selectedGenre, selectedStyle);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-2xl w-full">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-[#1C1917] text-center mb-12"
        >
          Choose Your Anime Style
        </motion.h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#1C1917] mb-4">Genre</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {genres.map((genre, index) => (
              <motion.button
                key={genre.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedGenre(genre.id)}
                className={`
                  px-4 py-3 rounded-lg font-medium text-sm border-2 border-[#1C1917]
                  shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]
                  hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)]
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  transition-all duration-150 flex items-center justify-center gap-2
                  ${
                    selectedGenre === genre.id
                      ? 'bg-[#E86AA6] text-white'
                      : 'bg-white text-[#1C1917]'
                  }
                `}
              >
                <span className="text-lg">{genre.emoji}</span>
                {genre.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#1C1917] mb-4">Visual Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {styles.map((style, index) => (
              <motion.button
                key={style.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index }}
                whileHover={{ scale: 1.05, rotate: [0, -0.5, 0.5, 0] }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedStyle(style.id)}
                className={`
                  px-4 py-3 rounded-lg font-medium text-sm border-2 border-[#1C1917]
                  shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]
                  hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)]
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  transition-all duration-150
                  ${
                    selectedStyle === style.id
                      ? 'bg-[#E86AA6] text-white'
                      : 'bg-white text-[#1C1917]'
                  }
                `}
              >
                {style.label}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleGenerate}
            disabled={!selectedGenre || !selectedStyle}
            className={`
              px-12 py-4 rounded-lg font-bold text-lg border-2 border-[#1C1917]
              shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
              transition-all duration-150
              ${
                selectedGenre && selectedStyle
                  ? 'bg-[#4B5FE1] text-white hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-[0.97]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
              }
            `}
          >
            Generate My Anime!
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
