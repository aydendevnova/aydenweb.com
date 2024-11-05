import { type PortableTextBlock, defineField, defineType } from "sanity";

export type ArchiveSchema = {
  logo: string;
  text: string;
  description: PortableTextBlock[];
  image: string;
  liveLink?: string;
  sourceLink?: string;
};

const archiveSchema = defineType({
  name: "archive",
  title: "Archive",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "url",

      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "sourceLink",
      title: "Source Link",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    }),
  ],
});

export default archiveSchema;
