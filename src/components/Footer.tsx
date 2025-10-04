import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">{t("logoText")}</span>
            </div>
            <p className="text-white/80 mb-4">{t("description")}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("career")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("servicesTitle")}</h3>
            <ul className="space-y-2">
              <li className="text-white/80">{t("importExport")}</li>
              <li className="text-white/80">{t("supplyChain")}</li>
              <li className="text-white/80">{t("logistics")}</li>
              <li className="text-white/80">{t("distribution")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">{t("copyright")}</p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                {t("termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
