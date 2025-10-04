"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function ApplicationForm() {
  const t = useTranslations("career");
  return (
    <div className="col-span-full grid grid-cols-3 gap-8">
      <h2 className="text-3xl font-light text-primary col-span-full">
        {t("detail.applyForJob")}
      </h2>
      <form className="col-span-full flex flex-col md:col-span-1 gap-8">
        <Input placeholder={t("detail.form.firstName")} />
        <Input placeholder={t("detail.form.lastName")} />
        <Input placeholder={t("detail.form.email")} />
        <Input placeholder={t("detail.form.phone")} />
      </form>
      <h2 className="text-xl font-medium col-span-full">
        {t("detail.form.resume.title")}
      </h2>
      <form className="col-span-full flex flex-col md:col-span-1 gap-8">
        <Button className="rounded-full bg-white border border-primary text-black w-full md:w-2/3">
          {t("detail.form.resume.attach")}
        </Button>
        <Button className="rounded-full bg-white border border-primary text-black w-full md:w-2/3">
          {t("detail.form.resume.dropbox")}
        </Button>
        <Button className="rounded-full bg-white border border-primary text-black w-full md:w-2/3">
          {t("detail.form.resume.googleDrive")}
        </Button>
      </form>
      <h2 className="text-xl font-medium col-span-full">
        {t("detail.form.howWillYouBeValuable")}
      </h2>
      <form className="col-span-full flex flex-col gap-8">
        <Textarea />
      </form>
      <h2 className="text-xl font-medium col-span-full">
        {t("detail.form.telMeAboutYourself")}
      </h2>
      <form className="col-span-full flex flex-col gap-8">
        <Textarea />
      </form>
      <div className="col-span-full flex justify-end">
        <Button className="rounded-full bg-primary text-white w-fit">
          {t("detail.form.submit")}
        </Button>
      </div>
    </div>
  );
}

export default ApplicationForm;
