import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, FastForward, Rewind, Volume2 } from 'lucide-react';
import { Track } from '../data';

interface PlayerState {
  isPlaying: boolean;
  currentTrack: Track | null;
  progress: number;
}

export function useAudioPlayer() {
  const [state, setState] = useState<PlayerState>({
    isPlaying: false,
    currentTrack: null,
    progress: 0,
  });

  const playUpdate = (track: Track) => {
    if (state.currentTrack?.id === track.id) {
      setState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    } else {
      setState({ isPlaying: true, currentTrack: track, progress: 0 });
    }
  };

  const closePlayer = () => {
    setState({ isPlaying: false, currentTrack: null, progress: 0 });
  };

  return { state, playUpdate, closePlayer };
}
