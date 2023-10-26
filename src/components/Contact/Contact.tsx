import { RayStore } from "../icon"

const Contact = () => {
  return (
    <div className="bg-[#849591]">
      <div className="flex items-center justify-center md:gap-8 [&_div]:mt-20 flex-col md:flex-row">
        <div className="text-center md:max-w-[200px] text-white [&_p]:font-light [&_p]:text-[11px]">
          <span className="flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z" />
            </svg>
          </span>
          <p className="text-sm">FREE SHIPPING</p>
          <p className="text-sm mt-1">For any order over 350k of purchase.</p>
        </div>

        <div className="text-center md:max-w-[200px] max-w-[150px] text-white [&_p]:font-light [&_p]:text-[11px]">
          <span className="flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
            </svg>
          </span>
          <p className="text-sm">NO HIDDEN FEES</p>
          <p className="text-sm mt-1">
            You won&apos;t have to pay any shipping duties upon arrival of your
            package
          </p>
        </div>

        <div className="text-center md:max-w-[200px] max-w-[180px] text-white [&_p]:font-light [&_p]:text-[11px]">
          <span className="flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="white"
              viewBox="0 0 256 256"
            >
              <path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z" />
            </svg>
          </span>
          <p className="text-sm">FREE RETURNS</p>
          <p className="text-sm mt-1">
            You have 3 days to return your order for free (all over the world).
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-7 gap-8 md:mt-16 p-16 place-content-center">
        <div className="hidden md:flex col-span-3">
          <h2 className="text-white font-bricolage text-[32px]">
            SINCE 2016, RayStore IS BASED ON A SIMPLE IDEA: CREATE A WARDROBE
            THAT IS ACCESSIBLE, CHIC AND SPORTSWEAR, CASUAL AND URBAN,
            TRANSGENERATIONAL... TO ACCOMPANY Women IN THEIR DAILY LIVES
          </h2>
        </div>

        <div className="[&_p]:text-[11px] [&_p]:text-[#fefbf5] [&_p]:font-light">
          <h2 className="text-[#fefbf5] text-base mb-1">DISCOVER US</h2>
          <p>Chic Mall ground floor zero</p>
          <p>Door number Do20_4</p>
          <p>A colorful and singular wardrobe</p>
          <p>A responsible model</p>
          <p>Women story since 2016</p>
        </div>

        <div className="[&_p]:text-[11px] [&_p]:text-[#fefbf5] [&_p]:font-light">
          <h2 className="text-[#fefbf5] md:text-base text-sm mb-1">
            SPRING / SUMMER 2023
          </h2>
          <p>All Products</p>
          <p>Coats & Jackets</p>
          <p>Women&apos;s jackets</p>
          <p>Sweaters</p>
          <p>Pants & Chinos</p>
          <p>Dresses</p>
          <p>Suits</p>
          <p>Jeans</p>
          <p>Shorts</p>
          <p>Gift Cards</p>
        </div>

        <div className="[&_p]:text-[11px] [&_p]:text-[#fefbf5] [&_p]:font-light">
          <h2 className="text-[#fefbf5] mb-1 text-base">A QUESTION?</h2>
          <p>contact@rayStore.com</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Make a return (Rwanda)</p>
        </div>

        <div className="[&_p]:text-[11px] [&_p]:text-[#fefbf5] [&_p]:font-light">
          <h2 className="text-[#fefbf5] mb-1 text-base">SHIPPING & RETURNS</h2>
          <p>Shipping / Returns</p>
          <p>Contact us on the Chat !</p>
          <p>OR</p>
          <p>rachel@rayStore.com</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-2 mt-8">
        <h2 className="hidden md:flex text-[#fefbf5] font-bricolage text-sm">
          RayStore
        </h2>
        <RayStore />
      </div>
    </div>
  )
}

export default Contact
