import Image from "next/image";
import Link from "next/link";
import data from "@/constants/image";
import dynamic from "next/dynamic";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Lazy load GoogleMap to improve performance
const GoogleMap = dynamic(() => import("@/components/GoogleMap/GoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 h-60 animate-pulse w-full rounded-lg"></div>
  ),
});

export default function ContactPage() {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Main Image */}
        <Image
          src={data.b1}
          alt="Office exterior view"
          width={1279}
          height={1920}
          className="rounded-lg w-full h-auto object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        />

        {/* Contact Information Section */}
        <div className="mt-14 flex flex-col lg:flex-row lg:space-x-16 border-b py-10">
          {/* Contact Heading and Social Media Icons */}
          <div className="lg:w-1/3">
            <h1 className="text-gold text-4xl font-bold mb-6">Contact Us</h1>
            <div className="flex space-x-6 mt-5">
              <Link
                href="https://instagram.com/yourprofile"
                aria-label="Visit our Instagram profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-3xl text-gold hover:text-gold-dark transition-colors"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/yourprofile"
                aria-label="Visit our LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-3xl text-gold hover:text-gold-dark transition-colors"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="mailto:rakesh@6hz.in"
                aria-label="Send us an email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  className="text-3xl text-gold hover:text-gold-dark transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 lg:w-2/3 mt-6 lg:mt-0">
            <p className="md:text-lg leading-relaxed">
            For any project or job-related inquiries, we encourage you to contact us directly via email or phone given below.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="text-gold font-semibold">ADDRESS:</span>{" "}
                Prabhat Signature, Flat No. 201, Kukatpally, Hyderabad, 500072
              </li>
              <li>
                <span className="text-gold font-semibold">OFFICE HOURS:</span>{" "}
                Monday-Friday, 10am - 6pm
              </li>
              <li>
                <span className="text-gold font-semibold">OFFICE CONTACT:</span>{" "}
                <Link
                  href="tel:+918125616597"
                  className="text-gold hover:underline"
                >
                  +91 81256 16597
                </Link>
              </li>
              <li>
                <span className="text-gold font-semibold">EMAIL :</span>{" "}
                <Link
                  href="mailto:rakesh@6hz.in"
                  className="text-gold hover:underline"
                >
                  rakesh@6hz.in
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map Section - Lazy Loaded */}
        <div className="mt-10">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}
