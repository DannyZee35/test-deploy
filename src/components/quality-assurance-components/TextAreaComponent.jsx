import React, { forwardRef } from 'react';

const TextAreaField = forwardRef(({ type = "text", placeholder, className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      type={type}
      rows={5}
      placeholder={placeholder}
      className={`w-full px-4 py-2 bg-[#F6F6F6] border border-[#E0E0E0]   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

 

export default TextAreaField;
