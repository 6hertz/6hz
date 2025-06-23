import ProjectData from "@/components/Project/ProjectData/projectData";
import ProjectImage from "@/components/Project/ProjectImage/projectImage";
import ProjectOverview from "@/components/Project/ProjectOverview/projectOverview";
import Testimonial from "@/components/Project/Testimonial/testimonial";
import TextImageSection from "@/components/Project/TextImageSection/textImageSection";
import Image from "next/image";
import React from "react";
import data from "@/constants/image";

const info = {
  name: "MR. REVNATH",
  desc: "An elegant residence designed to complement modern lifestyles.",
  Category: "Residential",
  Year: 2023,
  Location: "Prime Urban Area",
  desc2:
    "This project embodies a perfect fusion of contemporary architecture and practical design. With open, airy spaces and an emphasis on natural light, it creates an inviting and sophisticated ambiance. Every aspect, from material selection to layout planning, ensures a seamless blend of luxury and comfort.",
  desc3:
    "Crafted with exceptional attention to detail, this home prioritizes both style and functionality. The refined interiors, high-quality finishes, and well-thought-out spatial design result in a living experience that is both visually striking and effortlessly comfortable.",
  image1: data.s1,

  comment:
    "A remarkable transformation that balances aesthetics and practicality. The carefully curated materials and thoughtful execution have resulted in a space that feels warm, luxurious, and inviting. Every detail enhances both the visual appeal and the everyday functionality of the home.",
};


const images = [data.s1, data.s2, data.s3, data.s4, data.s5];

export default function PropertyPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-44 py-10 select-none">
      <ProjectOverview prop={info} />
      <Image
        src={data.s2}
        alt="Project Image"
        height={500}
        width={1500}
        className="rounded-lg shadow-lg object-cover mt-20"
      />
      <TextImageSection prop={{ desc2: info.desc2, image1: data.s1 }} />
      <ProjectImage prop={images} />
      <ProjectData prop={info} />
      <Testimonial prop={info} />
    </div>
  );
}
