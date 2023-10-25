import { ProductList } from "@/components/Cards"
import { Collections } from "@/components/Collections"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <Collections />
      <Footer />
    </>
  )
}
