"use client"

import Image from "next/image"
const Collections = () => {
  return (
    <div className="grid md:grid-cols-2 p-8 gap-3">
      <div className="md:h-[900px] h-[500px] relative">
        <Image src="/11.jpeg" alt="image" fill style={{ objectFit: "cover" }} />
        <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
          <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
            OUR Dresses
          </p>
        </div>
      </div>

      <div className="md:h-[900px] h-[500px] relative">
        <Image src="/14.jpeg" alt="image" fill style={{ objectFit: "cover" }} />
        <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
          <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
            New Collection
          </p>
        </div>
      </div>
    </div>
  )
}

export default Collections
