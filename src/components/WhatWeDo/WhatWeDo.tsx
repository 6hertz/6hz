import { useState } from "react";
import React from "react";

const services = [
  {
    title: "ARCHITECTURAL DESIGN",
    description:
      "We transcend conventional architectural boundaries to deliver bespoke designs that resonate with your vision. Our approach integrates cutting-edge technology with timeless architectural principles, ensuring each structure is not only visually stunning but also functionally optimized. From initial concept sketches to detailed blueprints, we meticulously craft spaces that inspire and endure. We prioritize sustainable practices, incorporating energy-efficient solutions and eco-friendly materials to create harmonious, environmentally responsible buildings.",
  },
  {
    title: "INTERIOR DESIGN",
    description:
      "Our interior design philosophy revolves around creating personalized sanctuaries that reflect your unique lifestyle and preferences. We delve deep into understanding your desires, transforming them into cohesive and captivating interiors. Our designs emphasize the seamless integration of textures, colors, and lighting to evoke specific moods and atmospheres. We meticulously select furniture, fixtures, and finishes, ensuring every element contributes to a harmonious and functional space. Whether you seek contemporary minimalism or classic opulence, we tailor our expertise to create interiors that are both luxurious and livable.",
  },
  {
    title: "CONSTRUCTION",
    description:
      "We provide comprehensive construction services, managing every phase of your project with unwavering commitment to quality and precision. Our experienced team oversees all aspects, from site preparation and foundation work to final finishing touches. We employ rigorous quality control measures to ensure adherence to the highest industry standards. We prioritize safety, efficiency, and transparency, maintaining open communication and providing regular updates throughout the construction process. Our goal is to deliver projects on time and within budget, exceeding your expectations with exceptional craftsmanship and attention to detail.",
  },
  {
    title: "EXTERIOR FACADE DESIGN",
    description:
      "We specialize in creating striking exterior facades that make a lasting impression. Our designs focus on enhancing curb appeal while ensuring structural integrity and energy efficiency. We leverage innovative materials and techniques to create facades that are both visually captivating and environmentally responsible. We consider the building's context, climate, and purpose to develop designs that seamlessly blend with their surroundings. From sleek modern facades to traditional architectural styles, we tailor our expertise to create exteriors that are both beautiful and functional, enhancing the building's overall value and performance.",
  },
  {
    title: "PROJECT MANAGEMENT",
    description:
      "Our expert project managers provide comprehensive oversight, ensuring your project is executed flawlessly from inception to completion. We handle all aspects of project management, including planning, budgeting, scheduling, and risk assessment. We act as your trusted advisors, providing strategic guidance and proactive solutions to navigate challenges and ensure project success. We prioritize clear communication, maintaining regular updates and fostering collaboration among all stakeholders. Our meticulous approach ensures projects are delivered on time, within budget, and to the highest quality standards, allowing you to focus on your core business while we handle the complexities of your project.",
  },
  {
    title: "LANDSCAPE DESIGN",
    description:
      "We craft enchanting outdoor spaces that harmonize with nature and enhance the beauty of your property. Our landscape designs focus on creating sustainable and aesthetically pleasing environments that reflect your personal style and preferences. We consider the site's topography, climate, and existing vegetation to develop designs that are both functional and visually stunning. From lush gardens and serene water features to inviting patios and outdoor living areas, we create landscapes that provide a tranquil retreat and enhance your connection with nature. We emphasize the use of native plants and eco-friendly practices to create landscapes that are both beautiful and environmentally responsible.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mb-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden border border-gray-200">
              <button
                className="w-full text-left p-5 flex justify-between items-center text-xl transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {service.title}
                <span className="text-2xl">{openIndex === index ? "−" : "＋"}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-gray-700">{service.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {services.slice(3, 6).map((service, index) => (
            <div key={index + 3} className="bg-white rounded-md overflow-hidden border border-gray-200">
              <button
                className="w-full text-left p-5 flex justify-between items-center text-xl transition-all duration-300"
                onClick={() => toggleAccordion(index + 3)}
              >
                {service.title}
                <span className="text-2xl">{openIndex === index + 3 ? "−" : "＋"}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index + 3 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-gray-700">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}