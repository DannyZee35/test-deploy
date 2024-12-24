import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
 
      className={cn(
        "flex h-9 w-full     bg-[#F6F6F6] px-3 py-1 text-base    border-custom-lightGray border rounded-lg focus:ring-0 focus:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
