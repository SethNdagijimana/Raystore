"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav>
      <div className="bg-[#849591] w-full flex items-center justify-center gap-5 p-2 text-white">
        <p className="text-xs font-light">Free Delivery on Orders over 300k</p>
        <p className="text-xs font-light">
          CLick & Collect in less than 2 hours
        </p>
      </div>

      <div
        className={cn(
          "p-2 w-full flex items-center justify-between bg-[#EEEEE7] text-black z-50",
          hasScrolled ? "fixed w-full top-0" : "text-[#040303dd]"
        )}
      >
        <div className="flex items-center justify-center gap-4 p-8">
          <h6 className="cursor-pointer">E-shop</h6>
          <h6 className="cursor-pointer">New Collection</h6>
          <h6 className="cursor-pointer">About us</h6>
        </div>

        <div className="p-8">
          <p className="text-[#0b1115] font-bricolage font-semibold text-xl">
            LAFAURIE
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 p-8">
          <h6 className="cursor-pointer">Login</h6>
          <h6 className="cursor-pointer">Help</h6>
          <h6 className="cursor-pointer">Cart</h6>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
