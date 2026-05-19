import { cn } from "../../../utils/cn";

const Text = ({
  children,
  size = "md",
  className = "",
}) => {
  const styles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <p className={cn(styles[size], className)}>
      {children}
    </p>
  );
};

export default Text;