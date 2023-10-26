import { ProductList } from "@/components/Cards"
import { Collections } from "@/components/Collections"
import { Contact } from "@/components/Contact"

import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <Collections />
      <Contact />
    </>
  )
}
