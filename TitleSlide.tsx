import { motion } from "motion/react";
import { MessageCircle, Heart, Palette } from "lucide-react";

export function TitleSlide() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1728218948405-d749e7d1851e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGh1bWFuJTIwZmFjZSUyMHNpbGhvdWV0dGUlMjBkaWdpdGFsfGVufDF8fHx8MTc1OTg0OTQ0MHww&ixlib=rb-4.0&q=80&w=1200')`,
        }}
      >
        {/* Coral overlay to maintain brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-400/85 via-coral-500/80 to-coral-600/85"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-white/15 rounded-full blur-xl"></div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 relative z-20 py-8">
        {/* Hero Illustration - now as decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
            {/* Decorative UI frame overlay */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30 backdrop-blur-sm bg-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 opacity-60">
                  <div className="w-4 h-4 bg-white/40 rounded"></div>
                  <div className="w-4 h-4 bg-white/40 rounded"></div>
                  <div className="w-8 h-2 bg-white/40 rounded col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl leading-tight"
        >
          Designing with Empathy: Beyond the Happy Path in UX
        </motion.h1>

        {/* Subtitle with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8 flex-wrap"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.div>
          <p className="text-xl md:text-2xl max-w-2xl">
            How understanding human emotions makes digital
            experiences truly meaningful
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            <Heart className="w-6 h-6 text-red-200" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5,
            }}
          >
            <Palette className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg text-coral-100"
        >
          An IXDF Session by{" "}
          <span className="font-medium">
            Athira Manosh Kumar
          </span>
          , Senior UX Designer
        </motion.div>
      </div>
    </div>
  );
}