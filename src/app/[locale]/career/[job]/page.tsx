import ApplicationForm from "@/components/Career/ApplicationForm";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function JobDetailPage({ params }: { params: { job: string } }) {
  const t = await getTranslations("career");
  const { job } = params;

  const deatils = t.raw("detail") as {
    title: string;
    about: string;
    apply: string;
    applyForJob: string;
    jobDescription: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      resume: {
        title: string;
        attach: string;
        dropbox: string;
        googleDrive: string;
      };
      howWillYouBeValuable: string;
      telMeAboutYourself: string;
      submit: string;
    };
  };

  const jobList = t.raw("jobList") as {
    id: number;
    position: string;
    team: string;
    location: string;
    date: string;
    description: string;
  }[];

  const jobDetail = jobList.find((item) => item.id === Number(job));

  return (
    <div className="min-h-screen bg-background grid gap-16 grid-cols-3 container mx-auto px-4 py-16">
      <div className="col-span-full">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          {deatils.title}
        </h1>
      </div>
      <div className="col-span-full grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 col-span-full md:col-span-3">
          <h2 className="text-primary font-normal text-4xl">
            {jobDetail?.position}
          </h2>
          <p className="text-sm text-gray-500 mb-8 flex items-start gap-4">
            <MapPin className="text-primary" />
            <span className="text-xl font-light">{jobDetail?.location}</span>
          </p>
        </div>
        <div className="col-span-full md:col-span-1 flex md:justify-end">
          <Button className="rounded-full w-fit">{deatils.apply}</Button>
        </div>
      </div>
      <div className="col-span-full grid grid-cols-3 gap-8">
        <h2 className="text-3xl font-bold col-span-full">{deatils.about}</h2>
        <p className="text-lg leading-relaxed whitespace-pre-line col-span-full">
          {t("detail.description")}
        </p>
      </div>
      <div className="col-span-full grid grid-cols-3 gap-8">
        <h2 className="text-3xl font-bold col-span-full">
          {deatils.jobDescription}
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line col-span-full">
          {jobDetail?.description}
        </p>
      </div>
      <ApplicationForm />
    </div>
  );
}

export default JobDetailPage;
