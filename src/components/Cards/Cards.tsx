"use client"

import { ImageCard } from "."

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      <ImageCard image="/store1.webp" />
      <ImageCard image="/store2.webp" />
      <ImageCard image="/store3.webp" />
      <ImageCard image="/store4.webp" />
      <ImageCard image="/store5.webp" />
      <ImageCard image="/store6.webp" />
      <ImageCard image="/store7.webp" />
      <ImageCard image="/store8.webp" />
    </div>
  )
}

export default Cards
