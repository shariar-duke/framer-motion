/* eslint-disable react/no-unescaped-entities */
import { useAnimate, stagger } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Stagger() {
  const images = [
    {
      id: "1",
      iamgePath: "/public/photo1.jpg",
    },
    {
      id: "2",
      iamgePath: "/public/photo2.jpg",
    },
    {
      id: "3",
      iamgePath: "/public/photo3.jpg",
    },
    {
      id: "4",
      iamgePath: "/public/photo4.jpg",
    },
  ];

  const [show, setShow] = useState(true);
  const showButton = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[22px] font-bold">Shariar's Photo</h2>
      <button
        onClick={showButton}
        className="bg-orange-500 py-1 w-[90px] rounded-md mt-[10px] text-white font-bold"
      >
        Show
      </button>

      {show && (
        <div className="mt-8 w-full flex flex-row gap-[40px]">
          {images.map((singleImg, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index / 5,
              }}
              key={index}
              className="h-[200px] w-[290px] bg-cover "
              style={{ backgroundImage: `url(${singleImg.iamgePath})` }}
            ></motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
