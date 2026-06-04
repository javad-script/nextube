import { getTranslations } from "next-intl/server";

import { redis } from "@/lib/redis";

import { Button } from "@/components/ui/button";

export default async function Page() {
  const name = await redis.get("name");
  const t = await getTranslations("homePage");
  return (
    <div>
      <Button className="" variant={"default"}>{`${t("title")} ${name}`}</Button>
    </div>
  );
}
