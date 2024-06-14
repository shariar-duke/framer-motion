import { motion } from "framer-motion";
export default function Button() {
  return (
    <div className="flex flex-col gap-8">
      <motion.button
        className="bg-blue-500 text-white border-none p-2 text-[20px] rounded-md mt-4"
        whileTap={{
          scale: 0.5,
        }}
        whileHover={{
          scale: 1.4,
        }}
      >
        Click Me
      </motion.button>

   
        {" "}
        <motion.button
          className="bg-blue-500 text-white border-none p-2 text-[20px] rounded-md mt-4"
          whileTap={{
            scale: 0.5,
          }}
          whileHover={{
            scale: 1.1,
            transition:{yoyo:Infinity}
          }}
        >
          Submit
        </motion.button>
     
    </div>
  );
}
