const Video = () => {
  return (
    <video autoPlay className="w-full h-full" loop muted>
      <source src="/video1.mp4" type="video/mp4" />
      <p> Your browser does not support the video tag.</p>
    </video>
  )
}

export default Video
