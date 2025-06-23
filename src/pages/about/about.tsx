import React from "react";
import Image from "next/image";
import data from "@/constants/image";

export default function AboutPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 select-none xl:px-44 lg:mt-10 lg:py-10 text-lgw">      
      <div className="flex flex-col lg:flex-row lg:space-x-24 border-b-2 py-10">
        <h1 className="text-gold text-4xl font-bold mb-6 lg:mb-0 lg:w-1/3">
          About 6 Hz
        </h1>
        <div className="space-y-6 lg:w-2/3">
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Based in Hyderabad, we are a comprehensive architectural and design firm 
            dedicated to creating functional and aesthetically compelling spaces.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            With years of expertise, our firm has successfully completed a diverse range of 
            projects across residential, commercial, and urban landscapes. We specialize in 
            transforming concepts into reality through innovative design, precise execution, and 
            a commitment to excellence.
          </p>
          
          {/* Highlights Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { title: "10+ Years Experience", subtitle: "Industry Expertise" },
              { title: "50+ Projects", subtitle: "Across Various Sectors" },
              { title: "Innovative Designs", subtitle: "Functional & Aesthetic" },
              { title: "Client-Centric Approach", subtitle: "Tailored Solutions" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center border-b-2 border-gray-200 py-10"
              >
                <h2 className="text-gold text-2xl md:text-4xl font-bold">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col lg:flex-row lg:space-x-12 border-b-2 py-10">
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <h1 className="text-gold text-4xl font-bold">RAKESH GOUD</h1>
          <h2 className="text-xl text-gray-600 mt-2">Founder</h2>
        </div>
        <div className="lg:w-2/3 text-lg">
          <Image
            src={data.Founder}
            alt="founder"
            height={500}
            width={1500}
            className="rounded-lg shadow-lg  object-cover"
          />
          <p className="mt-8">
            A graduate of St. Marys Group of Institution , we have built a distinguished career 
            in architecture, blending creativity with functionality. With expertise in architectural design, 
            interior design, and project management consultancy, we have delivered projects that redefine spaces.
          </p>
          <p className="mt-8">
            Over the years, we have led projects ranging from high-end residences to commercial landmarks, 
            always prioritizing quality, innovation, and client satisfaction. Our work in landscape design 
            and exterior façade solutions further demonstrates a commitment to holistic spatial transformation.
          </p>
        </div>
      </div>
    </div>
  );
}