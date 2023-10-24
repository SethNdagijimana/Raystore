import Image from "next/image"

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-8">
      <div className="text-center mt-96 max-h-[400px] space-y-2 w-full">
        <h1 className="font-bricolage text-[#040404dd] font-medium">
          OUR PAINTER&apos;S JACKETS
        </h1>
        <p className="max-w-[400px] mx-auto text-center text-sm font-medium font-bricolage">
          Since 1991, we&apos;ve been offering it every year in a wide range of
          materials and colors. Discover the new exclusive colors of this
          Fall-Winter 2023 collection.
        </p>
      </div>

      <div className="mt-16">
        <Image
          src="/hero.webp"
          alt="image"
          width={700}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default Hero
