import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

export default async function Page() {
  const t = await getTranslations("homePage");
  return (
    <div>
      <Button variant={"default"}>{t("title")}</Button>
    </div>
  );
}
