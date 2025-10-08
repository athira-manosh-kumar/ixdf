import { motion } from 'motion/react';
import { Heart, Brain, Users, Lightbulb } from 'lucide-react';

export function TakeawaysSlide() {
  const takeaways = [
    {
      icon: Heart,
      title: "Empathy is the foundation",
      description: "of meaningful user experiences"
    },
    {
      icon: Brain,
      title: "Emotional intelligence",
      description: "drives both usability and delight"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-coral-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          Final <span className="text-coral-600">Takeaways</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Takeaways */}
          <div className="space-y-8">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <takeaway.icon className="w-8 h-8 text-coral-600" />
                  </div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.3 }}
                    >
                      <span className="text-coral-600 font-medium border-b-2 border-coral-300 pb-1">
                        {takeaway.title}
                      </span>
                      <span className="text-gray-700 ml-2">
                        {takeaway.description}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="relative">
              {/* Designer */}
              <div className="w-32 h-32 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Users className="w-16 h-16 text-coral-600" />
              </div>

              {/* User */}
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="w-12 h-12 text-blue-600" />
              </div>

              {/* Connection line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-coral-400 to-blue-400 origin-top"
              />

              {/* Hearts floating */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -30, -60]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 1.5 + index * 0.5
                  }}
                  className="absolute text-2xl"
                  style={{
                    top: '40%',
                    left: `${45 + index * 5}%`
                  }}
                >
                  ❤️
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-gray-600 mt-8"
            >
              Connecting through <span className="text-coral-600 font-medium">understanding</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="text-center mt-16 bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <p className="text-xl text-gray-700">
              Design with <span className="text-coral-600 font-medium">empathy</span> and watch 
              your users become your biggest <span className="text-blue-600 font-medium">advocates</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}