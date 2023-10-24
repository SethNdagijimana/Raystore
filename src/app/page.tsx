import { Cards } from "@/components/Cards"
import { Collections } from "@/components/Collections"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Collections />
      <Footer />
    </div>
  )
}
