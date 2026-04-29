import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import {
  getSortedBriefs,
  briefDate,
  briefHref,
  briefSummary,
  formatLong
} from "../lib/briefs";

export async function GET(context: APIContext) {
  const briefs = await getSortedBriefs();
  return rss({
    title: "Athena · briefs",
    description:
      "Daily intelligence on AI & tech, compiled at dawn by an autonomous research agent.",
    site: context.site!,
    items: briefs.map((entry) => ({
      title: `${formatLong(briefDate(entry))} — Athena's brief`,
      pubDate: briefDate(entry),
      description: briefSummary(entry),
      link: briefHref(entry)
    })),
    customData: `<language>en-us</language>`
  });
}
