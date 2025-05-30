import React, { useState, useEffect, useRef } from 'react';
import sliderImage1 from '../slider.jpg';
import sliderImage2 from '../slider2.jpg';

export default function Home({ autoPlay = true, interval = 6000 }) {
  const slidesData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },   
  ];

  // Move all state and logic directly into the Home component
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoPlay) { // Only set timeout if autoPlay is true
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
          ),
        interval
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoPlay, interval, slidesData.length]); // Added slidesData.length to dependencies

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <main>
        <div className="slideshow-container">
          <div
            className="slideshow-slider"
            // Use currentIndex directly, not slide.currentIndex
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div
                className="slide"
                key={slide.id}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">
                  <h2>{slide.caption}</h2>
                  {/* Add more content here if needed */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="prev-button" onClick={goToPrevSlide}> {/* Use goToPrevSlide directly */}
            &#10094;
          </button>
          <button className="next-button" onClick={goToNextSlide}> {/* Use goToNextSlide directly */}
            &#10095;
          </button>

          {/* Dot Indicators */}
          <div className="slideshow-dots">
            {slidesData.map((_, index) => (
              <div
                key={index}
                className={`slideshow-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)} 
              ></div>
            ))}
          </div>
        </div>
        <section className="homepage-content">
          <p style={{textAlign:'center', margin:'revert'}}>Xenex Overseas</p>
        </section>
      </main>
    </div>
  );
}