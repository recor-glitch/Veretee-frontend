import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";

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
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary-light transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-light transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-light transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary-light transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("career")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t("contact")}
                </a>
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
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                {t("termsOfService")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
