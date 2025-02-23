import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import FloatingBubbles from "./background/floating-bubbles"

export default function FirstView({ title = "Floating Bubbles" }) {
  return (
    <section className="pt-20 pb-12 relative overflow-hidden bg-gradient-to-r from-pink-100 via-rose-100 to-pink-50">
     <FloatingBubbles/>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-rose-100/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
              <span className="block">Indulge in</span>
              <span className="block text-primary">Sweet Moments</span>
              <span className="block">with Every Bite</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Experience the magic of our handcrafted cakes, baked with love and passion. From classic flavors to custom
              creations, we bring your sweetest dreams to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
             
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
              >
                Customize Your Cake
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/hero-cake.jpg"
                alt="Delicious Cake"
                fill
                className="object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

