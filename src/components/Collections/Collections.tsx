"use client"

import Image from "next/image"
const Collections = () => {
  return (
    <div className="grid grid-cols-2 p-8 gap-3">
      <div className=" min-h-[800px]">
        <Image
          src="/store9.webp"
          alt="image"
          width={700}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="min-h-[800px]">
        <Image
          src="/store12.webp"
          alt="image"
          width={700}
          height={500}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Collections
