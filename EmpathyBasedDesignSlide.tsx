import { motion } from 'motion/react';
import { User, Brain, Heart, Users } from 'lucide-react';

export function EmpathyBasedDesignSlide() {
  const principles = [
    {
      icon: Brain,
      title: "Curiosity",
      description: "Always asking 'Why?' and 'How does this feel?'"
    },
    {
      icon: Heart,
      title: "Humility",
      description: "Acknowledging we don't know everything"
    },
    {
      icon: Users,
      title: "Compassion",
      description: "Genuinely caring about user experience"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-cream-50 to-coral-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-8"
        >
          What Is <span className="text-coral-500">Empathy-Based Design?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Designer observing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl relative">
              {/* Designer silhouette */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Thought bubbles with emotions */}
              <div className="flex justify-around">
                {['😄', '😰', '🤔'].map((emoji, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.3,
                      type: "spring",
                      bounce: 0.5
                    }}
                    className="relative"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {emoji}
                    </div>
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-blue-200"></div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-center text-gray-600 mt-6">Designer observing user emotions</p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-coral-50 rounded-2xl p-6 border-l-4 border-coral-400"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Puts <span className="text-coral-500 font-medium">human needs and emotions</span> before 
                pure usability metrics. It encourages:
              </p>
            </motion.div>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}