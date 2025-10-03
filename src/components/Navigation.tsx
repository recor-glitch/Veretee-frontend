"use client";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const t = useTranslations("navigation");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;

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
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("services")}
            </a>
            <a
              href="#career"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("career")}
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("contact")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Globe className="h-4 w-4 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-white z-10" />
              <select
                value={currentLocale}
                onChange={handleLanguageChange}
                className="flex items-center gap-2 bg-blue-900 focus:outline-none hover:bg-blue-800 text-white pl-12 pr-10 py-2.5 rounded-full transition-colors duration-200 font-medium cursor-pointer appearance-none min-w-[100px] [&>option]:bg-white [&>option]:text-black"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "16px 16px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
