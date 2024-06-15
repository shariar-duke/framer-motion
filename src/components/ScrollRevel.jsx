/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{once:true}}
      className="w-32 h-32 rounded-sm bg-pink-300 text-black flex justify-center items-center mt-2"
    >
      {text}
    </motion.div>
  );
};

export default function ScrollRevel() {
  const names = ["shariar", "mahamud", "Duke", "Asfaquir", "Rahman", "Fahim"];
  return (
    <div className="p-[100px] mt-[200px]">
      {names.map((n, index) => (
        <Box key={index} text={n} />
      ))}
    </div>
  );
}
