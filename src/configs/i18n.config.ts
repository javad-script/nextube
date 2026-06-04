import type { TLanguage } from "@/types/i18n";

export const i18nConfig = {
  defaultLocale: "en",
  languages: [
    { label: "English", locale: "en", flag: "🇺🇸" },
    { label: "Persian", locale: "fa", flag: "🇮🇷" },
  ],
  localePrefix: "always",
} as const satisfies {
  defaultLocale: string;
  languages: readonly TLanguage[];
  localePrefix: "always" | "as-needed";
};
