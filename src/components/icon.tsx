import type { ComponentProps, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
  svg: FC<ComponentProps<"svg">>;
}
const Icon: FC<IconProps> = ({
  svg: SVGComponent,
  animate,
  className,
  ...rest
}) => {
  return (
    <SVGComponent className={iconVariants({ animate, className })} {...rest} />
  );
};

export { Icon };
