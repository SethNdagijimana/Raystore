"use client"

import { Skirts } from "@/components/Skirts"
import { motion } from "framer-motion"

const Dresses = () => {
  return (
    <div className="p-8 ">
      <motion.div
        initial={{ opacity: 0, translateY: 0 }}
        animate={{ opacity: 1, translateY: 50 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="md:mt-28 mt-16 md:w-[500px] w-[250px] mx-auto text-center "
      >
        <h1 className="font-bricolage">Dresses & Skirts</h1>
        <p className="font-bricolage">Explore our New Collections</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        <Skirts />
      </motion.div>
    </div>
  )
}

export default Dresses
