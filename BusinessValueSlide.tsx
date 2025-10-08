import { motion } from 'motion/react';
import { TrendingUp, Users, BarChart3 } from 'lucide-react';

export function BusinessValueSlide() {
  const metrics = [
    { label: "User Adoption", value: 85, color: "blue" },
    { label: "Retention Rate", value: 92, color: "green" },
    { label: "Satisfaction Score", value: 78, color: "purple" },
    { label: "Error Reduction", value: 65, color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12"
        >
          How <span className="text-blue-600">Empathy-Driven Design</span> Brings Value
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left - Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-8 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Impact Metrics
            </h3>
            
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{metric.label}</span>
                    <span className={`text-${metric.color}-600 font-bold`}>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                      className={`bg-${metric.color}-500 h-3 rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Reduces Friction & Errors
              </h3>
              <p className="text-gray-600">Users can complete tasks more efficiently with fewer mistakes</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Increases Adoption
              </h3>
              <p className="text-gray-600">Intuitive, empathetic design encourages user engagement</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Boosts Satisfaction
              </h3>
              <p className="text-gray-600">Users feel understood and valued throughout their journey</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">😊</div>
              <p className="text-gray-600">
                <span className="text-green-600 font-medium">Happy users</span> drive business success
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}