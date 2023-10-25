"use client"

import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className="grid grid-cols-4 gap-2 p-8 w-full">
      <ProductCard
        image="/store1.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue", "yellow"]}
        availableSizes={["S", "XXL"]}
      />
      <ProductCard
        image="/store2.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue", "yellow", "green"]}
        availableSizes={["S", "XXL"]}
      />
      <ProductCard
        image="/store3.webp"
        name="Italian Moleskine - Straight cut"
        description="CLAUDEL PAINTER'S JACKET"
        price={200}
        colors={["blue"]}
        availableSizes={["S", "XXL"]}
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
