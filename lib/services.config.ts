import type { ServiceGroup } from "@/types/services";

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    slug: "plex-seerr",
    title: "Plex + Seerr",
    description: "Stream movies, TV shows and music — and request new content.",
    services: [
      { label: "Plex", url: process.env.PLEX_URL ?? "#" },
      { label: "Seerr", url: process.env.SEERR_URL ?? "#" },
    ],
    markdownFile: "plex-seerr.md",
  },
  {
    slug: "audiobookshelf",
    title: "Audiobookshelf + ReadMeAbook",
    description: "Listen to audiobooks and request new titles to be added.",
    services: [
      { label: "Audiobookshelf", url: process.env.ABS_URL ?? "#" },
      { label: "ReadMeAbook", url: process.env.READMEABOOK_URL ?? "#" },
    ],
    markdownFile: "audiobookshelf.md",
  },
  {
    slug: "bentopdf",
    title: "BentoPDF",
    description: "Merge, split, compress and convert PDF files.",
    services: [{ label: "BentoPDF", url: process.env.BENTOPDF_URL ?? "#" }],
    markdownFile: "bentopdf.md",
  },
];
