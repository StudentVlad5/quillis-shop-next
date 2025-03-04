
import { unstable_setRequestLocale } from "next-intl/server";
 export default function Home({
   params: { locale },
 }: Readonly<{ params: { locale: string } }>) {

  unstable_setRequestLocale(locale);
  return (
    <main>
      <h1 className="text-xs font-thin">
        Today&apos;s weather
      </h1>
      <h2 className="text-lg">Monday April 15 2024</h2>

      <section>
        <div className="flex items-baseline gap-3">
          <p className="relative top-4 text-8xl">☀️</p>
          <p className="text-6xl font-light">Sunny</p>
          <p className="text-6xl font-thin">22°C</p>
        </div>
      </section>
    </main>
  );
}