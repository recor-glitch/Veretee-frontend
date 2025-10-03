import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <NextIntlClientProvider locale={locale}>
        <Navigation />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
