"use client";
import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full mt-5">
      <iframe
        className="w-full h-[250px] rounded-lg "
        src="https://maps.google.com/maps?q=17.49707436691234,78.40154431240792&hl=en&z=15&output=embed"
        title="Google Map Location"
        aria-label="Google Map showing office location"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
