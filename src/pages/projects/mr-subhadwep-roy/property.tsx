import ProjectData from "@/components/Project/ProjectData/projectData";
import ProjectImage from "@/components/Project/ProjectImage/projectImage";
import ProjectOverview from "@/components/Project/ProjectOverview/projectOverview";
import Testimonial from "@/components/Project/Testimonial/testimonial";
import TextImageSection from "@/components/Project/TextImageSection/textImageSection";
import Image from "next/image";
import React from "react";
import data from "@/constants/image";

const info = {
  name: "MR. SUBHADWIP ROY",
  desc: "A contemporary home that blends modern aesthetics with everyday functionality.",
  Category: "Residential",
  Year: 2023,
  Location: "Prime Urban Area",
  desc2:
    "This project showcases a seamless integration of sleek architectural design and comfortable living. Designed to maximize space and natural light, it offers an open, airy atmosphere that enhances both style and practicality. Every detail, from materials to layout, has been carefully chosen to create a sophisticated yet functional home.",
  desc3:
    "Built with high-quality materials and meticulous craftsmanship, this residence is a testament to refined living. Its elegant interiors, well-planned spaces, and modern finishes create a perfect balance of luxury and comfort. The thoughtful execution ensures a home that is not only visually stunning but also highly livable.",
  image1: data.k1,

  comment:
    "The attention to detail in this project is truly outstanding. The combination of modern design, high-end finishes, and a functional layout has resulted in a space that is both stylish and comfortable. It’s an exceptional example of contemporary residential architecture.",
};



const images = [data.k1, data.k2, data.k3, data.k4, data.k5, data.k6, data.k7, data.k8];

export default function PropertyPage() {
  return (
    <div className="px-6 md:px-10 lg:px-20 xl:px-44 py-10 select-none">
      <ProjectOverview prop={info} />
      <Image
        src={data.k2}
        alt="Project Image"
        height={500}
        width={1500}
        className="rounded-lg shadow-lg object-cover mt-20"
      />
      <TextImageSection prop={{ desc2: info.desc2, image1: data.k1 }} />
      <ProjectImage prop={images} />
      <ProjectData prop={info} />
      <Testimonial prop={info} />
    </div>
  );
}
