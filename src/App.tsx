import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import UploadComplete from './components/UploadComplete';
import StyleSelector from './components/StyleSelector';
import LoadingSequence from './components/LoadingSequence';
import PosterReveal from './components/PosterReveal';
import VariantGrid from './components/VariantGrid';
import TrailerSection from './components/TrailerSection';
import DownloadPanel from './components/DownloadPanel';
import PetalCanvas from './components/PetalCanvas';

type Step = 'home' | 'upload-complete' | 'style' | 'loading' | 'poster' | 'variants' | 'trailer' | 'download';

function App() {
  const [step, setStep] = useState<Step>('home');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');

  const handleImageUpload = (image: string) => {
    setUploadedImage(image);
    setStep('upload-complete');
  };

  const handleStyleComplete = (genre: string, style: string) => {
    setSelectedGenre(genre);
    setSelectedStyle(style);
    setStep('loading');
  };

  const handleLoadingComplete = () => {
    setStep('poster');
  };

  const handlePosterContinue = () => {
    setStep('variants');
  };

  const handleVariantsContinue = () => {
    setStep('trailer');
  };

  const handleTrailerContinue = () => {
    setStep('download');
  };

  const handleStartAnother = () => {
    setStep('home');
    setUploadedImage(null);
    setSelectedGenre('');
    setSelectedStyle('');
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] overflow-hidden">
      <PetalCanvas />

      <AnimatePresence mode="wait">
        {step === 'home' && (
          <Home key="home" onImageUpload={handleImageUpload} />
        )}
        {step === 'upload-complete' && (
          <UploadComplete
            key="upload-complete"
            image={uploadedImage!}
            onComplete={() => setStep('style')}
          />
        )}
        {step === 'style' && (
          <StyleSelector
            key="style"
            onComplete={handleStyleComplete}
          />
        )}
        {step === 'loading' && (
          <LoadingSequence
            key="loading"
            onComplete={handleLoadingComplete}
          />
        )}
        {step === 'poster' && (
          <PosterReveal
            key="poster"
            onContinue={handlePosterContinue}
          />
        )}
        {step === 'variants' && (
          <VariantGrid
            key="variants"
            onContinue={handleVariantsContinue}
          />
        )}
        {step === 'trailer' && (
          <TrailerSection
            key="trailer"
            onContinue={handleTrailerContinue}
          />
        )}
        {step === 'download' && (
          <DownloadPanel
            key="download"
            onStartAnother={handleStartAnother}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
