import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ContactPage from "@/pages/contact/contact";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Contact Us | 6HZ</title>
        <meta
          name="description"
          content="Get in touch with us for architectural design, interior design, and construction services. Visit our office in Hyderabad or contact us via email or phone."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://6hz.in/contact" />
      </Head>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
