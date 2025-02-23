'use client'
import Header from "@/components/header"
import FirstView from "@/components/first-view"
import CustomCakeScroll from "@/components/custom-cake-scroll"
import BrandStory from "@/components/brand-story"
import Features from "@/components/features"
// import HowToOrder from "../components/how-to-order"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import SocialMedia from "@/components/social-media"
import FloatingBubblesBackground from "@/components/background/floating-bubbles"
import ClickSpark from "@/components/Animations/ClickSpark/ClickSpark"
export default function Home() {
  return (
    (<main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* <FloatingBubblesBackground/> */}
      <ClickSpark
  sparkColor='#000'
  sparkSize={20}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
      <Header />
      <FirstView />
      <CustomCakeScroll />
      <BrandStory />
      <Features />
      {/* <HowToOrder /> */}
      <Testimonials />
      <FAQ />
      <CTA />
      {/* <SocialMedia /> */}
      </ClickSpark>
    </main>)
  );
}

