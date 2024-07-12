import type { WeeklyWeatherRoot } from "../../../types";
import { promises as fs } from "fs";
import { getTranslations } from "next-intl/server";


export default async function Week() {
  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8",
  );
  const { weeklyWeather } = JSON.parse(
    fileContents,
  ) as WeeklyWeatherRoot;

 // We have to `await` here.
 const t = await getTranslations("Week");

  return (
    <main>
      <h1 className="text-xs font-thin">
        This week&apos;s weather
      </h1>
      <div className="divide-y divide-dashed divide-sky-900">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="py-5">
            <h2 className="mb-1 text-lg font-thin">
              {new Date(day.dateTime).toString()}
            </h2>
            <div>
              <div className="flex items-baseline gap-3">
                <p className="relative top-1 text-4xl">
                  {/* "sunny" | "partlyCloudy" | ... */}
                   {t(day.condition)}
                </p>
                <p className="text-3xl font-thin">
                  {day.temperature.celsius}°C
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}