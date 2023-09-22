import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { Hero } from "./schemas/hero-schema";
import { env } from "~/env.mjs";

export default async function getHero(pathname: string) {
  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-09-21",
  });

  const query = groq`*[_type == "hero" && pathname == $pathname][0]{
    topText,
    header,
    description,
  }`;
  const params = { pathname };

  const data = await client.fetch(query, params);

  return data as Hero;
}
