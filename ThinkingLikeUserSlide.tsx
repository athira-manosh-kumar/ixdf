import { motion } from 'motion/react';
import { User, Brain, Wifi, Coffee, Clock } from 'lucide-react';

export function ThinkingLikeUserSlide() {
  const contextFactors = [
    { icon: Wifi, label: "Poor connectivity" },
    { icon: Coffee, label: "Multitasking" },
    { icon: Clock, label: "Time pressure" }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Persona Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-800">Sarah, 28</h3>
            <p className="text-gray-600">Working Mom</p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-indigo-50 rounded-lg p-3">
              <span className="text-sm text-indigo-700">📱 Uses mobile during commute</span>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <span className="text-sm text-indigo-700">⏰ Limited time between tasks</span>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3">
              <span className="text-sm text-indigo-700">🤹 Often interrupted</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Thought Bubble */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-8">
            Thinking Like a <span className="text-indigo-600">User</span>
          </h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl relative">
            <h3 className="font-medium text-gray-800 mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              Consider User Context
            </h3>
            
            <div className="space-y-4">
              {contextFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <factor.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{factor.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6 text-gray-600 italic"
            >
              "I need this to work quickly and simply, even when I'm distracted."
            </motion.p>

            {/* Speech bubble tail */}
            <div className="absolute -left-4 top-8 w-0 h-0 border-t-8 border-b-8 border-r-16 border-transparent border-r-white"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}