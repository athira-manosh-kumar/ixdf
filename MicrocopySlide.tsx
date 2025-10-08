import { motion } from 'motion/react';
import { MessageCircle, Smile, ArrowRight } from 'lucide-react';

export function MicrocopySlide() {
  const examples = [
    {
      before: "Error: Invalid input",
      after: "Oops! Let's try that again 😊",
      type: "Error Message"
    },
    {
      before: "Loading...",
      after: "Cooking up something delicious for you! 🍳",
      type: "Loading State"
    },
    {
      before: "No results found",
      after: "We couldn't find that dish, but here are some tasty alternatives! 🤔",
      type: "Empty State"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-8"
        >
          <span className="text-orange-600">Microcopy</span> & Tone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-center text-gray-600 mb-16"
        >
          Friendly microcopy turns <span className="text-red-500">frustration</span> into <span className="text-green-500">delight</span>
        </motion.p>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-gray-700">{example.type}</span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Before */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h4 className="text-red-700 font-medium mb-2">Before 😕</h4>
                  <p className="text-red-600 font-mono text-sm">{example.before}</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-orange-500" />
                  </motion.div>
                </div>

                {/* After */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.3 }}
                  className="bg-green-50 rounded-2xl p-6 border border-green-200"
                >
                  <h4 className="text-green-700 font-medium mb-2">After 😊</h4>
                  <p className="text-green-600">{example.after}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center mt-12 bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-center gap-2">
            <Smile className="w-6 h-6 text-yellow-500" />
            <p className="text-lg text-gray-700">
              <span className="text-orange-600 font-medium">Human language</span> creates emotional connection
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}