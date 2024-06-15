import { motion } from "framer-motion";
export default function TransitionType() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Learning Animation</h1>

        <p>
          {" "}
          We love Animation. We are enjoying it a lot. Framer motion is great
        </p>
      </motion.div>

    </>
  );
}
