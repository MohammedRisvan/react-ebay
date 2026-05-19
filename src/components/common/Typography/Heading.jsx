import { cn } from "../../../utils/cn";

const Heading = ({
  children,
  level = "h1",
  className = "",
}) => {
  const Tag = level;

  const styles = {
    h1: "text-4xl md:text-5xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl md:text-2xl font-semibold",
  };

  return (
    <Tag className={cn(styles[level], className)}>
      {children}
    </Tag>
  );
};

export default Heading; 