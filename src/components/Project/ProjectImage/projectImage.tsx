'use client';

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ProjectImageProps = {
  prop: (string | StaticImageData)[];
};

export default function ProjectImage({ prop }: ProjectImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {prop.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-48 md:h-56 lg:h-64 border rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={typeof image === "string" ? image : image.src}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
        {selectedImage && (
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
            <Image
              src={typeof selectedImage === "string" ? selectedImage : selectedImage.src}
              alt="Selected Project Image"
              layout="fill"
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

