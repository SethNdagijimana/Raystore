"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <nav
      ref={navbarRef}
      className={cn(
        "p-8 w-full flex items-center justify-between fixed z-50",
        hasScrolled ? "bg-[#EEEEE7] text-black" : "bg-white"
      )}
    >
      <div className="flex items-center justify-center gap-4">
        <h6 className="cursor-pointer">E-shop</h6>
        <h6 className="cursor-pointer">New Collection</h6>
        <h6 className="cursor-pointer">About us</h6>
      </div>

      <div>
        <p className="text-[#0b1115] font-bricolage">LAFAURIE</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <h6 className="cursor-pointer">Login</h6>
        <h6 className="cursor-pointer">Help</h6>
        <h6 className="cursor-pointer">Cart</h6>
      </div>
    </nav>
  )
}

export default Navbar
