"use client"

import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 md:p-8 md:w-full container p-4 gap-1">
      <ProductCard
        image="/store1.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue", " yellow"]}
        availableSizes={["XS", "S", "M", "L", "XL", "XXL"]}
      />
      <ProductCard
        image="/store2.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue", "yellow", "green"]}
        availableSizes={["S"]}
      />
      <ProductCard
        image="/store3.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue"]}
        availableSizes={["S", "M", "XL"]}
      />
      <ProductCard
        image="/store4.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        availableSizes={["S", "XXL"]}
      />
    </div>
  )
}

export default ProductList
