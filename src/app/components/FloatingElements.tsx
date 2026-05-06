"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const elements = [
  // Puzzle pieces - Sage Green, Terracotta, Slate Blue, Sand
  { type: "puzzle", color: "#8da399", size: 42, top: "12%", left: "5%",  delay: "0s",   duration: "18s", opacity: 0.6, rotate: -15 },
  { type: "puzzle", color: "#c86b5e", size: 36, top: "18%", left: "92%", delay: "3s",   duration: "22s", opacity: 0.5, rotate: 25 },
  { type: "puzzle", color: "#6b7a8f", size: 48, top: "40%", left: "8%",  delay: "6s",   duration: "25s", opacity: 0.5, rotate: 10 },
  { type: "puzzle", color: "#d4a373", size: 32, top: "60%", left: "94%", delay: "1s",   duration: "20s", opacity: 0.6, rotate: -20 },
  { type: "puzzle", color: "#8da399", size: 38, top: "78%", left: "4%",  delay: "9s",   duration: "23s", opacity: 0.5, rotate: 15 },
  { type: "puzzle", color: "#c86b5e", size: 42, top: "88%", left: "90%", delay: "4s",   duration: "26s", opacity: 0.4, rotate: -10 },
  { type: "puzzle", color: "#6b7a8f", size: 30, top: "50%", left: "96%", delay: "11s",  duration: "19s", opacity: 0.5, rotate: 30 },
  { type: "puzzle", color: "#d4a373", size: 36, top: "95%", left: "15%", delay: "7s",   duration: "21s", opacity: 0.5, rotate: -5 },
  { type: "puzzle", color: "#8da399", size: 34, top: "25%", left: "55%", delay: "13s",  duration: "28s", opacity: 0.3, rotate: 45 },

  // Hearts
  { type: "heart",  color: "#c86b5e", size: 28, top: "8%",  left: "85%", delay: "2s",   duration: "18s", opacity: 0.7, rotate: 12 },
  { type: "heart",  color: "#8da399", size: 22, top: "45%", left: "6%",  delay: "5s",   duration: "20s", opacity: 0.6, rotate: -15 },
  { type: "heart",  color: "#c86b5e", size: 32, top: "68%", left: "91%", delay: "8s",   duration: "17s", opacity: 0.7, rotate: 20 },
  { type: "heart",  color: "#8da399", size: 26, top: "82%", left: "8%",  delay: "12s",  duration: "22s", opacity: 0.6, rotate: -8 },
  { type: "heart",  color: "#c86b5e", size: 20, top: "30%", left: "52%", delay: "16s",  duration: "30s", opacity: 0.4, rotate: 15 },
  { type: "heart",  color: "#6b7a8f", size: 24, top: "65%", left: "55%", delay: "20s",  duration: "32s", opacity: 0.3, rotate: -20 },

  // Dots
  { type: "dot",    color: "#8da399", size: 14, top: "5%",  left: "60%", delay: "0s",   duration: "15s", opacity: 0.7 },
  { type: "dot",    color: "#c86b5e", size: 12, top: "55%", left: "58%", delay: "10s",  duration: "20s", opacity: 0.6 },
  { type: "dot",    color: "#6b7a8f", size: 16, top: "78%", left: "52%", delay: "5s",   duration: "22s", opacity: 0.6 },
];

function PuzzlePiece({ color, size }: { color: string; size: number }) {
  // Professional rounded puzzle piece path
  const roundedPuzzlePath = "M82.5,44.5c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5S86.6,44.5,82.5,44.5z M75,41.2V26c0-2.2-1.8-4-4-4H55.8c0-4.1-3.4-7.5-7.5-7.5s-7.5,3.4-7.5,7.5H25c-2.2,0-4,1.8-4,4v15.2c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5V74c0,2.2,1.8,4,4,4h15.8c0,4.1,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5H71c2.2,0,4-1.8,4-4V58.8c4.1,0,7.5-3.4,7.5-7.5S79.1,41.2,75,41.2z";

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <path d={roundedPuzzlePath} />
    </svg>
  );
}

function Heart({ color, size }: { color: string; size: number }) {
  // More organic, rounded heart
  const roundedHeartPath = "M50,88.9c-1.1,0-2.2-0.4-3-1.3C33.2,74.5,23.3,64.8,16.5,56.1c-7.3-9.3-11-18.4-11-26.9c0-14.7,11.9-26.6,26.6-26.6 c7.1,0,13.8,2.8,18.8,7.9c2.7,2.8,4.9,6.1,6.6,9.8c1.7-3.7,3.9-6.9,6.6-9.8c5-5.1,11.7-7.9,18.8-7.9c14.7,0,26.6,11.9,26.6,26.6 c0,8.5-3.7,17.6-11,26.9c-6.8,8.6-16.7,18.4-30.5,31.5C52.2,88.5,51.1,88.9,50,88.9z";
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <path d={roundedHeartPath} />
    </svg>
  );
}

function Dot({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <circle cx="50" cy="50" r="45" />
    </svg>
  );
}

function FloatingItem({ el }: { el: any }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 80, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 25 });
  const rotate = useSpring(el.rotate || 0, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      const distThreshold = 300; 
      const dx = e.clientX - itemCenterX;
      const dy = e.clientY - itemCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < distThreshold) {
        const force = Math.pow((distThreshold - distance) / distThreshold, 1.8);
        const angle = Math.atan2(dy, dx);
        
        mouseX.set(Math.cos(angle) * -150 * force);
        mouseY.set(Math.sin(angle) * -150 * force);
        rotate.set((el.rotate || 0) + Math.cos(angle) * 25 * force);
      } else {
        mouseX.set(0);
        mouseY.set(0);
        rotate.set(el.rotate || 0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, rotate]); // Removed el.rotate to keep dependency array size constant

  return (
    <motion.div
      ref={itemRef}
      style={{
        position: "absolute",
        top: el.top,
        left: el.left,
        x: mouseX,
        y: mouseY,
        rotate: rotate,
        opacity: el.opacity,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <div 
        style={{ 
          animation: `floatDrift ${el.duration} ${el.delay} ease-in-out infinite alternate`,
          filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))"
        }}
      >
        {el.type === "puzzle" && <PuzzlePiece color={el.color} size={el.size} />}
        {el.type === "heart"  && <Heart  color={el.color} size={el.size} />}
        {el.type === "dot"    && <Dot    color={el.color} size={el.size} />}
      </div>
    </motion.div>
  );
}

export default function FloatingElements() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none", // Container shouldn't block clicks
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {elements.map((el, i) => (
        <FloatingItem key={i} el={el} />
      ))}
    </div>
  );
}
