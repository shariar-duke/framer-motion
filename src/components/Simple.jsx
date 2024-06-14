import {motion} from 'framer-motion'
export default function Simple() {
  return (
    <motion.div 
    initial={{opacity:0, scale:0.5}} 
    animate={{opacity:1,scale:1}}
    transition={{duration:0.5}}
    className='bg-red-500 border w-32 h-32 rounded-full'> 
    </motion.div>
  )
}
