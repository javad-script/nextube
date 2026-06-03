"use client";

import { DEFAULT_THEME } from "@/configs/app.config";
import { TRPCReactProvider } from "@/trpc/react";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import QueryProvider from "@/components/providers/query-provider";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function AppProviders({ children, locale }: Props) {
  if (!(routing.locales as readonly string[]).includes(locale)) {
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
