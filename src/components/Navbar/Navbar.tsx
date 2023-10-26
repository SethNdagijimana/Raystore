"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { RayStore } from "../icon"
import { Button } from "../ui/button"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setHasScrolled(true)
        setIsMenuOpen(false)
      } else {
        setHasScrolled(false)
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="hidden bg-[#849591] w-full md:flex md:items-center md:justify-center md:gap-5 p-2 text-white">
        <p className="text-xs font-light">Free Delivery on Orders over 300k</p>
        <p className="text-xs font-light">
          CLick & Collect in less than 2 hours
        </p>
      </div>

      <div
        className={cn(
          "p-2 w-full flex items-center md:justify-between justify-center bg-[#EEEEE7] text-black z-50",
          hasScrolled ? "fixed w-full top-0" : "text-[#000000]"
        )}
      >
        <div className="md:hidden flex items-center justify-center p-2 transition-all duration-300 ease-in-out">
          <Button className="text-black" onClick={toggleMenu}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
              </svg>
            </span>
          </Button>
        </div>
        {isMenuOpen && (
          <ul
            className={cn(
              "flex flex-col  justify-center absolute  md:gap-4 p-8 left-20",
              hasScrolled ? "hidden" : "top-6"
            )}
          >
            <li className="cursor-pointer">Ray Store</li>
            <li className="cursor-pointer">New Collection</li>
            <li className="cursor-pointer">About us</li>
          </ul>
        )}

        <ul className="hidden md:flex flex-col md:flex-row items-center justify-center md:gap-4 md:p-8 p-4">
          <li className="cursor-pointer font-bricolage">Ray Store</li>
          <li className="cursor-pointer font-bricolage">New Collection</li>
          <li className="cursor-pointer font-bricolage">About us</li>
        </ul>

        <div className="md:p-8 flex gap-2">
          <h2 className="hidden md:flex items-center justify-center gap-2 text-[#0b1115] font-bricolage font-semibold text-xl">
            RAYSTORE
          </h2>
          <RayStore />
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 p-8">
            <li className="cursor-pointer font-bricolage">Login</li>
            <li className="cursor-pointer font-bricolage">Help</li>
            <li className="cursor-pointer font-bricolage">Cart</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
