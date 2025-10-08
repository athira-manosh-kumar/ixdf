import { motion } from 'motion/react';
import { Smartphone, Package, Heart, Smile, Frown } from 'lucide-react';

export function PhysicalVsDigitalSlide() {
  const emotions = [
    { icon: Heart, color: 'text-red-500', delay: 0.5 },
    { icon: Smile, color: 'text-green-500', delay: 0.8 },
    { icon: Frown, color: 'text-yellow-500', delay: 1.1 }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-purple-50 p-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-gray-800 mb-16"
        >
          Empathy in <span className="text-orange-500">Physical</span> vs <span className="text-purple-500">Digital</span> Experiences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Physical Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-orange-400"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl text-orange-600 mb-4">Physical</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-700 mb-2">Tactile</h4>
                <p className="text-orange-600 text-sm">Touch, texture, weight, temperature</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-700 mb-2">Spatial</h4>
                <p className="text-orange-600 text-sm">Physical space, ergonomics, accessibility</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-700 mb-2">Environmental</h4>
                <p className="text-orange-600 text-sm">Context, surroundings, atmosphere</p>
              </div>
            </div>
          </motion.div>

          {/* Digital Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-purple-400"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl text-purple-600 mb-4">Digital</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 mb-2">UI Design</h4>
                <p className="text-purple-600 text-sm">Visual hierarchy, navigation, interactions</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 mb-2">Microcopy</h4>
                <p className="text-purple-600 text-sm">Tone, language, error messages</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 mb-2">Personalization</h4>
                <p className="text-purple-600 text-sm">User preferences, adaptive content</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating emotion bubbles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {emotions.map(({ icon: Icon, color, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -20, 0],
                x: [0, Math.sin(index * 2) * 20, 0]
              }}
              transition={{ 
                duration: 0.5, 
                delay,
                y: { duration: 3, repeat: Infinity, delay: delay + 1 },
                x: { duration: 4, repeat: Infinity, delay: delay + 1.5 }
              }}
              className={`absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center ${
                index === 0 ? '-top-8 -left-8' : 
                index === 1 ? 'top-4 right-4' : 
                '-bottom-4 left-4'
              }`}
            >
              <Icon className={`w-6 h-6 ${color}`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Both require understanding <span className="text-coral-500 font-medium">human emotions and behaviors</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}