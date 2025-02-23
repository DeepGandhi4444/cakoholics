import { Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    (<section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Our Sweet Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Follow us for the latest cake designs, promotions, and baking tips!
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Instagram />
            Follow on Instagram
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Facebook />
            Like on Facebook
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Twitter />
            Follow on Twitter
          </Button>
        </div>
        <p className="text-gray-600 mb-4">Share your cake moments with #CakeDelightJoy</p>
        <div className="max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email for sweet updates"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe to Newsletter</Button>
        </div>
      </div>
    </section>)
  );
}

