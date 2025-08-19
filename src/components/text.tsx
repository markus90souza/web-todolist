import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  as,
  variant,
  children,
  className,
  ...props
}: TextProps) => {
  return React.createElement(
    as || "span",
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
};

export { Text, type textVariants };
