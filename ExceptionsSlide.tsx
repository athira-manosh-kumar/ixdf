import { motion } from 'motion/react';
import { CheckSquare, X, Smile } from 'lucide-react';

export function ExceptionsSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          Designing for <span className="text-green-500">Exceptions</span> & Empathy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Before - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl text-red-600 mb-2">Before</h3>
              <p className="text-gray-600">Repetitive Selection Process</p>
            </div>

            {/* Flow showing repetitive process */}
            <div className="space-y-4">
              {[1, 2, 3].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200"
                >
                  <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-sm font-medium text-red-700">
                    {step}
                  </div>
                  <span className="text-red-600">
                    {step === 1 ? "Select items one by one" : 
                     step === 2 ? "Lose selection on page change" : 
                     "Start over again"}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Frustrated emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2, type: "spring" }}
              className="text-center mt-6"
            >
              <div className="text-4xl">😫</div>
            </motion.div>
          </motion.div>

          {/* After - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl text-green-600 mb-2">After</h3>
              <p className="text-gray-600">Smart Selection System</p>
            </div>

            {/* Improved features */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <h4 className="font-medium text-green-700 mb-1">Persistent Selection Panel</h4>
                <p className="text-sm text-green-600">Selections maintained across pages</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <h4 className="font-medium text-green-700 mb-1">Partial Selection</h4>
                <p className="text-sm text-green-600">Select some now, continue later</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <h4 className="font-medium text-green-700 mb-1">Quick Deselect</h4>
                <p className="text-sm text-green-600">Easy removal without starting over</p>
              </motion.div>
            </div>

            {/* Happy emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.5, type: "spring" }}
              className="text-center mt-6"
            >
              <div className="text-4xl">😄</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Emoji transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-4 text-4xl">
            <span>😫</span>
            <motion.span
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl text-gray-400"
            >
              →
            </motion.span>
            <span>😄</span>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            <span className="text-green-600 font-medium">Empathetic design</span> turns frustration into delight
          </p>
        </motion.div>
      </div>
    </div>
  );
}