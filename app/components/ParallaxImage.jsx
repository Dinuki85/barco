"use client";
import Image from "next/image";

const ParallaxImage = ({ src, alt, className }) => {
  return (
    <div className={`relative w-full ${className}`} style={{ height: "auto" }}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={1200} // You can adjust these values to match your image size
        height={800} // Adjust based on your image's aspect ratio
        objectFit="contain" // Ensure full image is visible
        className="rounded-lg"
      />
    </div>
  );
};

export default ParallaxImage;
