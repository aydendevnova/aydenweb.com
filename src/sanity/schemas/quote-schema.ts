import {
  Image,
  PortableTextBlock,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export type QuoteSchema = {
  header: string;
  quotes: Quote[];
};

export type Quote = {
  content: string;
  quoterName: string;
  quoterTitle: string;
  quoterImage: string;
};

const quoteSchema = defineType({
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "quotes",
      title: "Quotes",
      type: "array",
      of: [
        {
          type: "object",
          name: "quoteContent",
          title: "Quote Content",
          fields: [
            defineField({ name: "content", title: "Content", type: "string" }),
            defineField({
              name: "quoterName",
              title: "Quoter Name",
              type: "string",
            }),
            defineField({
              name: "quoterTitle",
              title: "Quoter Title",
              type: "string",
            }),
            defineField({
              name: "quoterImage",
              title: "Quoter Image",
              type: "image",
            }),
          ],
        },
      ],
    }),
  ],
});

export default quoteSchema;
