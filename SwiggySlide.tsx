import { motion } from 'motion/react';
import { Star, ArrowUp, Heart } from 'lucide-react';

export function SwiggySlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12"
        >
          Case Study: <span className="text-orange-600">Swiggy</span> Microcopy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left - Mock Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="bg-orange-500 rounded-t-2xl p-4 -m-8 mb-6">
              <h3 className="text-white font-medium">Swiggy</h3>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200 relative"
              >
                <p className="text-orange-700">"Your food is being prepared with extra love! ❤️"</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="absolute -top-2 -right-2 bg-coral-500 rounded-full p-1"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="bg-green-50 rounded-lg p-4 border border-green-200 relative"
              >
                <p className="text-green-700">"Almost there! Your delicious meal is on its way! 🏃‍♂️"</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                  className="absolute -top-2 -right-2 bg-coral-500 rounded-full p-1"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="bg-blue-50 rounded-lg p-4 border border-blue-200 relative"
              >
                <p className="text-blue-700">"Oops! Something went wrong, but don't worry - we're fixing it! 🛠️"</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.7 }}
                  className="absolute -top-2 -right-2 bg-coral-500 rounded-full p-1"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Impact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Positive Impact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Reduced customer anxiety during wait times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Increased user engagement and retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">Improved brand perception and loyalty</span>
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8, type: "spring" }}
              className="text-center"
            >
              <div className="flex justify-center gap-4 text-4xl mb-4">
                <span>😰</span>
                <span>→</span>
                <span>😊</span>
              </div>
              <p className="text-gray-600">
                <span className="text-orange-600 font-medium">Friendly microcopy</span> transforms user experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}