import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "delete" | "change" | "undo";
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-[8px] cursor-pointer transition-colors duration-300 outline-offset-2 focus:outline focus:outline-3";

  // Objekt med variantklasser som strängar
  const variantClasses: Record<string, string> = {
    primary:
      "px-[1.4rem] py-[0.6rem] bg-[#375E26] text-white border-none hover:bg-black focus:outline-[#375E26]",
    secondary:
      "px-[1.4rem] py-[0.6rem] bg-[#F8ECA7] text-black border-none hover:bg-[#F0DC6A] focus:outline-[#A3A3A3]",
    delete:
      "px-[0.75rem] py-[0.4rem] bg-black text-[whitesmoke] border-none ml-2 text-sm rounded-[6px] hover:bg-[#ff6b6b] hover:text-white focus:outline-[#ff6b6b]",
    change:
      "px-[0.75rem] py-[0.4rem] bg-black text-[whitesmoke] border-none ml-2 text-sm rounded-[6px] hover:bg-[#375E26] hover:text-white focus:outline-[#375E26]",
    undo:
      "px-[0.75rem] py-[0.4rem] bg-black text-[whitesmoke] border-none ml-2 text-sm rounded-[6px] hover:bg-[#375E26] hover:text-white focus:outline-[#375E26]",
  };

  // Kombinera klasser manuellt
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}