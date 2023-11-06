"use client"

import { ProductCard } from "@/components/Cards"
import { Contact } from "@/components/Contact"
import { Video } from "@/components/Video"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section>
      <div className="hidden md:flex md:h-[800px] md:w-full relative overflow-hidden">
        <Video />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="grid md:grid-cols-3 md:p-8 md:gap-3 grid-cols-2 p-4 gap-2 "
      >
        <div className=" relative md:h-[700px] h-[300px] md:w-full">
          <Image
            src="/1.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative md:h-[700px] h-[300px]">
          <Image
            src="/10.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative md:h-[700px] h-[300px]">
          <Image
            src="/14.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative md:h-[700px] h-[300px]">
          <Image
            src="/11.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" relative md:h-[700px] h-[300px]">
          <Image
            src="/12.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative md:h-[700px] h-[300px]">
          <Image
            src="/2.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="hidden md:grid grid-cols-3 p-8 gap-2"
      >
        <div>
          <h2 className="text-black font-bricolage text-[32px] text-center md:mt-56 mt-20">
            A Blazer JACKETS
          </h2>

          <p className="md:w-[400px] w-[200px] text-center mx-auto md:mt-4 mt-2 font-light md:text-sm text-sm">
            Available in all shapes and sizes for over 7 years, the Blazer
            jacket has become an essential part of the RayStore wardrobe.
            Discover our new exclusive, modern and original colors!
          </p>
        </div>

        <ProductCard
          image="/15.jpeg"
          name="One-Button - Straight Long"
          description="Blazer JACKETS"
          price={40000}
          colors={["pink", "white"]}
          availableSizes={["M", "L", "XXL"]}
        />

        <ProductCard
          image="/4.jpeg"
          name="Two-Buttons - Long"
          description="Blazer Jacket"
          price={45000}
          colors={["black", "red"]}
          availableSizes={["XL", "L"]}
        />

        <div className="relative">
          <Image
            src="/7.jpeg"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <ProductCard
          image="/17.jpeg"
          name="Straight cut"
          description="JACKETS"
          price={15000}
          availableSizes={["XL", "XXL"]}
        />

        <ProductCard
          image="/12.jpeg"
          name="double-breasted"
          description="Blazer JACKETS"
          price={40000}
          colors={["beige", "grey", "black", "red"]}
          availableSizes={["M", "L", "XL", "XXL"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="md:pt-[45px]"
      >
        <p className="text-black font-bricolage md:text-8xl text-4xl text-center">
          A WOMAN STORY
        </p>
        <p className=" text-black font-bricolage md:text-7xl text-3xl text-center">
          Since 2016
        </p>

        <p className="text-center md:w-[530px] w-[250px] mx-auto mt-3 font-light text-sm font-bricolage">
          Founded in Kigali in 2016, RayStore dresses independent Women with
          casual elegance
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 border border-gray-400 border-b-transparent mt-8"
      >
        <div className="md:p-8 p-4">
          <h2 className="w-[200px] mx-auto md:pt-8 pt-4 font-bricolage md:text-2xl text-xl text-center">
            JOIN THE RayStore FAMILY!
          </h2>

          <p className="md:w-[380px] w-[200px] mx-auto font-light md:text-sm text-xs mt-6 text-center">
            Subscribe to our newsletter to receive our news and get exclusive
            advantage
          </p>

          <div className="relative md:w-[400px] md:h-[270px] h-[180px] mx-auto md:mt-[40px] mt-5">
            <div className="md:-left-[30px] left-[15px] md:-right-[30px] right-[15px] md:h-[200px] h-[150px] md:p-[30px] p-[15px] absolute">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="outline-none p-[10px] md:w-[65%] w-[40%] border border-transparent border-b-[#6b696d5c] bg-transparent absolute bottom-[30px] "
              />

              <div className="md:rounded-[30px] rounded-[15px] text-sm absolute md:px-3 px-[6px] md:py-4 py-2 md:right-[10px] right-16 bottom-0 cursor-pointer transition-all duration-300 ease-in-out">
                <Button variant={"secondary"} className="text-white">
                  <a href="mailto:sethreas@gmail.com" target="_blank">
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-8 p-4 md:border-x border-y border-gray-400 border-b-transparent grid grid-cols-2">
          <div className="row-span-2 md:mt-8 mt-6 md:p-8 p-6">
            <h2 className="font-bricolage md:text-xl text-lg text-center">
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

            <div className="relative h-[200px] md:w-[300px] w-[150px] col-span-2 md:mt-20 mt-14">
              <Image
                src="/11.jpeg"
                alt="image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="relative md:h-[400px] h-[200px] md:top-0 top-[90px]">
            <Image
              src="/4.jpeg"
              alt="image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>

      <div className="md:mt-2 mt-1">
        <Contact />
      </div>
    </section>
  )
}
