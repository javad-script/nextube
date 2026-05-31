import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("homePage");
  return (
    <div>
      <Button variant={"default"}>{t("title")}</Button>
    </div>
  );
}
