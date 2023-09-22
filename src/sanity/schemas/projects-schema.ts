import { PortableTextBlock, defineField, defineType } from "sanity";

export type ProjectSchema = {
  name: string;
  showcase: boolean;
  tags: string[];
  description: string;
  liveLink: string;
  image: string;
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
      name: "showcase",
      title: "Showcase",
      type: "boolean",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
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
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});

export default projectsSchema;
