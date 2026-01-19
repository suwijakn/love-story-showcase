import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("Tap for Music 🎵");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial 5-second timer to hide if user ignores
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleTap = () => {
    if (isPlaying) return;

    // Clear the initial timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Update state
    setIsPlaying(true);
    setText("Playing...");
    
    // Play music
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }

    // Start new timer to hide bubble after 3 seconds
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/better-together.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-3 right-3 z-50 cursor-pointer"
            onClick={handleTap}
          >
            <div className={`bg-white/60 backdrop-blur-sm border border-gold/30 shadow-sm rounded-full px-2.5 py-1 flex items-center text-[10px] font-medium text-foreground ${!isPlaying ? 'animate-gentle-bounce' : ''}`}>
              <span>{text}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
