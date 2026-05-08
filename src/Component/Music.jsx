import React from 'react'
import { motion } from "motion/react";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MyMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Audio Ref
  const audioRef = useRef(
    new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    )
  );

  // Play / Pause Handler
  const toggleMusic = async () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      await audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Update Progress
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const percentage =
        (audio.currentTime / audio.duration) * 100 || 0;

      setProgress(percentage);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-pink-500 to-rose-600 p-6 shadow-2xl">
      <div className="flex flex-col h-full justify-between relative z-10">
        
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 text-white/80">
            <Music className="w-6 h-6" />
            <span className="text-sm">Now Playing</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMusic}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </motion.button>
        </div>

        {/* Song Details */}
        <div className="mt-10">
          <div className="text-white/80 text-sm mb-1">
            Currently coding to
          </div>

          <div className="text-white font-bold text-2xl">
            Lofi Hip Hop
          </div>

          <div className="text-white/70 text-sm flex items-center gap-2 mt-1">
            <Volume2 className="w-4 h-4" />
            Study Beats
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                className="h-full bg-white rounded-full"
              />
            </div>

            <div className="flex justify-between text-xs text-white/70 mt-2">
              <span>
                {Math.floor(audioRef.current.currentTime / 60)}:
                {String(
                  Math.floor(audioRef.current.currentTime % 60)
                ).padStart(2, "0")}
              </span>

              <span>
                {Math.floor(audioRef.current.duration / 60) || 0}:
                {String(
                  Math.floor(audioRef.current.duration % 60) || 0
                ).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 pb-3 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: isPlaying
                ? [
                    `${Math.random() * 20 + 10}px`,
                    `${Math.random() * 50 + 20}px`,
                    `${Math.random() * 20 + 10}px`,
                  ]
                : "10px",
            }}
            transition={{
              duration: 0.4 + Math.random() * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}
