import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="  py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider">ORDER NOW</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Sweeten Your Day with Our Cakes</h2>
            <p className="text-xl text-gray-600 mb-8">
              Indulge in the perfect blend of flavors and artistry. Order now and make your celebration unforgettable!
            </p>
          </div> */}

          {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Classic Chocolate Delight</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary">$39.99</span>
                  <span className="ml-2 text-gray-500 line-through">$49.99</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Rich, moist chocolate cake
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Creamy chocolate ganache
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Serves 8-10 people
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Perfect for birthdays or gatherings
                  </li>
                </ul>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Order Now
                </Button>
              </div>
              <div className="relative">
                <Image src="/chocolate-cake-promo.jpg" alt="Classic Chocolate Delight" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full text-lg animate-pulse">
                  20% OFF
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Can't decide? Try our Cake of the Month!</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our Cake of the Month club and receive a surprise flavor every month at a discounted price.
              Perfect for cake lovers who enjoy variety!
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Learn More About Cake of the Month
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

