"use client"

import Image from "next/image"

interface ImageCardProps {
  image: string
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="mb-8">
      <div className="w-full cursor-pointer min-h-[500px] relative hover:transform hover:scale-110 transition-transform duration-300 ease-in-out group">
        <label
          className="absolute h-full w-full cursor-pointer top-0 left-0"
          htmlFor={`product-image-upload`}
        ></label>
        <input
          className="hidden"
          type="file"
          id={`product-image-upload`}
          accept="image/*"
        />

        <Image
          src={image}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />

        <div className="flex items-center opacity-0 justify-center absolute bottom-2 left-0 w-full bg-white/75 text-gray-800 text-center p-2 group-hover:opacity-100 group-hover:translate-y-1  transition-all ease-in-out duration-700 gap-8">
          <p className="text-sm font-medium">XS </p>
          <p className="text-sm font-medium"> S </p>
          <p className="text-sm font-medium"> M </p>
          <p className="text-sm font-medium"> XL </p>
          <p className="text-sm font-medium"> XXL</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
