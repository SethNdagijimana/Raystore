"use client"

import Image from "next/image"

type Size = "XS" | "S" | " M" | "L" | "XL" | "XXL"

// const sizes = ["XS", "S", " M", "L", "XL", "XXL"]

interface ProductCardProps {
  image: string
  name?: string
  description?: string
  colors?: string[]
  availableSizes: Size[]
  price?: number
}

const ProductCard = ({
  image,
  name,
  description,
  colors,
  availableSizes,
  price
}: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-between cursor-pointer relative group min-h-[700px] w-full">
      <div className="flex-1 relative">
        <Image
          src={image}
          alt="image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>

      <div className=" w-full">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold font-bricolage">{name}</p>
          <p className="text-[10px] font-bold font-bricolage">RWF{price}</p>
        </div>
        <p className="text-[10px] font-bold font-bricolage">{description}</p>

        {colors && colors.length > 0 && (
          <p className="text-[10px] font-bold font-bricolage">
            Available in {colors.length} colors
          </p>
        )}
      </div>

      <div className="gap-4 bottom-28 bg-white p-1 absolute flex items-center justify-evenly left-12 right-0 w-56 opacity-0 group-hover:opacity-100 group-transition-all duration-300 ease-in-out">
        {/* <p className="text-sm font-medium">XS</p>
        <p className="text-sm font-medium">S</p>
        <p className="text-sm font-medium">M</p>
        <p className="text-sm font-medium">L</p>
        <p className="text-sm font-medium">XL</p>
        <p className="text-sm font-medium">XXL</p> */}

        {/* {availableSizes?.map((sizes, i))} */}
        {/* <p className="flex items-center justify-evenly text-sm">
          {availableSizes}
        </p> */}
      </div>
    </div>
  )
}

export default ProductCard
