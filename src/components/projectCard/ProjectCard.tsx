import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  prop: string[]; 
};

export default function ProjectCard({ prop }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {prop?(prop.map((image, index) => (
        <div key={index} className="border rounded-lg shadow-lg">
          <Image
            src={image}
            alt={`Project image ${index + 1}`}
            height={300}
            width={300}
            className="rounded-t-lg object-cover"
          />
        </div>
      ))):null}
    </div>
  );
}
