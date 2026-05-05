"use client";

const elements = [
  // Puzzle pieces
  { type: "puzzle", color: "#8da399", size: 55, top: "8%",  left: "3%",  delay: "0s",   duration: "14s", opacity: 0.45 },
  { type: "puzzle", color: "#c86b5e", size: 42, top: "15%", left: "90%", delay: "3s",   duration: "18s", opacity: 0.40 },
  { type: "puzzle", color: "#6b7a8f", size: 64, top: "35%", left: "5%",  delay: "6s",   duration: "20s", opacity: 0.35 },
  { type: "puzzle", color: "#8da399", size: 38, top: "55%", left: "93%", delay: "1s",   duration: "16s", opacity: 0.42 },
  { type: "puzzle", color: "#c86b5e", size: 48, top: "72%", left: "2%",  delay: "9s",   duration: "19s", opacity: 0.38 },
  { type: "puzzle", color: "#6b7a8f", size: 56, top: "85%", left: "88%", delay: "4s",   duration: "22s", opacity: 0.35 },
  { type: "puzzle", color: "#8da399", size: 36, top: "45%", left: "96%", delay: "11s",  duration: "13s", opacity: 0.42 },
  { type: "puzzle", color: "#c86b5e", size: 50, top: "92%", left: "12%", delay: "7s",   duration: "17s", opacity: 0.38 },
  { type: "puzzle", color: "#8da399", size: 44, top: "20%", left: "50%", delay: "13s",  duration: "25s", opacity: 0.22 },

  // Hearts
  { type: "heart",  color: "#c86b5e", size: 38, top: "10%", left: "83%", delay: "2s",   duration: "15s", opacity: 0.50 },
  { type: "heart",  color: "#8da399", size: 28, top: "42%", left: "4%",  delay: "5s",   duration: "18s", opacity: 0.45 },
  { type: "heart",  color: "#c86b5e", size: 44, top: "65%", left: "90%", delay: "8s",   duration: "14s", opacity: 0.48 },
  { type: "heart",  color: "#8da399", size: 32, top: "80%", left: "6%",  delay: "12s",  duration: "20s", opacity: 0.45 },
  { type: "heart",  color: "#c86b5e", size: 24, top: "25%", left: "47%", delay: "16s",  duration: "28s", opacity: 0.28 },
  { type: "heart",  color: "#6b7a8f", size: 30, top: "60%", left: "50%", delay: "20s",  duration: "30s", opacity: 0.22 },

  // Dots
  { type: "dot",    color: "#8da399", size: 18, top: "5%",  left: "55%", delay: "0s",   duration: "12s", opacity: 0.50 },
  { type: "dot",    color: "#c86b5e", size: 14, top: "50%", left: "52%", delay: "10s",  duration: "16s", opacity: 0.40 },
  { type: "dot",    color: "#6b7a8f", size: 20, top: "75%", left: "46%", delay: "5s",   duration: "18s", opacity: 0.45 },
];

function PuzzlePiece({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <path d="M 10 35 L 10 10 L 35 10 C 35 10 33 0 40 0 C 47 0 45 10 45 10 L 65 10 L 65 35 C 65 35 75 33 75 40 C 75 47 65 45 65 45 L 65 65 L 45 65 C 45 65 47 75 40 75 C 33 75 35 65 35 65 L 10 65 L 10 45 C 10 45 0 47 0 40 C 0 33 10 35 10 35 Z" />
    </svg>
  );
}

function Heart({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <path d="M50 85 C50 85 5 55 5 30 C5 15 15 5 30 5 C40 5 47 10 50 15 C53 10 60 5 70 5 C85 5 95 15 95 30 C95 55 50 85 50 85Z" />
    </svg>
  );
}

function Dot({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

export default function FloatingElements() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {elements.map((el, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: el.top,
            left: el.left,
            opacity: el.opacity,
            animation: `floatDrift ${el.duration} ${el.delay} ease-in-out infinite alternate`,
          }}
        >
          {el.type === "puzzle" && <PuzzlePiece color={el.color} size={el.size} />}
          {el.type === "heart"  && <Heart  color={el.color} size={el.size} />}
          {el.type === "dot"    && <Dot    color={el.color} size={el.size} />}
        </div>
      ))}
    </div>
  );
}
