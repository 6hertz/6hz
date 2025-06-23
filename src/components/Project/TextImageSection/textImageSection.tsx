/* eslint-disable */
import Image from "next/image";
import React from "react";

type TextImageSectionProps = {
  prop: {
    desc2: string;
    image1: any;

  };
};

export default function TextImageSection({ prop }: TextImageSectionProps) {
  return (
    <>
      <div className="mt-14 flex flex-col lg:flex-row lg:space-x-12 border-b-2 py-10">
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <h1 className="text-gold text-4xl font-bold">The Ask</h1>
          <h2 className="text-lg text-gray-600 mt-2">{prop.desc2}</h2>
        </div>
        <div className="lg:w-2/3">
          <Image
            src={prop.image1}
            alt="Sarah Sham - Principal Designer"
            height={500}
            width={1500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
