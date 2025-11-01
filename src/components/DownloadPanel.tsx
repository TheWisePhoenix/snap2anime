import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, Instagram, Share2, Check } from 'lucide-react';

interface DownloadPanelProps {
  onStartAnother: () => void;
}

export default function DownloadPanel({ onStartAnother }: DownloadPanelProps) {
  const [downloaded, setDownloaded] = useState<string[]>([]);

  const handleDownload = (type: string) => {
    setDownloaded([...downloaded, type]);
    setTimeout(() => {
      setDownloaded((prev) => prev.filter((item) => item !== type));
    }, 2000);
  };

  const assets = [
    { id: 'story', label: 'Story Poster (Portrait)', size: '1080 × 1920' },
    { id: 'square', label: 'Square Post', size: '1080 × 1080' },
    { id: 'banner', label: 'Banner', size: '1920 × 1080' },
    { id: 'trailer', label: 'Trailer Video', size: '15s MP4' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            Your Anime is Ready!
          </h2>
          <p className="text-lg text-[#1C1917]/70">
            Download and share your creations with the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {assets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-[#1C1917] text-lg mb-1">
                    {asset.label}
                  </h3>
                  <p className="text-sm text-[#1C1917]/60">{asset.size}</p>
                </div>
                {downloaded.includes(asset.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-[#48C7B5] text-white rounded-full p-2"
                  >
                    <Check size={20} />
                  </motion.div>
                )}
              </div>

              <div className="aspect-video bg-gradient-to-br from-[#4B5FE1]/20 to-[#E86AA6]/20 rounded-lg border-2 border-[#1C1917]/10 mb-4 flex items-center justify-center">
                <div className="text-4xl">
                  {asset.id === 'trailer' ? '🎬' : '🖼️'}
                </div>
              </div>

              <button
                onClick={() => handleDownload(asset.id)}
                className="w-full bg-[#4B5FE1] text-white px-4 py-3 rounded-lg font-semibold
                         border-2 border-[#1C1917] shadow-[3px_3px_0px_0px_rgba(28,25,23,1)]
                         hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                         active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handleDownload('all')}
              className="bg-[#48C7B5] text-white px-8 py-4 rounded-lg font-bold text-lg
                       border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                       hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                       active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-3"
            >
              <Download size={24} />
              Download All
            </button>

            <button
              onClick={() => handleDownload('instagram')}
              className="bg-[#E86AA6] text-white px-8 py-4 rounded-lg font-bold text-lg
                       border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                       hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                       active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-3"
            >
              <Instagram size={24} />
              Share to Instagram Story
            </button>
          </div>

          {(downloaded.includes('all') || downloaded.includes('instagram')) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#48C7B5] text-white px-6 py-3 rounded-lg text-center font-semibold border-2 border-[#1C1917]"
            >
              Saved! Ready to post 💖
            </motion.div>
          )}

          <div className="text-center pt-8">
            <button
              onClick={onStartAnother}
              className="bg-white text-[#1C1917] px-10 py-4 rounded-lg font-bold text-lg
                       border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                       hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                       active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-3 mx-auto"
            >
              <Share2 size={24} />
              Start Another
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
