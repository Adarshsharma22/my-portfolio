import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music, Pause, Play, Volume2, SkipBack, SkipForward } from "lucide-react";

const playlist = [
  {
    id: 1,
    title: "Lofi Hip Hop",
    artist: "Study Beats",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Chill Vibes",
    artist: "Relaxing Music",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Midnight Drive",
    artist: "Synthwave",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Summer Rain",
    artist: "Lofi Beats",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

export function MyMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(new Audio());

  const currentSong = playlist[currentSongIndex];

  // Load new song when index changes
  useEffect(() => {
    const audio = audioRef.current;
    audio.src = currentSong.url;
    audio.load();

    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex]);

  // Play / Pause
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      await audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Next Song
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  // Previous Song
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  // Progress Update
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      nextSong();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Seek functionality
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  // Format time (mm:ss)
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
  <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-b from-pink-600  to-black/20 p-3  border border-white/20 ">
    
    {/* Animated Background Mesh
     <div className="absolute inset-0 z-0">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full"
      />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]" />
    </div> */}

    <div className="flex flex-col h-full justify-between relative z-10">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
          <Music className={`w-4 h-4 text-white ${isPlaying ? 'animate-pulse' : ''}`} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Now Playing</span>
        </div>
        <motion.div whileHover={{ rotate: 15 }} className="cursor-pointer">
          <Volume2 className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
        </motion.div>
      </div>

      {/* Main Info Section */}
      <div className="flex items-end justify-between gap-4 mb-2">
        <div className="flex-1 min-w-0">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-black text-3xl tracking-tight leading-none truncate"
          >
            {currentSong.title}
          </motion.h2>
          <p className="text-white/60 text-sm font-medium mt-1 truncate">
            {currentSong.artist}
          </p>
        </div>

        {/* Floating Control Pill */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-xl">
          <motion.button
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSong}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <SkipBack className="w-4 h-4 fill-current" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white text-rose-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSong}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <SkipForward className="w-4 h-4 fill-current" />
          </motion.button>
        </div>
      </div>

      {/* Interactive Progress Section */}
      <div className="space-y-2">
        <div 
          className="group/progress relative h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden transition-all hover:h-3"
          onClick={handleSeek}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="relative h-full bg-white rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
          {/* Subtle hover indicator */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/progress:opacity-100 transition-opacity" />
        </div>

        <div className="flex justify-between text-[10px] font-bold text-white/50 tracking-tighter">
          <span className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>

    {/* Enhanced Audio Visualizer */}
    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1.5 pb-2 opacity-30 h-16 pointer-events-none">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            height: isPlaying ? [`${20 + Math.random() * 40}%`, `${60 + Math.random() * 40}%`, `${20 + Math.random() * 40}%`] : "4px",
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1.5 bg-linear-to-t from-white to-white/0 rounded-t-full"
        />
      ))}
    </div>
  </div>
);
}