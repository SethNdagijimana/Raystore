import { ProductList } from "@/components/Cards"
import { Collections } from "@/components/Collections"
import { Contact } from "@/components/Contact"
import { Hero } from "@/components/Hero"

const NewCollection = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Collections />
      <Contact />
    </div>
  )
}

export default NewCollection
