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
      <div className="relative md:h-[500px] h-[200px]">
        <Image
          src={image}
          alt="image"
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </div>

      <div className="flex justify-between group">
        <div className="[&_p]:leading-4 md:[&_p]:font-medium">
          <p className="md:text-sm text-[10px] font-bricolage uppercase">
            {name}
          </p>
          <p className="md:text-[10px] text-[8px] font-bricolage">
            {description}
          </p>

          {colors && colors.length > 0 && (
            <p className="text-[10px] font-bricolage md:group-hover:opacity-0">
              Available in {colors.length} colors
            </p>
          )}
        </div>

        <p className="md:text-[10px] text-[8px] md:font-bold font-bricolage leading-4">
          {price} RWF
        </p>
      </div>

      <div className="hidden gap-2 bottom-16 bg-white p-1 absolute md:flex items-center justify-center left-12 right-0 w-56 opacity-0 group-hover:opacity-100 group-transition-all duration-300 ease-in-out">
        {sizes.map((size, index) => (
          <p
            className={cn(
              "hidden md:flex items-center justify-evenly text-sm",
              availableSizes?.includes(size as Size)
                ? "text-black font-light"
                : "text-[#d2d2d2]"
            )}
            key={index}
          >
            {size}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
