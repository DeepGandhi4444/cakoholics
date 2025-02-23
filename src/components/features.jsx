"use client"

import Image from "next/image"
import { useState } from "react"

export default function Features() {
  const [selectedCake, setSelectedCake] = useState(null)

  const cakes = [
    {
      name: "Classic Chocolate",
      description: "Rich, moist chocolate cake with a velvety ganache.",
      image: "/chocolate-cake.jpg",
    },
    {
      name: "Strawberry Delight",
      description: "Light vanilla sponge with fresh strawberries and cream.",
      image: "/strawberry-cake.jpg",
    },
    {
      name: "Lemon Zest",
      description: "Tangy lemon cake with a refreshing citrus glaze.",
      image: "/lemon-cake.jpg",
    },
    {
      name: "Red Velvet Dream",
      description: "Smooth red velvet cake with cream cheese frosting.",
      image: "/red-velvet-cake.jpg",
    },
  ]

  return (
    (<section id="cakes" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">OUR CAKES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Indulge in Our
            <br />
            Signature Creations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Discover our range of delectable cakes, each crafted with passion and the finest ingredients. From classic
            favorites to unique creations, there's a perfect cake for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cakes.map((cake, index) => (
            <div key={index} className="relative">
              <div
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedCake(cake)}>
                <Image
                  src={cake.image || "/placeholder.svg"}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform hover:scale-110 duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{cake.name}</h3>
            </div>
          ))}
        </div>

        {selectedCake && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedCake.name}</h3>
              <p className="text-gray-600 mb-6">{selectedCake.description}</p>
              <button
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                onClick={() => setSelectedCake(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>)
  );
}

