import Image from "next/image"

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 h-[800px] px-8 z-50 py-[6px] md:mt-0 mt-[110px]">
      <div className="flex items-center justify-center">
        <div className="text-center space-y-2 w-full">
          <h1 className="font-bricolage text-[#040404dd] font-medium">
            OUR Collections
          </h1>
          <p className="max-w-[400px] mx-auto text-center md:text-sm text-xs font-medium font-bricolage">
            Since 2016, we&apos;ve been offering it every year in a wide range
            of materials and colors. Discover the new exclusive colors of this
            Fall-Winter 2023 collection.
          </p>
        </div>
      </div>

      <div className="relative md:h-full h-[600px]">
        <Image src="/7.jpeg" alt="image" fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  )
}

export default Hero
