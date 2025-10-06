import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Note: Ensure your global CSS includes the required slide-in keyframes below.
/*
@keyframes modernSlideIn {
  0% { transform: translateY(20px); opacity: 0; filter: blur(4px); }
  100% { transform: translateY(0); opacity: 1; filter: blur(0); }
}
.animate-content-in { animation: modernSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards; }
.animate-content-in-delay { animation: modernSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards; }
.animate-content-in-delay-2 { animation: modernSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards; }

@keyframes progressBarAnimate {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
*/

function CourseHeroSlider() {
  // Array of slides with images and content
  const slides = [
    {
      image: 'assets/home.png',
      title: 'Boost Knowledge, Boost Career',
      titleBreak: 'Knowledge,',
      description: 'Access quality courses taught by industry experts and achieve your professional goals.',
      buttonText: 'Explore Courses',
      buttonLink: '/courses'
    },
    {
      image: 'assets/learning.jpg',
      title: 'Grow Today, Lead Tomorrow',
      titleBreak: 'Skills,',
      description: 'Join thousands of professionals upgrading their expertise with flexible, accredited programs.',
      buttonText: 'Start Learning',
      buttonLink: '/courses'
    },
    {
      image: 'assets/technology.jpg',
      title: 'Learn Technology, Build Innovation',
      titleBreak: 'Technology,',
      description: 'Stay ahead with cutting-edge tech courses and certifications in AI, Data, and Cloud.',
      buttonText: 'View Courses',
      buttonLink: '/courses'
    },
    {
      image: 'assets/business.jpg',
      title: 'Develop Leadership, Drive Success',
      titleBreak: 'Leadership,',
      description: 'Executive programs designed for rapid career advancement and strategic business insight.',
      buttonText: 'View Courses',
      buttonLink: '/courses'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Manual navigation functions
  const handleNavigation = (newIndex) => {
    setIsAutoPlaying(false);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };
  
  const goToPrevious = () => handleNavigation(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const goToNext = () => handleNavigation(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  const goToSlide = (index) => handleNavigation(index);

  return (
    <div className="relative w-full min-h-[50vh] sm:h-[60vh] lg:h-[75vh] pt-10 overflow-hidden">
      
      {/* --- Background Image Transition: Subtle Fade and Zoom (Modern Effect) --- */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* --- Content Area (Uses Key Prop for Coordinated Data Animation) --- */}
      <div className="relative z-20 w-full h-full px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-10 md:py-16 flex items-center justify-start">
        <div className="max-w-3xl text-left">
          
          {/* Content Wrapper that uses key={currentIndex} to re-render and trigger animation */}
          <div key={currentIndex} className="w-full">
            
            {/* Dynamic Heading (Strongest animation effect) */}
            <h1 
              // Uses the modernSlideIn animation
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-3 overflow-hidden animate-content-in"
              style={{ animationFillMode: 'both', opacity: 0 }} // Start hidden
            >
              {slides[currentIndex].title.split(slides[currentIndex].titleBreak).map((part, titleIndex) => (
                <span key={titleIndex}>
                  {part}
                  {titleIndex === 0 && (
                    <>
                      <span className="text-blue-300">{slides[currentIndex].titleBreak}</span>
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h1>

            {/* Dynamic Description (Slight delay) */}
            <p 
              className="text-base sm:text-lg text-white/90  mb-4 leading-relaxed animate-content-in-delay"
              style={{ animationFillMode: 'both', opacity: 0 }} // Start hidden
            >
              {slides[currentIndex].description}
            </p>

            {/* Dynamic Button (Longest delay) */}
            <div 
              className="animate-content-in-delay-2"
              style={{ animationFillMode: 'both', opacity: 0 }} // Start hidden
            >
              <Link
                to={slides[currentIndex].buttonLink}
                className="inline-block text-white font-semibold px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              >
                {slides[currentIndex].buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}


      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300 transition-colors" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300 transition-colors" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 border border-white/30 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg"
            key={currentIndex} 
            style={{
              width: '100%',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              animation: 'progressBarAnimate 6s linear forwards' 
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CourseHeroSlider;