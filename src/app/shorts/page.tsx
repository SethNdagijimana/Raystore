"use client"

import { ProductList } from "@/components/Cards"
import { motion } from "framer-motion"

const Shorts = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, translateY: 0 }}
        animate={{ opacity: 1, translateY: 50 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mt-28 w-[500px] mx-auto text-center "
      >
        <h1>Coming Soon</h1>
        <p>In the meanTime Explore our New Collections</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="mt-20"
      >
        <ProductList />
      </motion.div>
    </div>
  )
}

export default Shorts
