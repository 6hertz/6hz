import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AboutPage from "@/pages/about/about";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>6Hz | About</title>
      </Head>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
}
