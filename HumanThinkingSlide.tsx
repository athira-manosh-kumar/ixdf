import { motion } from 'motion/react';
import { User, Smartphone, Heart, Brain, Sparkles } from 'lucide-react';

export function HumanThinkingSlide() {
  const features = [
    { icon: Smartphone, label: "Features" },
    { icon: Brain, label: "Logic" },
    { icon: Sparkles, label: "Performance" }
  ];

  const emotions = [
    { icon: Heart, label: "Feelings" },
    { icon: User, label: "Needs" },
    { icon: Sparkles, label: "Delight" }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          From <span className="text-gray-500">Product Thinking</span> to <span className="text-purple-600">Human Thinking</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Product First */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl text-gray-600 mb-8">Product-First Thinking</h3>
            
            <div className="relative">
              <div className="w-32 h-32 bg-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Smartphone className="w-16 h-16 text-gray-500" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    className="bg-white rounded-xl p-4 shadow-md"
                  >
                    <feature.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">{feature.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Human First */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl text-purple-600 mb-8">Human-First Thinking</h3>
            
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
              >
                <User className="w-16 h-16 text-white" />
              </motion.div>

              <div className="grid grid-cols-3 gap-4">
                {emotions.map((emotion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                    className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-200"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <emotion.icon className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    </motion.div>
                    <p className="text-xs text-purple-600 font-medium">{emotion.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-purple-200 rounded-3xl blur-xl -z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Transformation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-4 text-4xl mb-4">
              <span className="text-gray-400">📱</span>
              <motion.span
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-500"
              >
                →
              </motion.span>
              <span className="text-purple-500">❤️</span>
            </div>
            <p className="text-xl text-gray-700">
              <span className="text-purple-600 font-medium">Human-first design</span> creates products that 
              people love, not just use
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}