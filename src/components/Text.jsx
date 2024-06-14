import { motion } from "framer-motion";
export default function Text() {
  const text = "I am Shariar Mahamud Duke . I am learning CSS Animation. ";
  const wordArray = text.split(" ")
  return <div className="text-2xl m-4 font-extrabold text-white">{

    wordArray.map((word, index)=> (
        <motion.span 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:0.5,
            delay:index/10
        }}
        key={index}>{word} {''}</motion.span>
    ))
  }</div>;
}
