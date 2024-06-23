import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

interface SwipeButtonProps {
  path: string;
}

const SwipeButton: React.FC <SwipeButtonProps> = ({ path }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); //
  const [currentX, setCurrentX] = useState(0);
  const router = useRouter();

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const progress = (currentX - startX) / rect.width;

        if (progress >= 0.8) {
          router.push(path);
        }
      }
      setIsDragging(false);
      buttonRef.current?.style.setProperty("--progress", "0%");
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setCurrentX(event.clientX);
      const button = buttonRef.current;
      if (button) {
        const rect = button.getBoundingClientRect();
        const progress = (event.clientX - startX) / rect.width;
        button.style.setProperty(
          "--progress",
          `${Math.min(progress * 100, 100)}%`
        );
      }
    }
  };

  return (
    <div
      ref={buttonRef}
      className="relative bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full shadow-lg transition duration-300 overflow-hidden flex items-center"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsDragging(false);
        buttonRef.current?.style.setProperty("--progress", "0%");
      }}
    >
      <span
        className="absolute top-0 left-0 h-full bg-green-700"
        style={{ width: "var(--progress, 0%)" }}
      ></span>
      <div
        className="shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-gray-200 transition duration-300"
        style={{ left: "var(--progress, 0%)" }}
      ></div>
      <span
        className="mx-4 px-2"
        style={{ opacity: `calc(1 - var(--progress, 0%) / 100)` }}
      >
        Swipe to Fetch
      </span>
    </div>
  );
};

export default SwipeButton;
