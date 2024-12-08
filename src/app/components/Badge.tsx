import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

const Badge: React.FC<BadgeProps> = ({ children, className, variant = "primary" }) => {
  const baseStyles = "inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium";

  const variantStyles = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
