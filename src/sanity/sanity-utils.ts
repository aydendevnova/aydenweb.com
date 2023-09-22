import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { Hero } from "./schemas/hero-schema";
import { env } from "~/env.mjs";
import { Services } from "./schemas/services-schema";

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-09-21",
  useCdn: true,
});

export async function getHero(pathname: string) {
  const query = groq`*[_type == "hero" && pathname == $pathname][0]{
    topText,
    header,
    description,
  }`;
  const params = { pathname };

  const data = await client.fetch(query, params);

  return data as Hero;
}

export async function getServices() {
  const query = groq`*[_type == "services"][0]{
    headerText,
    services
  }`;

  const data = await client.fetch(query);

  return data as Services;
}
