import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";



function CourseHeroSlider() {
  // Array of slides with images and content
  const slides = [
    {
      image: 'assets/home.png',
      title: 'Boost Knowledge, Boost Career',
      titleBreak: 'Knowledge,',
      description: 'Access quality courses taught by industry experts',
      buttonText: 'Explore Courses',
      buttonLink: '/courses'
    },
    {
      image: 'assets/learning.jpg',
      title: 'Grow Today, Lead Tomorrow',
      titleBreak: 'Skills,',
      description: 'Join thousands of professionals upgrading their expertise',
      buttonText: 'Start Learning',
      buttonLink: '/courses'
    },
    {
      image: 'assets/technology.jpg',
      title: 'Learn Technology, Build Innovation',
      titleBreak: 'Technology,',
      description: 'Stay ahead with cutting-edge tech courses and certifications',
      buttonText: 'View Courses',
      buttonLink: '/courses'
    },
    {
      image: 'assets/business.jpg',
      title: 'Develop Leadership, Drive Success',
      titleBreak: 'Leadership,',
      description: 'Executive programs designed for career advancement',
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
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slides.length]);

  // Manual navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    // Resume auto-play after 12 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    // Resume auto-play after 12 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after 12 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full min-h-[50vh] sm:h-[60vh] lg:h-[75vh] pt-10 px-10 overflow-hidden">
      {/* Background Images */}
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
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300 transition-colors" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-300 transition-colors" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
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

   
      {/* Content */}
      <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-10 md:py-16 flex items-center">
        <div className="max-w-3xl">
          {/* Dynamic Heading with Animation */}
          <h1 
            key={`title-${currentIndex}`}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-slide-up"
          >
            {currentSlide.title.split(currentSlide.titleBreak).map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && (
                  <>
                    <span className="text-blue-300">{currentSlide.titleBreak}</span>
                    <br />
                  </>
                )}
              </span>
            ))}
          </h1>

          {/* Dynamic Description */}
          <p 
            key={`desc-${currentIndex}`}
            className="text-base sm:text-lg text-white/90 mt-4 mb-6 animate-fade-slide-up-delay leading-relaxed"
          >
            {currentSlide.description}
          </p>

          {/* Dynamic Button */}
          <div 
            key={`btn-${currentIndex}`}
            className="animate-fade-slide-up-delay-2"
          >
            <Link
              to={currentSlide.buttonLink}
              className="inline-block text-white font-semibold px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              {currentSlide.buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-100 ease-linear shadow-lg"
            style={{
              width: `${((currentIndex + 1) / slides.length) * 100}%`
            }}
          />
        </div>
      )}

      
    </div>
  );
}

export default CourseHeroSlider;