import {motion} from 'framer-motion'

export default function KeyFrame() {
  return (
    <motion.div 
     animate={{
        // css gula react a use kortse jnno camel case a hosch 
        borderRadius:["20%","20%","50%","50%","20%"],
        rotate:[0,90,180,270,0],
        transition:{duration:1}
     }}
    className='bg-blue-500 w-32 h-32 m-4'>
      
    </motion.div>
  )
}
