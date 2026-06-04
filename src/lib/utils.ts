import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isRtl(locale: string) {
  return ["ar", "fa", "he", "ur", "ku", "az"].some((l) => locale.startsWith(l));
}
