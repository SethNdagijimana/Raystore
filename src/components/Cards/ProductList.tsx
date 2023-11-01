"use client"

import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 md:p-8 md:w-full container p-4 gap-1">
      <ProductCard
        image="/1.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["blue", " yellow"]}
        availableSizes={["XS", "S", "M", "L", "XL", "XXL"]}
      />

      <ProductCard
        image="/2.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["blue", "yellow", "green"]}
        availableSizes={["XL"]}
      />

      <ProductCard
        image="/3.jpeg"
        name="Two-Button - Straight short"
        description="Blazer JACKETS"
        price={40000}
        colors={["blue"]}
        availableSizes={["S", "M", "XL"]}
      />

      <ProductCard
        image="/4.jpeg"
        name="Two-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["red", "black", "grey"]}
        availableSizes={["XL", "XXL"]}
      />

      <ProductCard
        image="/5.jpeg"
        name="Two-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        availableSizes={["M", "XXL"]}
      />

      <ProductCard
        image="/6.jpeg"
        name="bolero"
        description="Blazer JACKETS"
        price={40000}
        colors={["maroon", "black"]}
        availableSizes={["S", "L"]}
      />

      <ProductCard
        image="/7.jpeg"
        name="One-Button - Straight Short"
        description="Blazer JACKETS"
        price={40000}
        colors={["gold", "black"]}
        availableSizes={["M", "XXL"]}
      />

      <ProductCard
        image="/8.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["grey", "khaki", "beige"]}
        availableSizes={["S", "L"]}
      />

      <ProductCard
        image="/9.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["black", "red", "yellow"]}
        availableSizes={["M", "XXL"]}
      />

      <ProductCard
        image="/10.jpeg"
        name="Two-Button - Straight short"
        description="Blazer JACKETS"
        price={40000}
        colors={["red", "black", "pink"]}
        availableSizes={["L", "XXL"]}
      />

      <ProductCard
        image="/11.jpeg"
        name="saree"
        description="Blazer JACKETS"
        price={40000}
        colors={["black", "red", "beige"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/12.jpeg"
        name="double-breasted"
        description="Blazer JACKETS"
        price={40000}
        colors={["beige", "grey", "black", "red"]}
        availableSizes={["M", "L", "XL", "XXL"]}
      />

      <ProductCard
        image="/13.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["white", "black"]}
        availableSizes={["M", "L"]}
      />

      <ProductCard
        image="/14.jpeg"
        name="Wrap Dress"
        description="Blazer JACKETS"
        price={40000}
        availableSizes={["L", "XL"]}
      />

      <ProductCard
        image="/15.jpeg"
        name="One-Button - Straight Long"
        description="Blazer JACKETS"
        price={40000}
        colors={["pink", "white"]}
        availableSizes={["M", "L", "XXL"]}
      />

      <ProductCard
        image="/16.jpeg"
        name="One-Button - Straight Short"
        description="Blazer JACKETS"
        price={40000}
        availableSizes={["XL", "XXL"]}
      />
    </div>
  )
}

export default ProductList
