import type { TLanguage } from "@/types/i18n";

export const LANGUAGES: readonly TLanguage[] = [
  { label: "English", locale: "en", flag: "🇺🇸" },
];

export const LOCALES: readonly string[] = LANGUAGES.map(({ locale }) => locale);

export const DEFAULT_LOCALE = "en" as const;
