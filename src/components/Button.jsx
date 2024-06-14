import {motion} from 'framer-motion'
export default function Button() {
  return (
    <div>
      <motion.button
       className='bg-blue-500 text-white border-none p-2 text-[20px] rounded-md'
       whileTap={{
        scale:0.5
      }}
      whileHover={{
        scale:1.1
      }}
      >Click Me</motion.button>
    </div>
  )
}
