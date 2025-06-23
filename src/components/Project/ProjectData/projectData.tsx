import React from "react";

type ProjectDataProps = {
  prop: {
    desc3: string;
  };
};

export default function ProjectData({ prop }: ProjectDataProps) {
  return (
    <div className="mt-10">
      <p className=" text-lg text-gray-600">{prop.desc3}</p>
    </div>
  );
}
