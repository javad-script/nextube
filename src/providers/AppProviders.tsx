"use client";

import QueryProvider from "@/providers/query-provider";
import { TRPCReactProvider } from "@/trpc/react";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import { DEFAULT_THEME } from "@/constants/theme";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function AppProviders({ children, locale }: Props) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <TRPCReactProvider>
      <NextIntlClientProvider locale={locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme={DEFAULT_THEME}
          enableSystem
          enableColorScheme
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </TRPCReactProvider>
  );
}
