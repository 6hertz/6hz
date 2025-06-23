"use client";

import React, { useRef } from "react";
import { Carousel as AntCarousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

const testimonials = [
  {
    content:
      "I remember the first we had with Sarah—the energy and warmth she brought to the meeting made us confident that she was the one to design our dream home. The knowledge and expertise of Sarah and her team are truly commendable. Building a house can be extremely stressful, but working with the EA team made it feel like a breeze. They had such a clear vision of how the space would look that it was easy for us to trust them with all the decisions.",
    author: "Manoj Jain",
    position: "OWNER, KAY KAY INTERNATIONAL",
  },
  {
    content:
      "The professionalism and creativity of Sarah and her team made the entire process seamless. We are thrilled with our new home and highly recommend them!",
    author: "Anita Sharma",
    position: "BUSINESS OWNER",
  },
  {
    content:
      "Working with the  team was an exceptional experience. They truly understood our vision and turned it into reality effortlessly.",
    author: "Rahul Verma",
    position: "CEO, VERMA INDUSTRIES",
  },
];

const HomeCarousel: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null); 
  const goToPrev = () => carouselRef.current?.prev();
  const goToNext = () => carouselRef.current?.next();

  return (
    <div className="bg-white py-12 px-4 md:px-16 relative">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-gold mb-8">
        Testimonials
      </h2>

      {/* Carousel */}
      <div className="relative">
        <AntCarousel ref={carouselRef} autoplay dots>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-center p-8 flex flex-col items-center justify-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 mx-auto max-w-4xl">
                {testimonial.content}
              </p>
              <h3 className="text-gold text-xl font-bold">
                {testimonial.author}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          ))}
        </AntCarousel>

        {/* Custom Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 border-2 border-gold text-gold rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition duration-300"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-gold text-gold rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition duration-300"
        >
          &gt;
        </button>
      </div>

      {/* Dots Customization */}
      <style>
        {`
          .ant-carousel .slick-dots {
            bottom: -30px; /* Position dots below the carousel */
          }

          .ant-carousel .slick-dots li button {
            width: 12px;
            height: 12px;
            background-color: #E5E5E5; /* Inactive dot color */
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }

          .ant-carousel .slick-dots li.slick-active button {
            background-color: #D4AF37; /* Active dot color (gold) */
          }
        `}
      </style>
    </div>
  );
};

export default HomeCarousel;
