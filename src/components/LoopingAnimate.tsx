"use client"
import { useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const text = "🚀 Infinite scrolling text dari kanan ke kiri ";

export default function LoopingAnimate() {
const marqueeRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const [halfWidth, setHalfWidth] = useState(0);

  const speed = 50; // px per detik

  useEffect(() => {
    if (marqueeRef.current) {
      const totalWidth = marqueeRef.current.scrollWidth;
      setHalfWidth(totalWidth / 2);
      // Start dari tengah
      x.current = -totalWidth / 4;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (marqueeRef.current && halfWidth) {
      x.current -= (delta / 1000) * speed;

      // Reset ke posisi tengah saat scroll sudah setengah
      if (-x.current >= halfWidth) {
        x.current = 0;
      }

      marqueeRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const text = "🌟 Infinite marquee center aligned | ";

	return (
    <div className="overflow-hidden w-full h-14 bg-black flex items-center relative">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {/* Duplikat konten agar tidak ada gap */}
        <span className="text-white text-xl mx-8">{text}</span>
        <span className="text-white text-xl mx-8">{text}</span>
        <span className="text-white text-xl mx-8">{text}</span>
        <span className="text-white text-xl mx-8">{text}</span>
        <span className="text-white text-xl mx-8">{text}</span>
      </div>
    </div>
	)
}
