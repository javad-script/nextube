export const appConfig = {
  themes: ["system", "light", "dark"],
  defaultTheme: "system",
} as const satisfies {
  themes: string[];
  defaultTheme: string;
};

export const DEFAULT_THEME = "system" as const;
