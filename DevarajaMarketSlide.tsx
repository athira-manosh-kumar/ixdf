import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import marketPrototypeImage from 'figma:asset/957f3479c8193c6c1ec45148ba52cea839834fe2.png';

export function DevarajaMarketSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-orange-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12"
        >
          Real-Life Empathy Case Study: <span className="text-orange-600">Devaraja Market</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center flex-1 min-h-0">
          {/* Left Side - Single Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={marketPrototypeImage}
                alt="Devaraja Market prototype testing in action"
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover"
              />
              
              {/* Image overlay with context */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
              >
                <span className="text-white font-medium">PROTOTYPE IN ACTION</span>
              </motion.div>

              {/* Key features annotations */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Real-world testing</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">User feedback</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400"
            >
              <h3 className="text-lg font-medium text-red-700 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Problem
              </h3>
              <p className="text-red-600">
                Vendors struggled with <span className="font-medium">bumpy terrain & steps</span> while 
                carrying heavy loads through the market
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex justify-center"
            >
              <ArrowRight className="w-8 h-8 text-orange-500" />
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400"
            >
              <h3 className="text-lg font-medium text-orange-700 mb-2 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Solution
              </h3>
              <p className="text-orange-600">
                Prototype carrier with <span className="font-medium">specialized wheels for small crevices</span> + 
                <span className="font-medium"> ergonomic shoulder cushion</span>
              </p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400"
            >
              <h3 className="text-lg font-medium text-green-700 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Outcome
              </h3>
              <p className="text-green-600">
                <span className="font-medium">Improved mobility</span> and 
                <span className="font-medium"> reduced physical strain</span> for vendors
              </p>
            </motion.div>

            {/* Testing highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400"
            >
              <h3 className="text-lg font-medium text-blue-700 mb-2 flex items-center gap-2">
                <span className="text-xl">🧪</span>
                Real-world Testing
              </h3>
              <p className="text-blue-600">
                <span className="font-medium">Collaborative testing</span> with actual vendors to validate 
                design assumptions and gather feedback
              </p>
            </motion.div>

            {/* Happy emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8, type: "spring", bounce: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl">😊</div>
              <p className="text-sm text-gray-600 mt-2">Happy, empowered vendor</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}