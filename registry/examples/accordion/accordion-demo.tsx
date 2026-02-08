import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion className="max-w-sm w-full">
      <AccordionItem>
        <AccordionTrigger>What types of industries do you specialize in?</AccordionTrigger>
        <AccordionPanel className="text-balance">
          We specialize in working with SaaS, AI, Fintech, Web3, and startups. However, we love to work with any industry that values design and development.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>How soon can you start?</AccordionTrigger>
        <AccordionPanel className="text-balance">
          We can typically start within 1-2 days, depending on our current workload and your project requirements. Get in touch to see our availability.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Do you offer ongoing support?</AccordionTrigger>
        <AccordionPanel className="text-balance">
          Yes! Our retainer plan includes ongoing support for design and development requests, with flexible terms that allow you to pause or cancel anytime.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
