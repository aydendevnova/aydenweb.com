import { type PortableTextBlock, defineField, defineType } from "sanity";

export type AboutSchema = {
  header: string;
  description: PortableTextBlock[];
};

const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
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
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    }),
  ],
});

export default aboutSchema;
