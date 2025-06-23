"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/constants/image";

const projects = [
  { image: data.b1 },
  // { image: data.r1  },
  { image: data.p3 },
  { image: data.p4 },
  { image: data.p6 },
  { image: data.p7 },
  { image: data.p3 },
  { image: data.p4 },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative w-full h-full overflow-hidden">
  <div className="container mx-auto px-0 h-full">
    <div
      className="flex transition-transform duration-700 ease-in-out whitespace-nowrap h-full"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {projects.map((project, index) => (
        <div key={index} className="w-full h-full flex-shrink-0 flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={project.image}
              alt={`Slide ${index}`}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
              priority={index === currentIndex}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default BannerSlider;
