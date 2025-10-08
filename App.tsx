import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

// Import components for each section
import { TitleSlide } from './components/TitleSlide';
import { WhyEmpathySlide } from './components/WhyEmpathySlide';
import { WhatIsEmpathySlide } from './components/WhatIsEmpathySlide';
import { EmpathyVsSympathySlide } from './components/EmpathyVsSympathySlide';
import { EmpathyBasedDesignSlide } from './components/EmpathyBasedDesignSlide';
import { DesigningForTodaySlide } from './components/DesigningForTodaySlide';
import { DevarajaMarketSlide } from './components/DevarajaMarketSlide';
import { TrainStationSlide } from './components/TrainStationSlide';
import { PhysicalVsDigitalSlide } from './components/PhysicalVsDigitalSlide';
import { HappyPathSlide } from './components/HappyPathSlide';
import { ExceptionsSlide } from './components/ExceptionsSlide';
import { BuildingEmpathySlide } from './components/BuildingEmpathySlide';
import { ThinkingLikeUserSlide } from './components/ThinkingLikeUserSlide';
import { AccessibilitySlide } from './components/AccessibilitySlide';
import { PersonalizationSlide } from './components/PersonalizationSlide';
import { MicrocopySlide } from './components/MicrocopySlide';
import { SwiggySlide } from './components/SwiggySlide';
import { BusinessValueSlide } from './components/BusinessValueSlide';
import { RetentionSlide } from './components/RetentionSlide';
import { HumanThinkingSlide } from './components/HumanThinkingSlide';
import { CheatSheetSlide } from './components/CheatSheetSlide';
import { TakeawaysSlide } from './components/TakeawaysSlide';
import { ThankYouSlide } from './components/ThankYouSlide';

const slides = [
  { id: 1, component: TitleSlide, title: "Title" },
  { id: 2, component: WhyEmpathySlide, title: "Why Empathy in Design?" },
  { id: 3, component: WhatIsEmpathySlide, title: "What Is Empathy?" },
  { id: 4, component: EmpathyVsSympathySlide, title: "Empathy vs. Sympathy" },
  { id: 5, component: EmpathyBasedDesignSlide, title: "Empathy-Based Design" },
  { id: 6, component: DesigningForTodaySlide, title: "Designing for Today" },
  { id: 7, component: DevarajaMarketSlide, title: "Devaraja Market Case" },
  { id: 8, component: TrainStationSlide, title: "Train Station Case" },
  { id: 9, component: PhysicalVsDigitalSlide, title: "Physical vs Digital" },
  { id: 10, component: HappyPathSlide, title: "Happy Path Problem" },
  { id: 11, component: ExceptionsSlide, title: "Designing for Exceptions" },
  { id: 12, component: BuildingEmpathySlide, title: "Building Empathy" },
  { id: 13, component: ThinkingLikeUserSlide, title: "Thinking Like a User" },
  { id: 14, component: AccessibilitySlide, title: "Accessibility" },
  { id: 15, component: PersonalizationSlide, title: "Personalization" },
  { id: 16, component: MicrocopySlide, title: "Microcopy & Tone" },
  { id: 17, component: SwiggySlide, title: "Swiggy Case Study" },
  { id: 18, component: BusinessValueSlide, title: "Business Value" },
  { id: 19, component: RetentionSlide, title: "Retention & Loyalty" },
  { id: 20, component: HumanThinkingSlide, title: "Human Thinking" },
  { id: 21, component: CheatSheetSlide, title: "Cheat Sheet" },
  { id: 22, component: TakeawaysSlide, title: "Takeaways" },
  { id: 23, component: ThankYouSlide, title: "Thank You" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;
    
    if (clickX > centerX) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div 
      className="h-screen w-screen bg-gradient-to-br from-coral-50 to-coral-100 relative overflow-hidden cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 overflow-auto"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Subtle slide indicator in bottom corner */}
      <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-sm">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Click zones for navigation hint (invisible) */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 flex items-center justify-start pl-8 opacity-0 hover:opacity-20 transition-opacity">
          <ChevronLeft className="w-8 h-8 text-white bg-black/30 rounded-full p-1" />
        </div>
        <div className="flex-1 flex items-center justify-end pr-8 opacity-0 hover:opacity-20 transition-opacity">
          <ChevronRight className="w-8 h-8 text-white bg-black/30 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}