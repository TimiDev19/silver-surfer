"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
  "/images/img6.JPG",
  "/images/img7.JPG",
  "/images/img8.JPG",
];

const InfiniteCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust for speed
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="w-[150px] h-[200px] flex-shrink-0 overflow-hidden relative ">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg border border-white"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
