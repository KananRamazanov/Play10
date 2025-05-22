"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hello() {
  const groups: string[] = [
    "Kinderland",
    "Kinderland Shuvelan Mini",
    "Amburan Kids",
    "Hello Park",
    "Kid City",
    "Deniz Karting",
    "Macera Adasi",
  ];

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0); // untuk memicu ulang animasi

  const getRandomIndexes = (): number[] => {
    const indexes = new Set<number>();
    const count = Math.floor(Math.random() * 2) + 3; // 3 atau 4
    while (indexes.size < count) {
      const randomIndex = Math.floor(Math.random() * groups.length);
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setActiveIndexes(getRandomIndexes());

    const interval = setInterval(() => {
      setActiveIndexes(getRandomIndexes());
      setAnimationKey((prev) => prev + 1); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[795px] mx-auto text-center">
	<div className="relative w-[200px] h-[200px] mx-auto">
      <Image
        src="/images/arrow-down-animate.gif"
        className="mx-auto "
		fill
        alt="arrow down animate"
      />
	</div>
      <div
        key={animationKey}
        className="relative text-[#B1ACBA] 2xl:text-[34px] xl:text-[34px] lg:text-[34px] md:text-[34px] sm:text-[24px] max-sm:text-[24px] font-extrabold uppercase lg:mx-auto mx-8"
      >
        {groups.map((text, index) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            initial={{ color: "#B1ACBA" }}
            animate={{ color: activeIndexes.includes(index) ? "#6300FF" : "#B1ACBA" }}
            transition={{ duration: 0.5 }}
            className="transition-colors"
          >
            {text}
            {index < groups.length - 1 ? ", " : ""}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
