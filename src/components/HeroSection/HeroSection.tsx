"use client"

import Image from "next/image"
import Link from "next/link"
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
            src="/1.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/10.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/14.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/11.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/12.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative  h-[700px]">
          <Image
            src="/2.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-span-1 ">
          <h2 className="text-black font-bricolage text-[32px] text-center mt-56">
            A Blazer JACKETS
          </h2>
          <p className="w-[400px] text-center mx-auto mt-4 font-light text-sm">
            Available in all shapes and sizes for over 7 years, the Blazer
            jacket has become an essential part of the RayStore wardrobe.
            Discover our new exclusive, modern and original colors!
          </p>
        </div>

        <ProductCard
          image="/3.jpeg"
          name="Two-Button - Straight short"
          description="Blazer Jacket"
          price={40000}
          colors={["red", "black"]}
          availableSizes={["M", "L", "XL", "XXL"]}
        />
        <ProductCard
          image="/5.jpeg"
          name="Two-Button - Straight short"
          description="Blazer Jacket"
          price={45000}
          colors={["black", "beige", "green"]}
          availableSizes={["S", "M", "L", "XL", "XXL"]}
        />

        <div className="row-span-2 relative min-w-[300px]">
          <Image
            src="/7.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <ProductCard
          image="/1.jpeg"
          name="One-Button - Straight short"
          description="Blazer Jacket"
          price={40000}
          availableSizes={["M", "L", "XL"]}
        />

        <ProductCard
          image="/2.jpeg"
          name="One-Button - Straight short"
          description="Blazer Jacket"
          price={40000}
          colors={["khaki", "beige"]}
          availableSizes={["S", "M", "L"]}
        />

        <ProductCard
          image="/3.jpeg"
          name="Two-Buttons - Straight short"
          description="Blazer Jacket"
          price={40000}
          colors={["red", "black"]}
          availableSizes={["M", "L"]}
        />

        <ProductCard
          image="/4.jpeg"
          name="Two-Buttons - Long"
          description="Blazer Jacket"
          price={45000}
          colors={["black", "red"]}
          availableSizes={["XL", "L"]}
        />
      </div>

      <div className="pt-[45px]">
        <p className=" text-black font-bricolage text-8xl text-center">
          A WOMAN STORY
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
          <h2 className="w-[200px] mx-auto pt-8 font-bricolage text-2xl text-center">
            JOIN THE RayStore FAMILY!
          </h2>
          <p className="w-[380px] mx-auto font-light text-sm mt-6 text-center">
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
                  <a href="mailto:sethreas@gmail.com" target="_blank">
                    Email Us
                  </a>
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

            <h2 className="font-bricolage text-sm text-center">
              <Link
                href="https://www.instagram.com/ray_style_store"
                target="_blank"
              >
                @ray_style_store
              </Link>
            </h2>

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
