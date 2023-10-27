"use client"

import Image from "next/image"
import { ProductCard } from "../Cards"
import { Contact } from "../Contact"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <section>
      <div className="h-[800px] w-full relative overflow-hidden">
        <Image
          src="/bg.webp"
          layout="fill"
          alt="background-image"
          objectFit="cover"
        />
      </div>

      <div className="grid grid-cols-3 p-8 gap-3 ">
        <div className=" relative h-[700px]">
          <Image
            src="/store2.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/store1.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/store3.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/store4.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/store5.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/store6.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute md:bottom-8 bottom-0 flex items-center justify-center left-0 right-0 p-[18px]">
            <p className=" text-center font-bricolage text-white md:text-3xl text-xl">
              OUR PAINTER&apos;S JACKETS
            </p>
          </div>
        </div>

        <div className="col-span-1 ">
          <h2 className="text-black font-bricolage text-[32px] text-center mt-56">
            PAINTER&apos;S JACKETS
          </h2>
          <p className="w-[400px] text-center mx-auto mt-4 font-light text-sm">
            Available in all shapes and sizes for over 30 years, the
            painter&apos;s jacket has become an essential part of the Lafaurie
            wardrobe. Discover our new exclusive, modern and original colors!
          </p>
        </div>

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
          colors={["blue", " yellow", "green"]}
          availableSizes={["XS", "S", "M", "L"]}
        />

        <div className="row-span-2 relative min-w-[300px]">
          <Image
            src="/store6.webp"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <ProductCard
          image="/store2.webp"
          name="Italian Moleskine - Straight cut"
          description="CLAUDEL PAINTER'S JACKET"
          price={200}
          colors={["blue", " yellow", "green"]}
          availableSizes={[]}
        />

        <ProductCard
          image="/store2.webp"
          name="Italian Moleskine - Straight cut"
          description="CLAUDEL PAINTER'S JACKET"
          price={200}
          colors={["blue", " yellow", "green"]}
          availableSizes={["XS", "S", "M", "L"]}
        />

        <ProductCard
          image="/store2.webp"
          name="Italian Moleskine - Straight cut"
          description="CLAUDEL PAINTER'S JACKET"
          price={200}
          colors={["blue", " yellow", "green"]}
          availableSizes={["XS", "S", "M", "L"]}
        />

        <ProductCard
          image="/store2.webp"
          name="Italian Moleskine - Straight cut"
          description="CLAUDEL PAINTER'S JACKET"
          price={200}
          colors={["blue", " yellow", "green"]}
          availableSizes={["XS", "S", "M", "L"]}
        />
      </div>

      <div className="pt-[45px]">
        <p className=" text-black font-bricolage text-8xl text-center">
          A FAMILY STORY
        </p>
        <p className=" text-black font-bricolage text-7xl text-center">
          Since 2016
        </p>

        <p className="text-center w-[530px] mx-auto mt-3 font-light text-sm font-bricolage">
          Founded in Kigali in 2016, RayStore dresses independent Women with
          casual elegance
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 border border-gray-400 border-b-transparent mt-8">
        <div className="p-8">
          <h2 className="w-[200px] mx-auto pt-8 font-bricolage text-2xl">
            JOIN THE RayStore FAMILY!
          </h2>
          <p className="w-[380px] mx-auto font-light text-sm mt-6">
            Subscribe to our newsletter to receive our news and get exclusive
            advantage
          </p>

          <div className="relative w-[400px] h-[270px] mx-auto mt-[40px]">
            <div className="-left-[30px] -right-[30px] h-[200px] p-[30px]  absolute">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="outline-none p-[10px] w-[65%] border border-transparent border-b-[#6b696d5c] bg-transparent absolute bottom-[30px] "
              />

              <div className="rounded-[30px] text-sm absolute px-[12px] py-4 right-[10px] bottom-0 cursor-pointer transition-all duration-300 ease-in-out">
                <Button variant={"secondary"} className="text-white">
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 border-x border-gray-400 border-b-transparent grid grid-cols-2">
          <div className="row-span-2 mt-8 p-8">
            <h2 className="font-bricolage text-xl text-center">
              Our Instagram
            </h2>
            <h2 className="font-bricolage text-sm text-center">@rayStore</h2>

            <div className=" relative h-[200px] mt-20">
              <Image
                src="/store11.webp"
                alt="image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className=" relative  h-[400px]">
            <Image
              src="/store11.webp"
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Contact />
      </div>
    </section>
  )
}

export default HeroSection
