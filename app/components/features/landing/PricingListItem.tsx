import React from "react";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-400 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export const PricingListItem = ({
  children,
  isBold = false,
}: {
  children: React.ReactNode;
  isBold?: boolean;
}) => (
  <li className={`flex items-center ${isBold ? "font-bold" : ""}`}>
    <CheckIcon />
    {children}
  </li>
);
