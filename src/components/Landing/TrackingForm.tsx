"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

function TrackingForm() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tracking, setTracking] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (firstName) params.set("first", firstName);
    if (lastName) params.set("last", lastName);
    if (tracking) params.set("tracking", tracking);
    router.push(`/search?${params.toString()}`);
  }
  return (
    <Card className="p-6 md:p-7 lg:p-8 animate-slide-up border-none bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(31,38,135,0.15)] ring-1 ring-white/30 rounded-2xl">
      <div className="flex items-center gap-2 mb-3 text-muted-foreground">
        <span className="text-lg font-semibold">{t("search")}</span>
        <Search className="h-5 w-5" />
      </div>
      <h3 className="text-2xl font-bold text-foreground">{t("trackOrder")}</h3>
      <form
        className="space-y-5 p-6 md:p-7 lg:p-8 bg-white"
        onSubmit={onSubmit}
      >
        <p className="text-sm text-muted-foreground">{t("form.title")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder={t("form.firstName")}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder={t("form.lastName")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Input
            placeholder={t("form.trackingId")}
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant={"default"}
            type="submit"
            className="bg-primary hover:bg-primary/90"
          >
            {t("form.submit")}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default TrackingForm;
