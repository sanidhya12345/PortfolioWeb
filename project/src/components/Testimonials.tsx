import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Avid Hiker',
    quote: 'The quality of Mountain Trek\'s gear is unmatched. My backpack has survived countless trails and still looks brand new. Their attention to detail and durability makes all the difference when you\'re miles from civilization.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Mountain Climber',
    quote: 'As someone who tests gear to its limits, I can confidently say that Mountain Trek products are built to last. Their climbing equipment has literally been my lifeline, and I wouldn\'t trust any other brand.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Weekend Adventurer',
    quote: 'I\'ve tried many outdoor brands, but Mountain Trek consistently delivers the perfect balance of comfort, style, and functionality. Their customer service is exceptional too—they helped me find the perfect tent for my family camping trips.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from adventurers who trust our gear 
            on their journeys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Controls */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-emerald-700 hover:bg-emerald-600 transition-colors duration-300 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6">
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-emerald-700 hover:bg-emerald-600 transition-colors duration-300 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Testimonial Card */}
            <div 
              className="bg-emerald-700 rounded-lg p-8 shadow-lg transition-all duration-500"
              style={{opacity: 1, transform: 'scale(1)'}}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-600 mx-auto md:mx-0">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <svg 
                        key={i} 
                        className="h-5 w-5 text-amber-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg italic mb-4">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-emerald-200">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white w-6' : 'bg-emerald-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;