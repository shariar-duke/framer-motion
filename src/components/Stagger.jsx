/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Stagger() {
  const images = [
    {
      id: '1',
      iamgePath: '/public/photo1.jpg',
    },
    {
      id: '2',
      iamgePath: '/public/photo2.jpg',
    },
    {
      id: '3',
      iamgePath: '/public/photo3.jpg',
    },
    {
      id: '4',
      iamgePath: '/public/photo4.jpg',
    },
    {
      id: '5',
      iamgePath: '/public/photo5.jpg',
    },
  ];

  const [show, setShow] = useState(false);

  const showButton = () => {
    setShow((prev) => !prev);
  };

  // Define parent and child variants
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger delay for each child
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[22px] font-bold">Shariar's Photo</h2>
      <button
        onClick={showButton}
        className="bg-orange-500 py-1 w-[90px] rounded-md mt-[10px] text-white font-bold"
      >
        {show ? 'Hide' : 'Show'}
      </button>

      {show && (
        <motion.div
          className="mt-8 w-full flex flex-row gap-[40px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {images.map((singleImg, index) => (
            <motion.div
              key={index}
              className="h-[200px] w-[290px] bg-cover"
              style={{ backgroundImage: `url(${singleImg.iamgePath})` }}
              variants={childVariants}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
