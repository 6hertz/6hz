"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [router]);

  return <Loading />;
}

