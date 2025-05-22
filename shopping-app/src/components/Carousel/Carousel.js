// components/Carousel/Carousel.js
import { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <img src={images[current]} alt={`Slide ${current}`} />
    </div>
  );
}