import MrEshwarBreadcrumb from "@/components/Breadcrumb/mr-eshwar-residence/mr-eshwar-breadcrumb";
import React from "react";

interface ProjectProps {
  name: string;
  desc: string;
}

interface ProjectOverviewProps {
  prop: ProjectProps;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ prop }) => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full mt-10">
        <div className="w-full md:w-4/5  pr-6">
          <MrEshwarBreadcrumb />
          <h1 className="text-5xl text-gold font-bold mt-6">{prop.name}</h1>
          <h4 className="text-lg text-gray-700 mt-4">{prop.desc}</h4>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
