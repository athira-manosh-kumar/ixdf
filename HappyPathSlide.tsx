import { motion } from 'motion/react';
import { ArrowRight, RotateCcw, Frown } from 'lucide-react';

export function HappyPathSlide() {
  const steps = [
    { count: 20, label: "Items selected" },
    { count: 18, label: "Items remaining" },
    { count: 10, label: "Final selection" }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-red-50 to-pink-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-8"
        >
          Designing Only for the <span className="text-red-500">Happy Path</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-center text-gray-600 mb-16"
        >
          Bulk-edit example: <span className="text-red-500 font-medium">repeated selection frustration</span>
        </motion.p>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.3 }}
                className="text-center"
              >
                {/* Step Circle */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg ${
                  index === steps.length - 1 ? 'bg-red-500 text-white' : 'bg-white border-4 border-red-200 text-red-600'
                }`}>
                  <span className="text-2xl font-bold">{step.count}</span>
                </div>
                
                {/* Label */}
                <p className="text-sm text-gray-600 font-medium">{step.label}</p>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.3 }}
                    className="absolute top-8 flex items-center"
                    style={{ left: `${(index + 1) * 33 - 8}%` }}
                  >
                    <ArrowRight className="w-8 h-8 text-red-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Frustration indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex justify-center gap-12 mt-12"
          >
            {/* Repeated process arrows */}
            <div className="flex items-center gap-2">
              <RotateCcw className="w-6 h-6 text-red-500" />
              <span className="text-red-600 font-medium">Repeat selection</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-6 h-6 text-red-500" />
              <span className="text-red-600 font-medium">Repeat again</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-6 h-6 text-red-500" />
              <span className="text-red-600 font-medium">...and again</span>
            </div>
          </motion.div>

          {/* Frustration emoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.1, type: "spring", bounce: 0.6 }}
            className="text-center mt-8"
          >
            <div className="text-6xl mb-4">😫</div>
            <p className="text-red-600 font-medium">User frustration builds with each repetition</p>
          </motion.div>
        </div>

        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="bg-red-100 rounded-2xl p-6 mt-12 border-l-4 border-red-400"
        >
          <div className="flex items-start gap-4">
            <Frown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-red-700 mb-2">The Problem</h3>
              <p className="text-red-600">
                When we only design for the ideal user journey, we ignore the reality that users often need to 
                <span className="font-medium"> change their minds, make mistakes, or work with incomplete information</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}