import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DivisionVideoProps {
  videoName: string;
}

export function DivisionVideo({ videoName }: DivisionVideoProps) {
  const videoPath = `/videos-subsecciones/${videoName}.mp4`;
  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            {/* video ref + unmute flow */}
            <VideoPlayer videoPath={videoPath} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoPlayer({ videoPath }: { videoPath: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showUnmute, setShowUnmute] = useState(false);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let visibilityTimeout: number | undefined;

    // Ensure video is muted by default
    v.muted = true;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Try to play when visible
          const playPromise = v.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // show unmute control after a short delay so user can enable sound
                visibilityTimeout = window.setTimeout(() => setShowUnmute(true), 600);
              })
              .catch(() => {
                // autoplay blocked — show unmute so user can start playback with sound
                setShowUnmute(true);
              });
          } else {
            setShowUnmute(true);
          }
        } else {
          // pause when not visible and hide unmute control
          try {
            v.pause();
          } catch (e) {}
          setShowUnmute(false);
          if (visibilityTimeout) {
            clearTimeout(visibilityTimeout);
            visibilityTimeout = undefined;
          }
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    observer.observe(v);

    return () => {
      observer.disconnect();
      if (visibilityTimeout) clearTimeout(visibilityTimeout);
    };
  }, [videoPath]);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = false;
      v.volume = 1;
      v.play().catch(() => {});
    } finally {
      setShowUnmute(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={videoPath}
        controls
        playsInline
        className="w-full h-full object-cover"
      />

      {showUnmute && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button onClick={handleUnmute} className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg">
            Activar sonido
          </button>
        </div>
      )}
    </>
  );
}
