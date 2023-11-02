"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RayStore } from "../icon"
import { Button } from "../ui/button"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isToggleOpen, setIsToggleOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggle = () => {
    setIsToggleOpen(!isToggleOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsToggleOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setHasScrolled(true)
        setIsMenuOpen(false)
        setIsToggleOpen(false)
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
      <div className="hidden bg-[#849591] w-full md:flex md:items-center md:justify-center md:gap-5 p-1 text-white">
        <p className="text-xs font-light">Free Delivery on Orders over 300k</p>
        <p className="text-xs font-light">
          CLick & Collect in less than 2 hours
        </p>
      </div>

      <div
        className={cn(
          "px-4 w-full flex items-center md:justify-between justify-center bg-[#EEEEE7]  text-black z-50",
          hasScrolled ? "fixed top-0 " : "text-[#000000]"
        )}
      >
        {/* mobile */}

        <div className="md:hidden flex items-center justify-between w-full p-2 transition-all duration-300 ease-in-out">
          <Button className="text-black" onClick={toggleMenu}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
              </svg>
            </span>
          </Button>

          <RayStore />

          <Button className="text-black" onClick={toggle}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z" />
              </svg>
            </span>
          </Button>
        </div>

        {isMenuOpen && (
          <ul
            className={cn(
              "bg-[#EEEEE7] top-14 rounded-[8px] absolute gap-2 p-4",
              hasScrolled ? "transition-all duration-300 ease-in-out" : ""
            )}
            style={{ left: isMenuOpen ? 0 : "-100%" }}
          >
            <Link href="/" onClick={closeMenu}>
              <li className="cursor-pointer font-bricolage">Ray Store</li>
            </Link>

            <Link href="/newCollection" onClick={closeMenu}>
              {" "}
              <li className="cursor-pointer font-bricolage">New Collection</li>
            </Link>

            <Link href="/" onClick={closeMenu}>
              <li className="cursor-pointer">About us</li>
            </Link>
          </ul>
        )}

        {isToggleOpen && (
          <ul
            className={cn(
              "bg-[#EEEEE7] top-14 rounded-[8px] absolute gap-2 p-4",
              hasScrolled ? "transition-all duration-300 ease-in-out" : ""
            )}
            style={{ right: isToggleOpen ? 0 : "-100%" }}
          >
            <Link href="/" onClick={closeMenu}>
              <li className="cursor-pointer font-bricolage">Shorts</li>
            </Link>

            <Link href="/newCollection" onClick={closeMenu}>
              {" "}
              <li className="cursor-pointer font-bricolage">Dresses</li>
            </Link>

            <Link href="/" onClick={closeMenu}>
              <li className="cursor-pointer">Jackets</li>
            </Link>
          </ul>
        )}

        <ul className="hidden md:flex flex-col md:flex-row items-center justify-center md:gap-4 md:px-4 p-2">
          <Link href="/">
            <li className="cursor-pointer font-bricolage">Ray Store</li>
          </Link>

          <Link href="/newCollection">
            {" "}
            <li className="cursor-pointer font-bricolage">New Collection</li>
          </Link>
          <li className="cursor-pointer font-bricolage">About us</li>
        </ul>

        <div className="hidden md:flex gap-2">
          <h2 className="hidden md:flex items-center mdjustify-center gap-2 text-[#0b1115] font-bricolage font-semibold text-xl">
            RAYSTORE
          </h2>
          <RayStore />
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 px-4">
            <li className="cursor-pointer font-bricolage">Shorts</li>
            <li className="cursor-pointer font-bricolage">Dresses</li>
            <li className="cursor-pointer font-bricolage">Jackets</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
