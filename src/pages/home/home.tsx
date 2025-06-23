"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import OurProcess from "@/components/OurProcess/OurProcess";
import ServicesAccordion from "@/components/WhatWeDo/WhatWeDo";

import data from "@/constants/image";

const projects = [
  {
    image: data.p2,
    name: "MR.RAJSHEKAR",
    desc: "A thoughtfully designed home featuring contemporary aesthetics, spacious interiors, and a perfect harmony of comfort and style.",
    link: "/projects/mr-rajshekar",
  },
  {
    image: data.b1,
    name: "MR.SAHADEV",
    desc: "A beautifully crafted residence that captures the essence of luxury, featuring elegant design elements and superior craftsmanship.",
    link: "/projects/mr-sahadev",
  },
  {
    image: data.r7,
    name: "MR.RAJESH",
    desc: "A meticulously designed space that prioritizes aesthetics and functionality, offering an inviting atmosphere for modern living.",
    link: "/projects/mr-rajesh",
  },
  {
    image: data.a1,
    name: "MR.KRISHNA REDDY",
    desc: "An exquisite residence that seamlessly blends modern architecture with functional elegance, offering a refined living experience.",
    link: "/projects/mr-krishna-reddy",
  },

  {
    image: data.n5,
    name: "MR.RAVI",
    desc: "A sophisticated architectural marvel, characterized by clean lines, premium finishes, and a timeless appeal for modern living.",
    link: "/projects/mr-ravi",
  },

  {
    image: data.k6,
    name: "MR.SUBHADWIP ROY",
    desc: "A striking combination of contemporary and traditional elements, creating a warm yet stylish ambiance for a dream home.",
    link: "/projects/mr-subhadwip-roy",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <BannerSlider />

      {/* Page Container */}
      <div className="sm:px-5 space-y-16 max-w-7xl mx-auto px-5">
        {/* Hero Section */}
        <motion.div
          className="text-center max-h-48 mt-5 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {[
            "Elevating homes with exceptional craftsmanship",
            "Crafting unique and luxurious spaces",
          ].map((text, index) => (
            <motion.h1
              key={index}
              className="text-gold text-4xl  md:text-4xl  leading-snug"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              {text}
            </motion.h1>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        <div className="flex justify-center">
          <motion.div
            className="space-y-12 max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-gold text-3xl mt-10 lg:mt-0 md:mt-10 sm:mt-10  text-center lg:text-left">
              Featured Projects
            </h2>

            {/* Content and Button */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Description */}
              <motion.div
                className="text-gray-700 text-lg leading-relaxed lg:flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p>
                  Each project that we undertake has a story to tell. One that
                  is actualized by our expertise, aesthetics, and attention to
                  detail.
                </p>
                <p className="mt-6">
                  While each project has the inimitable EA signature, they are
                  all distinctive in their inception, design, and execution, all
                  bearing a version of luxury that&apos;s unique to that space.
                </p>
              </motion.div>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/projects"
                  className="text-gold border-2 border-gold px-8 py-4 text-lg font-semibold rounded-lg 
                    hover:bg-gold hover:text-white transition-all duration-300 whitespace-nowrap
                    shadow-lg hover:shadow-xl active:shadow-md"
                >
                  SEE ALL PROJECTS
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* What We Do Section */}
        <OurProcess />
        <h2 className="text-4xl  text-center text-gold">WHAT WE DO</h2>

        <ServicesAccordion />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Text */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl  text-gold dark:text-white tracking-wide mb-2">
                  {project.name}
                </h2>
              </motion.div>

              <Link href={project.link}>
                <Image
                  src={project.image}
                  alt={`Project image ${index}`}
                  height={500}
                  width={400}
                  className="w-full object-cover cursor-pointer lg:h-[370px] rounded-md"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
