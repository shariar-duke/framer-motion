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

export default function Variants() {
  return (
    <div>
      <motion.div
      variants={shapeVariants} // first variant property er modhe oi animation tar nam dite hbe 
      initial="initial" // tarpor initail er modhe dite hbe j shapeVariant er initial ta 
      animate="animate"  // tarpor animate er modhe dite hbe shapeVariant er modher animate ta 
      className="bg-green-700 w-[450px] h-[170px] rounded border m-4 flex justify-center items-center">

        {/* <motion.div className="bg-red-500 w-20 h-20 rounded-full border m-2"></motion.div> */}
      </motion.div>
    </div>
  );
}
