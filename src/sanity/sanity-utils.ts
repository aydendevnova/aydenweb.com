import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import { env } from "~/env.mjs";
import { type HeroSchema } from "./schemas/hero-schema";
import { type ServicesSchema } from "./schemas/services-schema";
import { type ProjectSchema } from "./schemas/projects-schema";
import { type PhotosSchema } from "./schemas/photos-schema";
import { type SkillSchema } from "./schemas/skills-schema";
import { type ContactSchema } from "./schemas/contact-schema";
import { type AboutSchema } from "./schemas/about-schema";
import { type QuoteSchema } from "./schemas/quote-schema";

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-09-21",
  useCdn: true,
});

export async function getHero() {
  const query = groq`*[_type == "hero"]{
    topText,
    header,
    description,
    pathname
  }`;

  const data = await client.fetch(query);

  return data as HeroSchema[];
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
    query = groq`*[_type == "projects" && showcase == true]|order(orderRank){
      name,
      tags,
      showcase,
      description,
      liveLink,
      "slug": slug.current,
      "image": image.asset->url
    }`;
  } else {
    query = groq`*[_type == "projects"]|order(orderRank){
      name,
      tags,
      showcase,
      description,
      liveLink,
      "slug": slug.current,
      "image": image.asset->url
    }`;
  }

  const data = await client.fetch(query);

  return data as ProjectSchema[];
}

export async function getProject(slug: string) {
  const query = groq`*[_type == "projects" && slug.current == $slug][0]{
      name,
      timeline,
      tags,
      role,
      techStack,
      teamMembers,
      description,
      liveLink,
      nextProjectSlug,
      "image": image.asset->url,
      "bannerImage": bannerImage.asset->url,
      content,
    }`;

  const data = await client.fetch(query, {
    slug,
  });

  return data as ProjectSchema & {
    content: string;
  };
}

export async function getPhoto() {
  const query = groq`*[_type == "photos" && showCaseIndex][0]{
      "image": image.asset->url
    }`;

  const data = await client.fetch(query);

  return data as PhotosSchema;
}

export async function getSkills() {
  const query = groq`*[_type == "skills"][0]{
      headerText,
      skills[]{
        title,
        "image": image.asset->url
      }
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

export async function getAbout() {
  const query = groq`*[_type == "about"]|order(orderRank){
    header,
    description
  }`;
  const data = await client.fetch(query);
  return data as AboutSchema[];
}

export async function getQuotes() {
  const query = groq`*[_type == "quote"][0]{
    header,
    quotes[]{
      quoterName,
      content,
      quoterTitle,
      "quoterImage": quoterImage.asset->url,

    }
  }`;

  const data = await client.fetch(query);

  return data as QuoteSchema;
}

export async function getBlogs() {
  const query = groq`*[_type == "blog"][0]{
    title,
    "slug": slug.current,
    "publishDate": publishedAt,
    "updatedDate": updatedAt,
    tags,
    category,
    "thumbnail": image.asset->url,
    content
    

  }`;

  const data = await client.fetch(query);

  return data as QuoteSchema;
}
