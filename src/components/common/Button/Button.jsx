import { cn } from "../../../utils/cn";

import {
  buttonVariants,
  buttonSizes,
} from "./Button.styles";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-md font-medium transition-all duration-200",

        "flex items-center justify-center gap-2",

        buttonVariants[variant],

        buttonSizes[size],

        disabled &&
          "cursor-not-allowed opacity-50",

        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;