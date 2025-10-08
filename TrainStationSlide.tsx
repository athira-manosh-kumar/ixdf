import { motion } from 'motion/react';
import { Users, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrainStationSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-cream-50 to-blue-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-12"
        >
          Real-Life Empathy Case Study: <span className="text-blue-600">Train Station Golf Carts</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740343705360-4e5eec55954b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0cmFpbiUyMHN0YXRpb24lMjBhY2Nlc3NpYmlsaXR5JTIwZ29sZiUyMGNhcnR8ZW58MXx8fHwxNzU5ODQ5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=600"
                alt="Train station accessibility with golf cart"
                className="w-full h-80 object-cover"
              />
              
              {/* Vector icons overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute bottom-4 left-4 flex gap-3"
              >
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
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
                <span className="font-medium">Wheelchair access limited</span>, challenging navigation 
                for travelers with mobility needs
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex justify-center"
            >
              <ArrowRight className="w-8 h-8 text-blue-500" />
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400"
            >
              <h3 className="text-lg font-medium text-blue-700 mb-2 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Solution
              </h3>
              <p className="text-blue-600">
                <span className="font-medium">Golf Cart service</span> redesigned station pathways 
                for <span className="font-medium">smooth navigation</span>
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
                <span className="font-medium">Reduced physical strain</span> and 
                <span className="font-medium"> improved accessibility</span> for all travelers
              </p>
            </motion.div>

            {/* Animated icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex justify-center gap-6"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <Users className="w-8 h-8 text-blue-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <ShoppingCart className="w-8 h-8 text-green-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="text-3xl"
              >
                😊
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}