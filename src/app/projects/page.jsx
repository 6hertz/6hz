import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AllProjects from "@/pages/projects/all-projects/projects";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <AllProjects />
      <Footer />
    </>
  );
}
