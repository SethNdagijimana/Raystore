"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL"

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

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
  // TODO transition scale && available colors

  return (
    <div className="cursor-pointer relative group">
      <div className="relative h-[500px]">
        <Image
          src={image}
          alt="image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>

      <div className="flex justify-between">
        <div className="[&_p]:leading-4 [&_p]:font-medium">
          <p className="text-sm font-bricolage uppercase">{name}</p>
          <p className="text-[10px] font-bricolage">{description}</p>

          {colors && colors.length > 0 && (
            <p className="text-[10px] font-bricolage">
              Available in {colors.length} colors
            </p>
          )}
        </div>

        <p className="text-[10px] font-bold font-bricolage">{price} RWF</p>
      </div>

      <div className="gap-2 bottom-16 bg-white p-1 absolute flex items-center justify-center left-12 right-0 w-56 opacity-0 group-hover:opacity-100 group-transition-all duration-300 ease-in-out">
        {sizes.map((size, index) => (
          <p
            className={cn(
              "flex items-center justify-evenly text-sm",
              availableSizes?.includes(size as Size)
                ? "text-black font-light"
                : "text-[#d2d2d2]"
            )}
            key={index}
          >
            {size}
          </p>
        ))}

        {/* is there any other way */}
      </div>
    </div>
  )
}

export default ProductCard
