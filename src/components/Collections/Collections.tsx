"use client"

import Image from "next/image"
const Collections = () => {
  return (
    <div className="grid grid-cols-2 p-8 gap-3">
      <div className="h-[900px] relative">
        <Image
          src="/store9.webp"
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-8 flex items-center justify-center left-0 right-0 p-[18px]">
          <p className=" text-center font-bricolage text-white text-3xl">
            OUR PAINTER&apos;S JACKETS
          </p>
        </div>
      </div>

      <div className="h-[900px] relative">
        <Image
          src="/store12.webp"
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-8 flex items-center justify-center left-0 right-0 p-[18px]">
          <p className=" text-center font-bricolage text-white text-3xl">
            New Collection
          </p>
        </div>
      </div>
    </div>
  )
}

export default Collections
