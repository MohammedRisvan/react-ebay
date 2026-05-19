import { cn } from "../../../utils/cn";

import {
  inputBaseStyles,
  inputVariants,
} from "./Input.styles";

const Input = ({
  label,
  error,
  className = "",
  variant = "default",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          className="
            mb-2
            block
            text-sm
            font-medium
            text-gray-700
          "
        >
          {label}
        </label>
      )}

      <input
        className={cn(
          inputBaseStyles,

          error && inputVariants.error,

          className
        )}
        {...props}
      />

      {error && (
        <p
          className="
            mt-1
            text-sm
            text-red-500
          "
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;