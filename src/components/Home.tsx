import { motion } from 'framer-motion';
import { Upload, Camera } from 'lucide-react';
import { useRef } from 'react';

interface HomeProps {
  onImageUpload: (image: string) => void;
}

export default function Home({ onImageUpload }: HomeProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1C1917] mb-2 tracking-tight">
            Snap2Anime
          </h1>
          <p className="text-lg text-[#1C1917]/70 mb-2 font-light tracking-wide">
            スナップトゥアニメ
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-[#1C1917]/80 mb-12"
        >
          Turn your world into an anime scene.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full max-w-xs bg-[#4B5FE1] text-white px-8 py-4 rounded-lg font-medium text-lg
                     border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                     hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                     active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-3"
          >
            <Upload size={24} />
            Upload Photo
          </button>

          <button
            onClick={() => cameraInputRef.current?.click()}
            className="w-full max-w-xs bg-[#E86AA6] text-white px-8 py-4 rounded-lg font-medium text-lg
                     border-2 border-[#1C1917] shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]
                     hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px]
                     active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-3"
          >
            <Camera size={24} />
            Take a Photo
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm text-[#1C1917]/60 mt-8"
        >
          Share-ready anime posters in seconds.
        </motion.p>
      </div>
    </motion.div>
  );
}
