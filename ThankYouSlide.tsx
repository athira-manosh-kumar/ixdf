import { motion } from 'motion/react';
import { Heart, Quote } from 'lucide-react';

export function ThankYouSlide() {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-coral-400 via-coral-500 to-coral-600">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [heart.y + '%', (heart.y - 20) + '%'],
            x: [heart.x + '%', (heart.x + 10) + '%']
          }}
          transition={{ 
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay
          }}
          className="absolute pointer-events-none"
          style={{ fontSize: `${heart.size}px` }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="h-full flex flex-col items-center justify-center text-center text-white px-8 relative z-10">
        {/* Abstract human outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl mb-8"
        >
          Thank You
        </motion.h1>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl"
        >
          <div className="relative">
            <Quote className="w-12 h-12 text-white/60 absolute -top-6 -left-6" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed italic">
              People will forget what you said,
              <br />
              but they will never forget 
              <br />
              <span className="text-coral-100">how you made them feel.</span>
            </blockquote>
            <Quote className="w-12 h-12 text-white/60 absolute -bottom-6 -right-6 rotate-180" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl text-coral-100 mt-8"
          >
            — Maya Angelou
          </motion.p>
        </motion.div>

        {/* Reflection prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mt-16 text-lg text-coral-100"
        >
          <p>How will you design with empathy today?</p>
        </motion.div>

        {/* Session info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="absolute bottom-8 left-8 text-coral-100"
        >
          <p className="text-sm">
            An IXDF Session by <span className="font-medium">Athira Manosh Kumar</span>
            <br />
            Senior UX Designer
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-20 w-12 h-12 border border-white/20 rounded-full"
        />
      </div>
    </div>
  );
}