"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "../../public/logo.svg";

const Navigation = () => {
  const t = useTranslations("navigation");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleLanguageChange = (selectedLocale: string) => {
    // Get the path segments
    const segments = pathname.split("/").filter(Boolean);

    // Remove the current locale if it exists
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "de")) {
      segments.shift(); // Remove the locale segment
    }

    // Create the new path with the selected locale
    const newPath = `/${selectedLocale}${
      segments.length > 0 ? "/" + segments.join("/") : ""
    }`;

    router.replace(newPath);
  };

  const serviceDropdownItems = t.raw("servicesDropdown") as {
    title: string;
    link: string;
  }[];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer decoration-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  <Image src={Logo} alt={t("imageAlt")} />
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                {t("logoText")}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t("home")}
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("about")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary transition-colors outline-none">
                {t("services")}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceDropdownItems.map((item) => (
                  <DropdownMenuItem asChild key={item.title}>
                    <Link href={item.link} className="w-full">
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/career"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("career")}
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 bg-blue-900 focus:outline-none hover:bg-blue-800 text-white pl-4 pr-3 py-2.5 rounded-full transition-colors duration-200 font-medium cursor-pointer min-w-[100px]">
                <Globe className="h-4 w-4" />
                {currentLocale.toUpperCase()}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("en")}
                  className={currentLocale === "en" ? "bg-accent" : ""}
                >
                  <span className="flex items-center gap-2">🇺🇸 English</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleLanguageChange("de")}
                  className={currentLocale === "de" ? "bg-accent" : ""}
                >
                  <span className="flex items-center gap-2">🇩🇪 Deutsch</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">{t("logoText")}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("home")}
                  </Link>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("about")}
                  </Link>
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                    >
                      {t("services")}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="ml-4 space-y-1">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.link}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/career"
                    className="text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("career")}
                  </Link>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {t("contact")}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
