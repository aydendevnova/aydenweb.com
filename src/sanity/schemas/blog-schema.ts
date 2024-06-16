import { type PortableTextBlock, defineField, defineType } from "sanity";

export type BlogSchema = {
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

const blogSchema = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "publishDate",
      title: "PublishDate",
      type: "date",
    }),
    defineField({
      name: "updatedDate",
      title: "Updated Date",
      type: "date",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
    }),
  ],
});

export default blogSchema;
