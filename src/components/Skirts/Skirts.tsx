"use client"

import { ProductCard } from "../Cards"

const Skirts = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:mt-20 mt-16 gap-4">
      <ProductCard
        image="/11.jpeg"
        name="saree"
        description="Blazer JACKETS"
        price={40000}
        colors={["black", "red", "beige"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/14.jpeg"
        name="Wrap Dress"
        description="Blazer JACKETS"
        price={40000}
        availableSizes={["L", "XL"]}
      />

      <ProductCard
        image="/s1.jpeg"
        name="Satin"
        description="Satin skirt"
        price={30000}
        colors={["black", "red"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s2.jpeg"
        name="Satin"
        description="Satin Neutral Leopard"
        price={40000}
        colors={["black", "brown"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s3.jpeg"
        name="Satin"
        description="silk satin"
        price={30000}
        colors={["gold", "grey", "beige"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s4.jpeg"
        name="Satin"
        description="silk satin"
        price={40000}
        colors={["green", "black"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s5.jpeg"
        name="Satin"
        description="Leopard ruffle wrap"
        price={40000}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s6.jpeg"
        name="Satin"
        description="silk satin"
        price={40000}
        colors={["black", "red"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s7.jpeg"
        name="Satin"
        description="Satin Neutral Leopard"
        price={40000}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s8.jpeg"
        name="Satin"
        description="Silk"
        price={40000}
        colors={["red"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s9.jpeg"
        name="Satin"
        description="Satin snake print midi skirt"
        price={40000}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s10.jpeg"
        name="Satin"
        description="silk"
        price={40000}
        colors={["orange"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s11.jpeg"
        name="Satin"
        description="Silk midi skirt"
        price={40000}
        colors={["coral"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s12.jpeg"
        name="Satin"
        description="silk"
        price={40000}
        colors={["beige", "olive"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s13.jpeg"
        name="Satin"
        description="silk"
        price={40000}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s14.jpeg"
        name="Satin"
        description="Leopard ruffle wrap"
        price={40000}
        colors={["indigo"]}
        availableSizes={["L", "XL", "XXL"]}
      />

      <ProductCard
        image="/s15.jpeg"
        name="Satin"
        description="Silk"
        price={40000}
        colors={["olive", "green"]}
        availableSizes={["L", "XL", "XXL"]}
      />
    </div>
  )
}

export default Skirts
