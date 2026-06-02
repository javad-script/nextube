import localFont from "next/font/local";

export const geist = localFont({
  src: [
    {
      path: "../assets/fonts/Geist-VariableFont_wght.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Geist-Italic-VariableFont_wght.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-GEIST",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: "../assets/fonts/JetBrainsMono-VariableFont_wght.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/JetBrainsMono-Italic-VariableFont_wght.woff2",
      style: "italic",
    },
  ],
  variable: "--font-JETBRAINS",
  display: "swap",
});

export const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-CLASH",
  display: "swap",
});

const fonts = [geist, jetbrainsMono, clashDisplay];

export default fonts;
