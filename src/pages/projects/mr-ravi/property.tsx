import ProjectData from "@/components/Project/ProjectData/projectData";
import ProjectImage from "@/components/Project/ProjectImage/projectImage";
import ProjectOverview from "@/components/Project/ProjectOverview/projectOverview";
import Testimonial from "@/components/Project/Testimonial/testimonial";
import TextImageSection from "@/components/Project/TextImageSection/textImageSection";
import Image from "next/image";
import React from "react";
import data from "@/constants/image";

const info = {
  name: "MR. RAVI",
  desc: "A contemporary living space designed for comfort and sophistication.",
  Category: "Residential",
  Year: 2023,
  Location: "Prime Urban Area",
  desc2:
    "This project seamlessly blends modern aesthetics with functional design. Thoughtfully crafted to optimize natural light and open spaces, it offers a welcoming and refined living environment. The architectural details and premium materials ensure both style and longevity, making it a standout space.",
  desc3:
    "Built with precision and attention to detail, this residence offers a harmonious balance of luxury and practicality. Every element, from the layout to the finishing touches, is curated to enhance the living experience. The result is a home that is both visually striking and highly livable.",
  image1: data.n1,

  comment:
    "This space truly redefines modern living. The seamless blend of design, quality materials, and thoughtful layout has created an environment that feels both elegant and functional. The attention to every little detail has resulted in a space that is not just beautiful but also highly comfortable.",
};

const images = [data.n1, data.n2, data.n3, data.n4, data.n5, data.n6];

export default function PropertyPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-44 py-10 select-none">
      <ProjectOverview prop={info} />
      <Image
        src={data.n2}
        alt="Project Image"
        height={500}
        width={1500}
        className="rounded-lg shadow-lg object-cover mt-20"
      />
      <TextImageSection prop={{ desc2: info.desc2, image1: data.n7 }} />
      <ProjectImage prop={images} />
      <ProjectData prop={info} />
      <Testimonial prop={info} />
    </div>
  );
}
