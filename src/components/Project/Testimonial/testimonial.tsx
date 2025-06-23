import React from "react";

type TestimonialProps = {
  prop: {
    comment: string;
  };
};

export default function Testimonial({ prop }: TestimonialProps) {
  return (
    <div className="mt-10">
      <h1 className="text-gold text-4xl font-bold mb-4">Testimonial</h1>
      <p className="text-gray-700 text-lg">{prop.comment}</p>
    </div>
  );
}
