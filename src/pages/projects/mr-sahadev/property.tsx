import ProjectData from "@/components/Project/ProjectData/projectData";
import ProjectImage from "@/components/Project/ProjectImage/projectImage";
import ProjectOverview from "@/components/Project/ProjectOverview/projectOverview";
import Testimonial from "@/components/Project/Testimonial/testimonial";
import TextImageSection from "@/components/Project/TextImageSection/textImageSection";
import Image from "next/image";
import React from "react";
import data from "@/constants/image";

const info = {
  name: "MR. SAHADEV",
  desc: "A sophisticated residence designed for both comfort and style.",
  Category: "Residential",
  Year: 2023,
  Location: "Prime Urban Area",
  desc2:
    "This project exemplifies the perfect harmony between modern aesthetics and practical design. Featuring spacious interiors, abundant natural light, and high-quality craftsmanship, it offers an inviting and luxurious living experience. Every element has been carefully selected to enhance both form and function.",
  desc3:
    "Built with meticulous attention to detail, this residence combines timeless elegance with contemporary convenience. From its well-planned layout to the premium materials used, it creates a refined yet warm environment, making it a perfect home for those who appreciate both beauty and practicality.",
  image1: data.b1,

  comment:
    "The transformation of this space is truly remarkable. The balance of luxury, comfort, and thoughtful design has created a home that is not just visually stunning but also deeply functional. Every aspect of this project reflects precision, elegance, and a commitment to quality living.",
};


const images = [data.b1, data.b2, data.b3];

export default function PropertyPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-44 py-10 select-none">
      <ProjectOverview prop={info} />
      <Image
        src={data.b2}
        alt="Project Image"
        height={500}
        width={1500}
        className="rounded-lg shadow-lg object-cover mt-20"
      />
      <TextImageSection prop={{ desc2: info.desc2, image1: data.b1 }} />
      <ProjectImage prop={images} />
      <ProjectData prop={info} />
      <Testimonial prop={info} />
    </div>
  );
}
