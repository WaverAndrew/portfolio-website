import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"; // Add other variants as needed
  // You can add more specific props related to badge styling or behavior here
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  // Basic styling, can be expanded with clsx or similar for more complex variant styling
  const baseStyle =
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Example variant styling (add more as needed based on your globals.css or UI library)
  let variantStyle = "";
  switch (variant) {
    case "secondary":
      variantStyle =
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80";
      break;
    case "destructive":
      variantStyle =
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80";
      break;
    case "outline":
      variantStyle = "text-foreground";
      break;
    default: // "default"
      variantStyle =
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
      break;
  }

  return (
    <span
      className={`${baseStyle} ${variantStyle} ${className || ""}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
