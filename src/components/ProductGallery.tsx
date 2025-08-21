"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg"
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Product Image */}
      <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? "border-orange-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover hover:opacity-75"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
