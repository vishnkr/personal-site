import { useState, useEffect } from "react";

export default function Xkcd() {
  const [xkcd, setXkcd] = useState(null);

  useEffect(() => {
    async function getComic() {
      const response = await fetch("https://xkcd.com/info.0.json");
      const xkcdData = response.json();
      setXkcd(xkcdData);
    }
    getComic();
  }, [setXkcd]);

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
