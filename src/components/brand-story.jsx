import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    (<section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Baking Dreams
            <br />
            Into Reality
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From a small family kitchen to a beloved local bakery, our journey has been filled with love, passion, and
            the sweet aroma of freshly baked cakes. We pour our heart into every creation, ensuring each bite brings joy
            and celebration to your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/bakery-interior.jpg" alt="Our Bakery" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Crafting Sweet Memories,
              <br />
              One Cake at a Time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our bakery is more than just a place where cakes are made; it's where dreams come to life. With years of
              experience and a passion for perfection, we've mastered the art of creating not just desserts, but edible
              masterpieces that become the centerpiece of your celebrations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in using only the finest, natural ingredients, sourced locally whenever possible. Our
              commitment to quality ensures that every cake not only looks stunning but tastes absolutely divine.
            </p>
            <Button variant="outline" className="mt-4">
              Learn More About Our Process
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div
              className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🎂</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Customization</h4>
            <p className="text-gray-600">Your vision, our expertise. We bring your dream cake to life.</p>
          </div>
          <div className="text-center space-y-4">
            <div
              className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🌿</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Natural Ingredients</h4>
            <p className="text-gray-600">We use only the finest, natural ingredients for the best taste.</p>
          </div>
          <div className="text-center space-y-4">
            <div
              className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">💖</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Made with Love</h4>
            <p className="text-gray-600">Every cake is crafted with passion and attention to detail.</p>
          </div>
        </div>
      </div>
    </section>)
  );
}

