import Page from "@/app/[locale]/page";
import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

import { getTranslations } from "next-intl/server";

import { redis } from "@/lib/redis";

vi.mock("@/server/redis", () => ({
  redis: {
    get: vi.fn(),
  },
}));

vi.mock("next-intl/server", () => ({
  getTranslations: vi.fn(),
}));

it("renders translated title with redis value", async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (redis.get as any).mockResolvedValue("Javad");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (getTranslations as any).mockResolvedValue((key: string) => {
    const dict: Record<string, string> = {
      title: "Hello",
    };
    return dict[key];
  });

  render(await Page());

  expect(screen.getByRole("button", { name: "Hello Javad" })).toBeDefined();
});
