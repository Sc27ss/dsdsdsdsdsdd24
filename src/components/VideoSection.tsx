import React from 'react';
import { motion } from 'framer-motion';
import generalVideo from '../assets/videos/general-video.mp4';

export const VideoSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={generalVideo}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
