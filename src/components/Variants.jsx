import { motion } from "framer-motion";

// ekhne alad kor declare kore nise animation ta
const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
    },
  },
};

const childVariant = {
  initial: {
    sale: 1,
    opacity:0
  },

  animate: {
    opacity:1,
    scale: 1.8,
    transition: { duration: 3 },
  },
};

export default function Variants() {
  return (
    <div>
      <motion.div
        variants={shapeVariants} // first variant property er modhe oi animation tar nam dite hbe
        initial="initial" // tarpor initail er modhe dite hbe j shapeVariant er initial ta
        animate="animate" // tarpor animate er modhe dite hbe shapeVariant er modher animate ta
        className="bg-green-700 w-[750px] h-[270px] rounded border m-4 flex justify-center items-center"
      >
        <motion.div 
        variants={childVariant}
        // initial="initial"
        // animate="animate"
        className="bg-red-500 w-20 h-20 rounded-full border m-2"></motion.div>
      </motion.div>
    </div>
  );
}
