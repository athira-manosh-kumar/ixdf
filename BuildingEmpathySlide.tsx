import { motion } from 'motion/react';
import { Search, Map, Heart, TestTube, ArrowRight } from 'lucide-react';

export function BuildingEmpathySlide() {
  const steps = [
    { 
      icon: Search, 
      title: "Research", 
      description: "User interviews & observations",
      color: "blue"
    },
    { 
      icon: Map, 
      title: "Journey Mapping", 
      description: "Map user touchpoints & pain points",
      color: "purple"
    },
    { 
      icon: Heart, 
      title: "Emotional Touchpoints", 
      description: "Identify emotional highs & lows",
      color: "red"
    },
    { 
      icon: TestTube, 
      title: "Testing", 
      description: "Validate with real users",
      color: "green"
    }
  ];

  const emotions = ['😊', '😢', '😍', '😤', '🤔'];

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          Building <span className="text-purple-600">Empathy</span> in Your Design Process
        </motion.h2>

        {/* Designer with sticky notes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="relative bg-white rounded-3xl p-8 shadow-xl">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-center">UX Designer</p>
            
            {/* Sticky notes around designer */}
            {emotions.map((emoji, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className={`absolute w-12 h-12 bg-yellow-200 rounded-lg flex items-center justify-center text-lg shadow-md ${
                  index === 0 ? '-top-2 -left-2' :
                  index === 1 ? '-top-2 -right-2' :
                  index === 2 ? 'top-1/2 -left-6' :
                  index === 3 ? 'top-1/2 -right-6' :
                  '-bottom-2 left-1/2 transform -translate-x-1/2'
                }`}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Journey map background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-red-100 rounded-3xl opacity-30"
          />
          
          <div className="relative z-10 grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                    className="hidden md:block absolute top-6 left-full transform -translate-y-1/2 ml-2"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-center mt-12 bg-white rounded-2xl p-6 shadow-lg"
        >
          <p className="text-lg text-gray-700">
            <span className="text-purple-600 font-medium">Systematic empathy building</span> leads to 
            more human-centered design decisions
          </p>
        </motion.div>
      </div>
    </div>
  );
}