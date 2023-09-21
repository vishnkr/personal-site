import { useState, useEffect } from "react";
import xkcdData from "../assets/xkcd.json";

export default function Xkcd() {
  const [xkcd, setXkcd] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * xkcdData.length);
    setXkcd(xkcdData[randomIndex]);
  }, []);

  return (
    <div className="m-2 flex flex-col">
      <p className="text-lg">
        While you're here, enjoy today's random XKCD comic:
      </p>
      {xkcd && (
        <div className="flex flex-col items-center">
          <p className="text-center">
            #{xkcd.num} - {xkcd.title}
          </p>
          <img src={xkcd.img} alt={xkcd.alt} className="h-auto max-w-full" />
        </div>
      )}
    </div>
  );
}
