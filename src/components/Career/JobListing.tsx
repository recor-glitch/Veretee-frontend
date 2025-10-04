"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";

function JobListing() {
  const [selectedFilter, setSelectedFilter] = React.useState<number>(0);
  const t = useTranslations("career");
  const filters = t.raw("filters") as { title: string }[];

  const career = t.raw("jobList") as {
    id: number;
    position: string;
    team: string;
    location: string;
  }[];

  const handleFilterClick = (index: number) => {
    setSelectedFilter(index);
  };

  return (
    <div className="col-span-full py-16">
      <div className="grid grid-cols-3">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 col-span-full md:col-span-2 mb-16">
          {filters
            .slice(0, 7)
            .map((filter: { title: string }, index: number) => (
              <div
                key={filter.title + index}
                onClick={() => handleFilterClick(index)}
                className={cn(
                  "bg-primary rounded-full border-2 border-primary transform transition-all duration-300 flex cursor-pointer flex-wrap items-center justify-center whitespace-nowrap w-fit h-fit px-4 py-3",
                  selectedFilter === index
                    ? "bg-primary text-white/90"
                    : "bg-white"
                )}
              >
                <span className="text-[14px] font-medium ">{filter.title}</span>
              </div>
            ))}
        </div>
        <div className="hidden md:block">
          {filters.length - 7 === 0 && (
            <p className="flex justify-end col-span-1 text-primary font-bold">
              {filters.length - 7} {t("opening")}
            </p>
          )}
        </div>
      </div>
      <table className="col-span-full w-full">
        <thead className="border-b-2 border-primary bg-white">
          <tr>
            <th className="text-left py-4 px-6">
              <span className="text-primary text-sm md:text-base font-bold uppercase tracking-wide">
                {t("table.position")}
              </span>
            </th>
            <th className="text-left py-4 px-6 hidden md:table-cell">
              <span className="text-primary text-sm md:text-base font-bold uppercase tracking-wide">
                {t("table.team")}
              </span>
            </th>
            <th className="text-left py-4 px-6">
              <span className="text-primary text-sm md:text-base font-bold uppercase tracking-wide">
                {t("table.location")}
              </span>
            </th>
            <th className="text-left py-4 px-6">
              <span className="font-bold text-primary text-sm md:text-base uppercase tracking-wide">
                {t("table.link")}
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {career.map((job, index) => (
            <tr
              key={index}
              className="border-b border-black/70 last:border-b-0"
            >
              <td className="text-left py-6 px-6 text-sm md:text-base font-normal text-[#242424]">
                {job.position}
              </td>
              <td className="text-left py-6 px-6 text-sm md:text-base font-normal hidden md:table-cell text-[#242424]">
                {job.team}
              </td>
              <td className="text-left py-6 px-6 text-sm md:text-base font-normal text-[#242424]">
                {job.location}
              </td>
              <td className="text-left py-6 px-6">
                <Link
                  href={`/career/${job.id}`}
                  className="text-[#F8C43E] font-semibold text-sm md:text-base hover:underline"
                >
                  {job.position}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobListing;
