"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CustomCakeForm from "./custom-cake-form"

const customCakes = [
  { id: 1, name: "Wedding Cake", image: "/wedding-cake.jpg" },
  { id: 2, name: "Birthday Cake", image: "/birthday-cake.jpg" },
  { id: 3, name: "Anniversary Cake", image: "/anniversary-cake.jpg" },
  { id: 4, name: "Graduation Cake", image: "/graduation-cake.jpg" },
  { id: 5, name: "Baby Shower Cake", image: "/baby-shower-cake.jpg" },
]

export default function CustomCakeScroll() {
  const [selectedCake, setSelectedCake] = useState(null)

  return (
    <section className=" py-12 bg-[linear-gradient(to_top,white,transparent),linear-gradient(to_right,#fce7f3,#ffe4e6,#fef2f2)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Custom Cake Designs</h2>
        <div className="flex overflow-x-auto pb-4 mb-8">
          <div className="w-7 "></div>
          {customCakes.map((cake) => (
            <div key={cake.id} className="flex-none w-64 mr-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedCake(cake)}
              >
                <div className="relative h-40 mb-4">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cake.name}</h3>
                <Button
                  variant="outline"
                  className="mt-2 w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Customize
                </Button>
              </div>
            </div>
          ))}
        </div>
        {selectedCake && <CustomCakeForm selectedCake={selectedCake} onClose={() => setSelectedCake(null)} />}
      </div>
    </section>
  )
}

