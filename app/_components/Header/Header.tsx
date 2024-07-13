// import { Link, type Locale } from "@/i18n.config";
//  import { useLocale, useTranslations } from "next-intl";

 import { HeaderClientComp } from './HeaderClientComp';
import { Navigation } from './Navigation/Navigation';


export default function Header() {
  // const t = useTranslations("Header");
  // const locale = useLocale() as Locale;
  return (
    <HeaderClientComp>
      <Navigation/>
      {/* <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="font-medium text-sky-300"
            >
              Next.js Weather
              {t("appTitle")}
            </Link>
          </li>
          <li>
            <Link
              href="/week"
              className="font-light text-sky-200"
            >
              {t("navLinks.week")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-light text-sky-200"
            >
              {t("navLinks.about")}
            </Link>
          </li>
        </ul>
      </nav> */}
      {/* <LocaleSwitcher locale={locale} /> */}
    </HeaderClientComp>
  );
}