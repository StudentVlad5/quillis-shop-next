import Header from "@/app/_components/Header/Header";
import type { Metadata } from "next";
import { type Locale, locales } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";
import {Providers} from './providers';
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Weather",
  description:
    "A weather app built with Next.js and next-intl",
};

 export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
 }

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className="mx-auto w-[500px] bg-slate-950 px-6 pt-3 text-sky-100">
      <Providers>
        <Header />
        {children}
      </Providers>
      </body>
    </html>
  );
}