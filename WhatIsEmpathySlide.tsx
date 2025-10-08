import { motion } from 'motion/react';
import { Users, Eye } from 'lucide-react';

export function WhatIsEmpathySlide() {
  return (
    <div className="h-full bg-gradient-to-br from-cream-50 to-cream-100 p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center space-x-8">
              {/* Designer observing user */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mb-3">
                  <Eye className="w-8 h-8 text-coral-600" />
                </div>
                <p className="text-sm text-gray-600">Designer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex-1 flex justify-center"
              >
                <div className="w-16 h-0.5 bg-coral-300 relative">
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-0 left-0 w-2 h-0.5 bg-coral-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">User</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Quote Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-cream-200 rounded-3xl p-8 shadow-lg"
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl text-gray-800 leading-relaxed"
          >
            <span className="text-coral-500 text-4xl">"</span>
            <span className="font-medium text-coral-600">Empathy</span> is the ability to 
            <span className="text-coral-500 font-medium"> understand and share</span> the feelings of another person.
            <br /><br />
            In UX: <span className="text-coral-500 font-medium">put yourself in the user's shoes.</span>
            <span className="text-coral-500 text-4xl">"</span>
          </motion.blockquote>
        </motion.div>
      </div>

      {/* Key Definition */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-lg text-gray-600">
          Empathy = <span className="text-coral-500 font-medium">Understanding</span> + 
          <span className="text-coral-500 font-medium"> Sharing Feelings</span>
        </p>
      </motion.div>
    </div>
  );
}