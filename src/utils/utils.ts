import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export function getServerPathname(headersList: ReadonlyHeaders) {
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathname] =
    fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

  return pathname?.trim() || "/";
}
