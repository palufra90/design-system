import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
interface Props {
  className?: string;
}

export function Services(props: Props) {
  const { className } = props;
  return (
    <Accordion type="single" collapsible className={`w-full ${className}`}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Bolding and interiors</AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Lightening design</AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Rehabilitation Strategy</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          Preserving heritage while meeting contemporary needs
          <Button className="mt-4 max-w-28">Learn More</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
