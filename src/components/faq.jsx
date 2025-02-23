import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How far in advance should I order my cake?",
      answer:
        "We recommend ordering at least 1-2 weeks in advance for standard cakes, and 3-4 weeks for custom or wedding cakes to ensure availability and proper preparation time.",
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer:
        "Yes, we offer a variety of gluten-free and vegan cake options. Please specify your dietary requirements when placing your order.",
    },
    {
      question: "What is your delivery area and policy?",
      answer:
        "We deliver within a 30-mile radius of our bakery. Delivery fees vary based on distance. We also offer in-store pickup for all orders.",
    },
  ]

  return (
    (<section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>)
  );
}

