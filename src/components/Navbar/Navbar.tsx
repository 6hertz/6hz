// "use client";

// import React, { useState } from "react";
// import { FaInstagram } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { PiLinkedinLogoBold } from "react-icons/pi";
// import { HiOutlineMenu, HiX } from "react-icons/hi";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import data from "@/constants/image";
// import Image from "next/image";


// const Navbar = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div className="bg-white border-b border-gray-300">
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex justify-between bg-white border-b-[1px] border-gold">
//         <div className="flex justify-start ml-[14%]">
//           <p
//             onClick={() => router.push("/home")}
//             className={`cursor-pointer py-[32px] px-[28px] border-l-[1px] border-gold ${
//               pathname === "/home" ? "border-b-[5px]" : ""
//             } text-sm text-gold uppercase`}
//           >
//             Home
//           </p>
//           <p
//             onClick={() => router.push("/about")}
//             className={`cursor-pointer py-[32px] px-[28px] border-x-[1px] border-gold ${
//               pathname === "/about" ? "border-b-[5px]" : ""
//             } text-sm text-gold uppercase`}
//           >
//             About
//           </p>
//         </div>
//         <div className="flex justify-center space-x-5 mt-5">
//           <Image
//             src={data.Logo}
//             alt="6Hz Logo"
//             height={50}
//             width={50}
//             className="mx-auto md:mx-0 mb-5 object-cover"
//           />
//         </div>
//         <div className="flex justify-between items-center bg-white">
//           {/* Dropdown for "Past Projects" */}
//           <div className="relative group">
//             <p
//               onClick={() => router.push("/projects")}
//               className={` ${
//                 pathname?.startsWith("/projects") ? "border-b-[5px]" : ""
//               } cursor-pointer py-[32px] px-[28px] border-l-[1px] border-gold text-sm text-gold uppercase flex items-center`}
//             >
//               Projects
           
//             </p>
//           </div>
//           <p
//             onClick={() => router.push("/contact")}
//             className={`cursor-pointer py-[32px] px-[28px] border-l-[1px] border-gold ${
//               pathname === "/contact" ? "border-b-[5px]" : ""
//             } text-sm text-gold uppercase`}
//           >
//             Contact
//           </p>
//           <div className="py-[32px] px-[28px] border-x-[1px] border-gold flex gap-5 text-gold">
//             <FaInstagram size={25} className="cursor-pointer" />
//             <PiLinkedinLogoBold size={25} className="cursor-pointer" />
//             <MdOutlineMailOutline size={25} className="cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="flex justify-between items-center px-4 py-3 md:hidden">
//         <div className="flex justify-center space-x-5 ">
//           <Image
//             src={data.Logo}
//             alt="6Hz Logo"
//             height={40}
//             width={40}
//             className="mx-auto md:mx-0  object-cover"
//           />
//         </div>
//         <div>
//           {menuOpen ? (
//             <HiX
//               size={30}
//               className="text-gold cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             />
//           ) : (
//             <HiOutlineMenu
//               size={30}
//               className="text-gold cursor-pointer"
//               onClick={() => setMenuOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-start px-4 py-4 space-y-4 text-sm text-gold bg-white">
//           <p
//             onClick={() => {
//               router.push("/home");
//               setMenuOpen(false);
//             }}
//             className={`${
//               pathname === "/home" ? "bg-gold text-white" : ""
//             } cursor-pointer w-full rounded-sm  p-2 uppercase tracking-wide hover:underline`}
//           >
//             Home
//           </p>
//           <p
//             onClick={() => {
//               router.push("/about");
//               setMenuOpen(false);
//             }}
//             className={`${
//               pathname === "/about" ? "bg-gold text-white" : ""
//             } cursor-pointer w-full rounded-sm  p-2 uppercase tracking-wide hover:underline`}
//           >
//             About
//           </p>

//           <p
//             onClick={() => {
//               router.push("/projectsa");
//               setMenuOpen(false);
//             }}
//             className={`${
//               pathname === "/projects" ? "bg-gold text-white" : ""
//             } cursor-pointer rounded-sm w-full  p-2 uppercase tracking-wide hover:underline`}
//           >
//             Projects
//           </p>
//           <p
//             onClick={() => {
//               router.push("/contact");
//               setMenuOpen(false);
//             }}
//             className={`${
//               pathname === "/contact" ? "bg-gold text-white" : ""
//             } cursor-pointer rounded-sm w-full  p-2 uppercase tracking-wide hover:underline`}
//           >
//             Contact
//           </p>

//           <div className="flex gap-4 text-gold p-2">
//             <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
//               <FaInstagram size={20} className="cursor-pointer" />
//             </Link>
//             <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
//               <PiLinkedinLogoBold size={20} className="cursor-pointer" />
//             </Link>
//             <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
//               <MdOutlineMailOutline size={20} className="cursor-pointer" />
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



"use client";

import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/constants/image";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-300">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center  border-b-[1px] border-gold px-[0%]">
        {/* Logo on the Left */}
        <div className="flex justify-start">
          <Image
            src={data.Logo}
            alt="6Hz Logo"
            height={60}
            width={60}
            className="object-cover cursor-pointer  ml-7"
            onClick={() => router.push("/home")}
          />
        </div>

        {/* Navigation Routes on the Right */}
        <div className="flex justify-end items-center">
          <p
            onClick={() => router.push("/home")}
            className={`cursor-pointer py-[32px] px-[28px] border-l-[1px] border-gold ${
              pathname === "/home" ? "border-b-[5px]" : ""
            } text-sm text-gold uppercase`}
          >
            Home
          </p>
          <p
            onClick={() => router.push("/about")}
            className={`cursor-pointer py-[32px] px-[28px] border-x-[1px] border-gold ${
              pathname === "/about" ? "border-b-[5px]" : ""
            } text-sm text-gold uppercase`}
          >
            About
          </p>
          <p
            onClick={() => router.push("/projects")}
            className={`cursor-pointer py-[32px] px-[28px] border-x-[1px] border-gold ${
              pathname?.startsWith("/projects") ? "border-b-[5px]" : ""
            } text-sm text-gold uppercase`}
          >
            Projects
          </p>
          <p
            onClick={() => router.push("/contact")}
            className={`cursor-pointer py-[32px] px-[28px] border-x-[1px] border-gold ${
              pathname === "/contact" ? "border-b-[5px]" : ""
            } text-sm text-gold uppercase`}
          >
            Contact
          </p>
          <div className="py-[32px] px-[28px] border-x-[1px] border-gold flex gap-5 text-gold">
            <FaInstagram size={25} className="cursor-pointer" />
            <PiLinkedinLogoBold size={25} className="cursor-pointer" />
            <MdOutlineMailOutline size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <div className="flex justify-center space-x-5">
          <Image
            src={data.Logo}
            alt="6Hz Logo"
            height={40}
            width={40}
            className="mx-auto md:mx-0 object-cover"
          />
        </div>
        <div>
          {menuOpen ? (
            <HiX
              size={30}
              className="text-gold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              size={30}
              className="text-gold cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 py-4 space-y-4 text-sm text-gold bg-white">
          <p
            onClick={() => {
              router.push("/home");
              setMenuOpen(false);
            }}
            className={`${
              pathname === "/home" ? "bg-gold text-white" : ""
            } cursor-pointer w-full rounded-sm p-2 uppercase tracking-wide hover:underline`}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/about");
              setMenuOpen(false);
            }}
            className={`${
              pathname === "/about" ? "bg-gold text-white" : ""
            } cursor-pointer w-full rounded-sm p-2 uppercase tracking-wide hover:underline`}
          >
            About
          </p>
          <p
            onClick={() => {
              router.push("/projects");
              setMenuOpen(false);
            }}
            className={`${
              pathname === "/projects" ? "bg-gold text-white" : ""
            } cursor-pointer rounded-sm w-full p-2 uppercase tracking-wide hover:underline`}
          >
            Projects
          </p>
          <p
            onClick={() => {
              router.push("/contact");
              setMenuOpen(false);
            }}
            className={`${
              pathname === "/contact" ? "bg-gold text-white" : ""
            } cursor-pointer rounded-sm w-full p-2 uppercase tracking-wide hover:underline`}
          >
            Contact
          </p>
          <div className="flex gap-4 text-gold p-2">
            <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
              <FaInstagram size={20} className="cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
              <PiLinkedinLogoBold size={20} className="cursor-pointer" />
            </Link>
            <Link href="https://www.youtube.com/watch?v=aCF07BQ3znE">
              <MdOutlineMailOutline size={20} className="cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;