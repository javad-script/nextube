import { i18nConfig } from "@/configs/i18n.config";

import { defineRouting } from "next-intl/routing";

const { defaultLocale, localePrefix } = i18nConfig;

export const routing = defineRouting({
  defaultLocale,
  localePrefix,
  locales: i18nConfig.languages.map(({ locale }) => locale),
});
