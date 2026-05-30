import { motion, AnimatePresence } from 'motion/react';
import { Track } from '../data';
import { Play, Pause, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface GlobalAudioPlayerProps {
  track: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onClose: () => void;
}

export function GlobalAudioPlayer({ track, isPlaying, onPlayPause, onClose }: GlobalAudioPlayerProps) {
  const { t } = useLanguage();
  
  return (
    <AnimatePresence>
      {track && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 p-4 shadow-2xl flex items-center gap-4 pointer-events-auto rounded-none">
              
              {/* Play/Pause control */}
              <button 
                onClick={onPlayPause}
                className="w-12 h-12 bg-white text-neutral-950 flex flex-shrink-0 items-center justify-center hover:bg-amber-500 transition-colors"
              >
                {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
              </button>

              {/* Cover Art Thumbnail (hidden mobile) */}
              <div className="w-12 h-12 flex-shrink-0 hidden sm:block bg-neutral-800">
                <img src={track.coverImage} alt="Cover" className="w-full h-full object-cover" />
              </div>

              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium truncate">{track.title}</h4>
                <p className="text-xs text-neutral-400 truncate tracking-wide hidden sm:block">{track.description}</p>
                <div className="flex sm:hidden items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-xs text-amber-500 tracking-widest uppercase">{isPlaying ? t('playerPlaying') : t('playerPaused')}</span>
                </div>
              </div>

              {/* Fake Progress */}
              <div className="hidden md:flex flex-1 items-center gap-3 px-4">
                <span className="text-xs text-neutral-500">0:43</span>
                <div className="h-1 flex-1 bg-neutral-800 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-amber-500" />
                </div>
                <span className="text-xs text-neutral-500">{track.duration}</span>
              </div>

              {/* Close */}
              <button onClick={onClose} className="p-2 text-neutral-500 hover:text-white transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
