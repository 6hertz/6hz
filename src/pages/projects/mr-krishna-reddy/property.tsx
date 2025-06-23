import ProjectData from "@/components/Project/ProjectData/projectData";
import ProjectImage from "@/components/Project/ProjectImage/projectImage";
import ProjectOverview from "@/components/Project/ProjectOverview/projectOverview";
import Testimonial from "@/components/Project/Testimonial/testimonial";
import TextImageSection from "@/components/Project/TextImageSection/textImageSection";
import Image from "next/image";
import React from "react";
import data from "@/constants/image";

const info = {
  name: "MR KRIHNA REDDY",
  desc: "A thoughtfully designed space that blends elegance with functionality.",
  Category: "Residential",
  Year: 2023,
  Location: "Prime Urban Area",
  desc2:
    "This project represents a seamless fusion of modern architecture and timeless design. Carefully planned to maximize space, light, and comfort, it offers an inviting atmosphere for its residents. Every detail, from layout to material selection, has been meticulously chosen to ensure a balance of aesthetics and practicality.",
  desc3:
    "Built with high-quality materials and an emphasis on refined craftsmanship, this space is designed to offer both beauty and durability. The interiors exude warmth and sophistication, creating an environment that is not just visually appealing but also highly functional for everyday living.",
  image1: data.a1,

  comment:
    "The transformation of this space has exceeded expectations. The attention to detail, quality craftsmanship, and thoughtful design elements have created an environment that feels both luxurious and welcoming. It’s truly a space that balances comfort, style, and functionality seamlessly.",
};

const images = [data.a3, data.a4, data.a5, data.a6, data.a7, data.a8];

export default function PropertyPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-44 py-10 select-none">
      <ProjectOverview prop={info} />
      <Image
        src={data.a1}
        alt="Project Image"
        height={500}
        width={1500}
        className="rounded-lg shadow-lg object-cover mt-20"
      />
      <TextImageSection prop={{ desc2: info.desc2, image1: data.a2 }} />
      <ProjectImage prop={images} />
      <ProjectData prop={info} />
      <Testimonial prop={info} />
    </div>
  );
}
