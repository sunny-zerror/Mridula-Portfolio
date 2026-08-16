export const dynamic = 'force-static';

import { absoluteUrl } from "@/utils/url";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
