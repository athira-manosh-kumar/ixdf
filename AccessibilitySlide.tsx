import { motion } from 'motion/react';
import { Eye, Volume2, Type, Palette, CheckCircle } from 'lucide-react';

export function AccessibilitySlide() {
  const checklistItems = [
    { 
      icon: Palette, 
      title: "Color-blindness", 
      description: "Don't rely on color alone",
      color: "red"
    },
    { 
      icon: Volume2, 
      title: "Screen readers", 
      description: "Proper semantic markup",
      color: "blue"
    },
    { 
      icon: Type, 
      title: "Font sizes", 
      description: "Readable at all zoom levels",
      color: "green"
    },
    { 
      icon: Eye, 
      title: "Contrast", 
      description: "WCAG 2.1 AA compliance",
      color: "purple"
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          <span className="text-green-600">Accessibility</span> & Inclusive Design
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.2 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <p className="text-xl text-gray-700">
            <span className="text-green-600 font-medium">Inclusive design</span> ensures your product 
            works for <span className="text-blue-600 font-medium">everyone</span>, not just some
          </p>
        </motion.div>
      </div>
    </div>
  );
}