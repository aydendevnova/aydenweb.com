import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { HeroSchema } from "./schemas/hero-schema";
import { env } from "~/env.mjs";
import { ServicesSchema } from "./schemas/services-schema";
import { ProjectSchema } from "./schemas/projects-schema";
import imageUrlBuilder from "@sanity/image-url";
import { IndexSchema } from "./schemas/index-schema";
import { SkillSchema } from "./schemas/skills-schema";
import { ContactSchema } from "./schemas/contact-schema";

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-09-21",
  useCdn: true,
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getHero(pathname: string) {
  const query = groq`*[_type == "hero" && pathname == $pathname][0]{
    topText,
    header,
    description,
  }`;
  const params = { pathname };

  const data = await client.fetch(query, params);

  return data as HeroSchema;
}

export async function getServices() {
  const query = groq`*[_type == "services"][0]{
    headerText,
    services
  }`;

  const data = await client.fetch(query);

  return data as ServicesSchema;
}

export async function getProjects(options: { showcaseOnly: boolean }) {
  let query;
  if (options?.showcaseOnly) {
    query = groq`*[_type == "projects" && showcase == true]{
      name,
      tags,
      description,
      liveLink,
      "image": image.asset->url
    }`;
  } else {
    query = groq`*[_type == "projects"]{
      name,
      tags,
      description,
      liveLink,
      "image": image.asset->url
    }`;
  }

  const data = await client.fetch(query);

  return data as ProjectSchema[];
}

export async function getIndex() {
  const query = groq`*[_type == "index"][0]{
      "image": image.asset
    }`;

  const data = await client.fetch(query);

  return data as IndexSchema;
}

export async function getSkills() {
  const query = groq`*[_type == "skills"][0]{
      headerText,
      skills
    }`;

  const data = await client.fetch(query);

  return data as SkillSchema;
}

export async function getContact() {
  const query = groq`*[_type == "contact"][0]{
     contactHeader,
     description,
     footerText,
     socials[]{
       link,
       "icon": icon.asset->url
     }
    }`;

  const data = await client.fetch(query);

  return data as ContactSchema;
}
