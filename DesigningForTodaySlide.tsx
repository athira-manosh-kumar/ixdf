import { motion } from 'motion/react';
import { Calendar, Smartphone, Zap } from 'lucide-react';

export function DesigningForTodaySlide() {
  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-blue-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-gray-800 leading-relaxed mb-16 max-w-4xl mx-auto"
        >
          <span className="text-coral-500 text-6xl">"</span>
          Today we design for <span className="text-gray-400">yesterday's problems</span>... 
          <br />
          When will we design for <span className="text-coral-500 font-medium">today's</span> and 
          <span className="text-blue-500 font-medium"> tomorrow's challenges?</span>
          <span className="text-coral-500 text-6xl">"</span>
        </motion.blockquote>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-coral-400 to-blue-400 transform -translate-y-1/2 origin-left"
          />

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {/* Past */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">Past</h3>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full h-16 bg-gray-200 rounded mb-2 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-400 rounded-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">Outdated UI patterns</p>
              </div>
            </motion.div>

            {/* Present */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                <Smartphone className="w-10 h-10 text-white" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-coral-400 rounded-full opacity-30"
                />
              </div>
              <h3 className="text-xl font-medium text-coral-600 mb-2">Present</h3>
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-coral-200">
                <div className="w-full h-16 bg-coral-100 rounded mb-2 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-coral-600" />
                </div>
                <p className="text-sm text-coral-600 font-medium">Current devices & patterns</p>
              </div>
            </motion.div>

            {/* Future */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-medium text-blue-600 mb-2">Future</h3>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded mb-2 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-4 h-4 bg-blue-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  />
                </div>
                <p className="text-sm text-blue-500">AI-powered interfaces</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}