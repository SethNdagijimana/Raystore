"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RayStore } from "../icon"
import { Button } from "../ui/button"

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setisLoading] = useState<boolean>(false)

  const [isToggleOpen, setIsToggleOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSheetOpenChange = (open: boolean) => {
    if (isLoading) return null

    if (!open) {
      setIsMenuOpen(!isMenuOpen)
    }

    setIsMenuOpen(!isMenuOpen)
  }

  const handleToggleOpen = (open: boolean) => {
    if (isLoading) return null

    if (!open) {
      setIsToggleOpen(!isToggleOpen)
    }
    setIsToggleOpen(!isToggleOpen)
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
      <div className="bg-[#849591] w-full flex items-center justify-center md:gap-5 p-1 gap-3 text-white">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="md:text-base text-[10px] font-light"
        >
          Free Delivery on Orders over 300k
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 3 }}
          className="md:text-base text-[10px] font-light"
        >
          CLick & Collect in less than 2 hours
        </motion.p>
      </div>

      <div
        className={cn(
          "px-4 w-full flex items-center md:justify-between justify-center bg-[#EEEEE7] text-black z-50",
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

        <Sheet
          open={isMenuOpen}
          onOpenChange={(open) => {
            handleSheetOpenChange(open)
          }}
        >
          <SheetContent
            className="overflow-y-auto h-[400px] w-[200px] sm:w-[540px] bg-white/80"
            side={"left"}
          >
            <ul
              className={cn(
                "bg-transparent top-14 rounded-[8px] absolute gap-2 p-4",
                hasScrolled ? "transition-all duration-300 ease-in-out" : ""
              )}
              style={{ left: isMenuOpen ? 0 : "-100%" }}
            >
              <Link href="/" onClick={closeMenu}>
                <li className="cursor-pointer font-bricolage">Ray Store</li>
              </Link>

              <Link href="/newCollection" onClick={closeMenu}>
                {" "}
                <li className="cursor-pointer font-bricolage">
                  New Collection
                </li>
              </Link>

              <Link href="/" onClick={closeMenu}>
                <li className="cursor-pointer">About us</li>
              </Link>
            </ul>
          </SheetContent>
        </Sheet>

        <Sheet
          open={isToggleOpen}
          onOpenChange={(open) => handleToggleOpen(open)}
        >
          <SheetContent
            className="overflow-y-auto h-[400px] w-[200px] sm:w-[540px] bg-white/80"
            side={"right"}
          >
            <ul
              className={cn(
                "top-14 absolute  gap-2 p-4",
                hasScrolled ? "transition-all duration-300 ease-in-out" : ""
              )}
              style={{ left: isToggleOpen ? 0 : "-100%" }}
            >
              <Link href="/shorts" onClick={closeMenu}>
                <li className="cursor-pointer font-bricolage">Shorts</li>
              </Link>

              <Link href="/dresses" onClick={closeMenu}>
                <li className="cursor-pointer font-bricolage">Dresses</li>
              </Link>

              <Link href="/jackets" onClick={closeMenu}>
                <li className="cursor-pointer">Jackets</li>
              </Link>
            </ul>
          </SheetContent>
        </Sheet>

        <ul className="hidden md:flex flex-col md:flex-row items-center justify-center md:gap-4 md:px-4 p-2">
          <Link href="/">
            <li className="cursor-pointer font-bricolage">Ray Store</li>
          </Link>

          <Link href="/newCollection">
            <li className="cursor-pointer font-bricolage">New Collection</li>
          </Link>
          <li className="cursor-pointer font-bricolage">About us</li>
        </ul>

        <div className="hidden md:flex gap-2">
          <h2 className="hidden md:flex items-center justify-center gap-2 text-[#0b1115] font-bricolage font-semibold text-xl">
            RAYSTORE
          </h2>
          <RayStore />
        </div>

        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 px-4">
            <Link href="/shorts">
              <li className="cursor-pointer font-bricolage">Shorts</li>
            </Link>

            <Link href="/dresses">
              <li className="cursor-pointer font-bricolage">Dresses</li>
            </Link>

            <Link href="jackets">
              <li className="cursor-pointer font-bricolage">Jackets</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
