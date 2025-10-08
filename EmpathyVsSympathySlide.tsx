import { motion } from 'motion/react';
import { Heart, HandHeart } from 'lucide-react';

export function EmpathyVsSympathySlide() {
  const tableData = [
    {
      aspect: "Feeling",
      empathy: "Feeling WITH someone",
      sympathy: "Feeling FOR someone"
    },
    {
      aspect: "Perspective",
      empathy: "I understand your pain",
      sympathy: "I feel sorry for your pain"
    },
    {
      aspect: "Position",
      empathy: "Standing in their shoes",
      sympathy: "Standing beside them"
    },
    {
      aspect: "Response",
      empathy: "How can I help you solve this?",
      sympathy: "I'm sorry this happened to you"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-cream-50 to-cream-100 p-8 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-12"
        >
          Empathy vs. Sympathy
        </motion.h2>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-16 mb-12"
        >
          {/* Empathy - Sitting together */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mr-2">
                <div className="w-6 h-6 bg-coral-500 rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-coral-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-coral-600 font-medium">Sitting together</p>
          </div>

          <div className="text-4xl text-gray-300">vs</div>

          {/* Sympathy - Patting from distance */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-blue-500"
              >
                <HandHeart className="w-8 h-8" />
              </motion.div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-blue-600 font-medium">Patting from distance</p>
          </div>
        </motion.div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-50 border-b">
            <div className="p-4 font-medium text-gray-700"></div>
            <div className="p-4 font-medium text-coral-600 flex items-center gap-2 bg-coral-50">
              <Heart className="w-5 h-5" />
              Empathy
            </div>
            <div className="p-4 font-medium text-blue-600 flex items-center gap-2 bg-blue-50">
              <HandHeart className="w-5 h-5" />
              Sympathy
            </div>
          </div>
          
          {tableData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="p-4 font-medium text-gray-700">{row.aspect}</div>
              <div className="p-4 text-coral-700 bg-coral-25">{row.empathy}</div>
              <div className="p-4 text-blue-700 bg-blue-25">{row.sympathy}</div>
            </motion.div>
          ))}
        </div>

        {/* Takeaway */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-gray-700">
            <span className="border-b-2 border-coral-300 pb-1">Key Takeaway:</span> 
            <span className="text-coral-600 font-medium ml-2">
              Empathy drives better solutions by truly understanding user needs
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}