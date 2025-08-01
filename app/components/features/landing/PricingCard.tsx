import React from "react";
import { clsx } from "clsx";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { PricingListItem } from "./PricingListItem";
import { HStack } from "../../ui/Stack";

interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  discountText?: string;
  newFeatureText?: string;
  buttonText?: string;
}

const Badge = ({ text, colorClass }: { text: string; colorClass: string }) => (
  <span
    className={clsx(
      "text-xs font-bold px-4 py-1 rounded-full uppercase text-white",
      colorClass
    )}
  >
    {text}
  </span>
);

export function PricingCard({
  planName,
  description,
  price,
  features,
  isRecommended = false,
  discountText,
  newFeatureText,
  buttonText = "Elegir Plan",
}: PricingCardProps) {
  return (
    <Card
      className={clsx(
        "p-8 flex flex-col transition-all duration-300 hover:scale-102 relative",
        isRecommended && "border-2 border-[var(--primary)] scale-105"
      )}
    >
      <HStack
        spacing="0.5rem"
        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        {isRecommended && (
          <Badge text="Más Popular" colorClass="bg-[var(--info)]" />
        )}
        {discountText && (
          <Badge text={discountText} colorClass="bg-[var(--success)]" />
        )}
        {newFeatureText && (
          <Badge text={newFeatureText} colorClass="bg-[var(--danger)]" />
        )}
      </HStack>

      <h3 className="text-2xl font-bold text-sky-500 mb-2">{planName}</h3>
      <p className="opacity-70 mb-6 min-h-[50px]">{description}</p>
      <p className="text-4xl font-bold mb-6">
        {price} <span className="text-lg font-normal opacity-70">MXN</span>
      </p>
      <ul className="space-y-4 mb-8 flex-grow opacity-90">
        {features.map((feature, index) => (
          <PricingListItem key={index}>{feature}</PricingListItem>
        ))}
      </ul>
      <Button
        as="a"
        href="#contacto"
        color={isRecommended ? "primary" : "secondary"}
        className="w-full text-center"
      >
        {buttonText}
      </Button>
    </Card>
  );
}
