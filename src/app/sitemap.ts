import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nexgentech.dev";

  const works = [
    "afrix",
    "aquafarm",
    "bruthol",
    "cryptobills",
    "exonec",
    "glotrade",
    "naijadevhub",
    "najatalk",
    "nexgen-hotel",
    "payunify",
    "plugng",
    "renthub",
    "tripcarry",
  ];

  const workUrls = works.map((work) => ({
    url: `${baseUrl}/work/${work}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...workUrls,
  ];
}
