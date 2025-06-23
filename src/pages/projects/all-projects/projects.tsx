import Image from "next/image";
import React from "react";
import data from "@/constants/image";
import Link from "next/link";


const projects = [
  {
    image: data.p6,
    name: "MR.RAJSHEKAR",
    desc: "A thoughtfully designed home featuring contemporary aesthetics, spacious interiors, and a perfect harmony of comfort and style.",
    link: "/projects/mr-rajshekar",
  },
  {
    image: data.b1,
    name: "MR.SAHADEV",
    desc: "A beautifully crafted residence that captures the essence of luxury, featuring elegant design elements and superior craftsmanship.",
    link: "/projects/mr-sahadev",
  },
  {
    image: data.r3,
    name: "MR.RAJESH",
    desc: "A meticulously designed space that prioritizes aesthetics and functionality, offering an inviting atmosphere for modern living.",
    link: "/projects/mr-rajesh",
  },
  {
    image: data.a6,
    name: "MR.KRISHNA REDDY",
    desc: "An exquisite residence that seamlessly blends modern architecture with functional elegance, offering a refined living experience.",
    link: "/projects/mr-krishna-reddy",
  },

  {
    image: data.n5,
    name: "MR.RAVI",
    desc: "A sophisticated architectural marvel, characterized by clean lines, premium finishes, and a timeless appeal for modern living.",
    link: "/projects/mr-ravi",
  },
 
  {
    image: data.k6,
    name: "MR.SUBHADWIP ROY",
    desc: "A striking combination of contemporary and traditional elements, creating a warm yet stylish ambiance for a dream home.",
    link: "/projects/mr-subhadwip-roy",
  },
  {
    image: data.s2,
    name: "MR.REVANTH",
    desc: "A meticulously designed space that prioritizes aesthetics and functionality, offering an inviting atmosphere for modern living.",
    link: "/projects/mr-revanth",
  },
];


export default function AllProjects() {
  return (
    <div className="px-4 sm:px-6 select-none  md:px-16 lg:px-32 py-10 ">      
      <h1 className="text-gold lg:text-6xl text-5xl sm:text-2xl md:text-4xl font-semibold leading-snug">
        All Projects
      </h1>
      
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row lg:space-x-12 border-b-2 py-10"
        >          
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-gold text-3xl font-bold mb-4">{project.name}</h2>
            <h4 className=" text-xl font-base mb-4">{project.desc}</h4>
            <Link href={project.link}  className="text-gold border-2 border-gold px-6 py-2 text-sm font-medium hover:bg-gold hover:text-white transition-all duration-300 whitespace-nowrap">              
                View Project              
            </Link>
          </div>
          
          <div className="lg:w-2/3">
            <Image
              src={project.image}
              alt={`${project.name} - Project`}
              height={500}
              width={1500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}


