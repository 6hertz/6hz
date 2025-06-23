import data from "@/constants/image";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={data.Logo}
        alt="6Hz Logo"
        height={200}
        width={200}
        className="object-cover animate-pulse"
      />
    </div>
  );
}
