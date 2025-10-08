import { motion } from 'motion/react';
import { Smile, Frown, Meh } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyEmpathySlide() {
  const emojis = [
    { icon: Smile, delay: 0.3, color: 'text-green-500' },
    { icon: Frown, delay: 0.6, color: 'text-red-500' },
    { icon: Meh, delay: 0.9, color: 'text-yellow-500' }
  ];

  const bulletPoints = [
    "Users don't just use products — they experience them",
    "Every interaction evokes emotion",
    "Empathy helps us see through users' eyes"
  ];

  return (
    <div className="h-full bg-cream-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-80 h-80 mx-auto relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1539755743684-a6b3b2f88d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHNtYXJ0cGhvbmUlMjBlbW90aW9uYWx8ZW58MXx8fHwxNzU5ODQ5NDQzfDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Person using smartphone with emotional expression"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Emojis */}
            {emojis.map(({ icon: Icon, delay, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 0.3, 
                  delay,
                  y: { 
                    duration: 2, 
                    repeat: Infinity,
                    delay: delay + 1
                  }
                }}
                className={`absolute ${
                  index === 0 ? 'top-4 right-4' : 
                  index === 1 ? 'bottom-8 left-8' : 
                  'top-1/2 -right-4'
                } w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl text-gray-800 mb-8"
          >
            Why Are We Talking About <span className="text-coral-500">Empathy</span> in Design?
          </motion.h2>

          <div className="space-y-6">
            {bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {point.split(' ').map((word, wordIndex) => {
                    const isHighlight = ['experience', 'emotion', 'empathy'].some(keyword => 
                      word.toLowerCase().includes(keyword.toLowerCase())
                    );
                    return isHighlight ? (
                      <span key={wordIndex} className="text-coral-500 font-medium">{word} </span>
                    ) : (
                      <span key={wordIndex}>{word} </span>
                    );
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}