import { motion } from 'motion/react';
import { User, Heart, Star } from 'lucide-react';

export function PersonalizationSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-orange-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          <span className="text-pink-600">Personalization</span> Through Empathy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mock App Screens */}
          {[
            { 
              greeting: "Good morning, Sarah!", 
              content: "Your weekly fitness summary",
              color: "pink",
              delay: 0.3
            },
            { 
              greeting: "Welcome back, Alex!", 
              content: "3 new messages waiting",
              color: "blue",
              delay: 0.6
            },
            { 
              greeting: "Hey Maria!", 
              content: "Recommended for you",
              color: "purple",
              delay: 0.9
            }
          ].map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: screen.delay }}
              className="bg-white rounded-3xl p-6 shadow-xl"
            >
              <div className="bg-gray-100 rounded-2xl h-80 p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 bg-${screen.color}-100 rounded-full flex items-center justify-center`}>
                    <User className={`w-5 h-5 text-${screen.color}-600`} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: screen.delay + 0.3 }}
                    className={`bg-${screen.color}-100 rounded-lg px-3 py-1`}
                  >
                    <span className={`text-${screen.color}-700 font-medium text-sm`}>
                      {screen.greeting}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: screen.delay + 0.6 }}
                  className="space-y-3"
                >
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-gray-700 text-sm">{screen.content}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-full h-16 bg-white rounded-lg flex items-center justify-center">
                        <Star className={`w-4 h-4 text-${screen.color}-400`} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <p className="text-xl text-gray-700">
              <span className="text-pink-600 font-medium">Tailored experiences</span> show users they are 
              <span className="text-orange-600 font-medium"> seen and valued</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}