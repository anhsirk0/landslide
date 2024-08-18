import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export default cn;
