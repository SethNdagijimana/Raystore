const Footer = () => {
  return (
    <footer className="bg-[#d8e8cb] w-full p-8">
      <div className="flex items-center justify-start w-[200px] mx-auto">
        <div className="">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z" />
            </svg>
          </span>

          <p>Free shipping</p>
          <p>For any order over 350kRWF of purchase.</p>
        </div>
        <div>2</div>
        <div>3</div>
      </div>

      <div></div>
    </footer>
  )
}

export default Footer
