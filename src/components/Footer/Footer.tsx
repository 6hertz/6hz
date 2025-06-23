import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import data from "@/constants/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 select-none mt-32 md:px-16 lg:px-44 mb-7">
      <div className="flex flex-col md:flex-row border-b-2 border-gold pb-7">
        {/* Left Section */}
        <div className="md:w-2/3 text-center md:text-left md:pr-7 border-b md:border-b-0 md:border-r-2 border-gold mb-7 md:mb-0">
          <div className="flex justify-center space-x-5 mt-5">
            <Image
              src={data.Logo}
              alt="6Hz Logo"
              height={80}
              width={80}
              className="mx-auto md:mx-0 mb-5 object-cover"
            />
          </div>
          <address className="not-italic text-center text-sm md:text-lg space-y-1">
            <p>Prabhat Signature</p>
            <p>Flat No. 201, Kukatpally</p>
            <p>Hyderabad, 500072</p>
          </address>
          <div className="flex justify-center space-x-5 py-5">
            <FaInstagram className="text-2xl text-gold" />
            <CiLinkedin className="text-2xl text-gold" />
            <CiMail className="text-2xl text-gold" />
          </div>
        </div>

        <div className="md:pl-7">
          <h2 className="text-lg text-gold md:text-3xl font-semibold mb-5 text-center md:text-left">
            Pages
          </h2>
          <ul className="flex flex-col items-center md:items-start text-lg md:text-lg space-y-2">
            <Link href='/home'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </ul>
        </div>  
      </div>
    </footer>
  );
}