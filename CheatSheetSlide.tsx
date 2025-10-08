import { motion } from 'motion/react';
import { Eye, Map, Settings, Heart, Users, CheckCircle } from 'lucide-react';

export function CheatSheetSlide() {
  const steps = [
    {
      icon: Eye,
      title: "Observe Users",
      description: "Watch real users interact with your product",
      color: "blue"
    },
    {
      icon: Map,
      title: "Map Emotions",
      description: "Identify emotional highs and lows in user journeys",
      color: "purple"
    },
    {
      icon: Settings,
      title: "Design for Edge Cases",
      description: "Consider what happens when things go wrong",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Personalize",
      description: "Show users they are seen and valued",
      color: "red"
    },
    {
      icon: Users,
      title: "Test with Diverse Users",
      description: "Include different backgrounds and abilities",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12"
        >
          Empathy Design <span className="text-blue-600">Cheat Sheet</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 flex-1 min-h-0 overflow-y-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-${step.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    className="mt-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-12 bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-xl text-gray-700">
              <span className="text-blue-600 font-medium">Remember:</span> Every design decision 
              should serve <span className="text-red-500 font-medium">human needs</span> first
            </span>
          </div>
          
          <div className="flex justify-center gap-6 mt-6">
            {['🎯', '❤️', '🚀'].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.3 
                }}
                className="text-3xl"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}