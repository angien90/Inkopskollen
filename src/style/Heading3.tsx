import type { ReactNode } from "react";

interface Heading3Props {
  children: ReactNode;
}

export default function Heading3({ children }: Heading3Props) {
  return (
    <h3 className="uppercase mb-0 text-2xl sm:text-3xl font-bold text-[#213547]">
      {children}
    </h3>
  );
}