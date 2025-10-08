import { motion } from 'motion/react';
import { RefreshCw, Heart, MessageSquare, ArrowRight } from 'lucide-react';

export function RetentionSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12"
        >
          Empathy = <span className="text-purple-600">Retention</span>, <span className="text-pink-600">Loyalty</span>, <span className="text-blue-600">Advocacy</span>
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* Retention */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center relative"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <RefreshCw className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-medium text-purple-600 mb-3">Retention</h3>
            <p className="text-gray-600 mb-4">Users keep coming back</p>
            
            {/* Arrow to center */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2"
            >
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Central Empathy Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-32 h-32 flex items-center justify-center shadow-xl mx-auto relative"
          >
            <Heart className="w-12 h-12 text-white" />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="absolute -top-2 -right-2 text-2xl"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Loyalty */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center relative"
          >
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-medium text-pink-600 mb-3">Loyalty</h3>
            <p className="text-gray-600 mb-4">Emotional attachment forms</p>
            
            {/* Arrow to center */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 rotate-180"
            >
              <ArrowRight className="w-6 h-6 text-pink-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Advocacy - Below the main grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm mx-auto mt-8 relative"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-medium text-blue-600 mb-3">Advocacy</h3>
          <p className="text-gray-600">Users recommend to others</p>
          
          {/* Arrow pointing up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 -rotate-90"
          >
            <ArrowRight className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Floating user icons */}
        {[0, 1, 2, 3, 4].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 2.4 + index * 0.1 }}
            className="absolute w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-lg"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              zIndex: -1
            }}
          >
            👤
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="text-center mt-12 bg-white rounded-2xl p-6 shadow-lg"
        >
          <p className="text-xl text-gray-700">
            <span className="text-purple-600 font-medium">Emotional connection</span> drives 
            repeat usage and <span className="text-pink-600 font-medium">word-of-mouth growth</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}