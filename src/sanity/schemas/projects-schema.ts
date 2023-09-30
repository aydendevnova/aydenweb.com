import { type PortableTextBlock, defineField, defineType } from "sanity";

export type ProjectSchema = {
  name: string;
  slug: string;
  showcase: boolean;
  timeline: string;
  tags: string[];
  role: PortableTextBlock[];
  techStack: PortableTextBlock[];
  teamMembers: PortableTextBlock[];
  description: string;
  liveLink: string | undefined;
  nextProjectSlug: string | undefined;
  content: string;
  image: string;
  bannerImage: string;
};

const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "showcase",
      title: "Showcase",
      type: "boolean",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "string",
    }),
    defineField({
      name: "nextProjectSlug",
      title: "Next Project Slug",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "bannerImage",
      title: "bannerImage",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    }),
  ],
});

export default projectsSchema;
