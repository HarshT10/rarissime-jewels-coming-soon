import { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const words = [
  "dreamy",
  "unique",
  "thoughtful",
  "marvelous",
  "graceful",
  "exciting",
  "special",
  "artistic",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center text-shadow-md h-[85%] mx-auto coming-soon">
      <div className="text-center text-4xl sm:text-6xl text-[#0BA4A2] uppercase">
        <h1 className="text-xl sm:text-2xl title">get ready</h1>
        <div className="sm:my-8 my-4">
          <p>something</p>
          <div className="my-5 flex justify-center items-center">
            <span>{words[currentIndex]}</span>
          </div>
          <p>is coming!</p>
        </div>
        <p className="text-xl sm:text-2xl title">follow for more</p>
        <div className="mt-5 flex justify-center items-center space-x-3">
          <InstagramIcon fontSize="large" />
          <a
            target="blank"
            href="https://www.instagram.com/rarissime_jewels/"
            className="text-xl sm:text-2xl lowercase"
          >
            rarissimejewels
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
