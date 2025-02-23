import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    (<section id="reviews" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">What Our Customers Say</h2>
          <p className="text-gray-600 leading-relaxed">
            Don't just take our word for it - hear from our happy customers who have experienced the joy of our cakes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/happy-customer.jpg"
              alt="Happy Customer with Cake"
              fill
              className="object-cover" />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "The cake was not only beautiful but absolutely delicious! It was the highlight of our wedding reception.
              Thank you for making our day even more special!"
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Emily & James</p>
              <p className="text-gray-600">Wedding Couple</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: "Perfect for my daughter's birthday. The unicorn design was magical!",
              name: "Sarah Thompson",
              role: "Happy Parent",
            },
            {
              comment: "The taste was out of this world. Best red velvet cake I've ever had!",
              name: "Michael Chen",
              role: "Food Enthusiast",
            },
            {
              comment: "Impressed by the attention to detail. Our company event was a hit!",
              name: "Laura Rodriguez",
              role: "Event Planner",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
  );
}

