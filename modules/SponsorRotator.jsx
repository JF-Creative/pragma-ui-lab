import { useState, useEffect } from "react";

export function SponsorRotator({ logos, interval = 1000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, interval);

    return () => clearInterval(timer);
  }, [logos, interval]);

  return (
    <div className="sponsor-rotator">
      <img src={logos[index]} alt="Sponsor" />
    </div>
  );
}