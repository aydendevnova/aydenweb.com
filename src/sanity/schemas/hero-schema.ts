import {
  PortableTextBlock,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export type Hero = {
  pathname: string;
  topText: string;
  header: PortableTextBlock[];
  description: PortableTextBlock[];
};

const heroSchema = defineType({
  name: "hero",
  title: "HeroSection",
  type: "document",
  fields: [
    defineField({
      name: "pathname",
      title: "Pathname",
      type: "string",
    }),
    defineField({
      name: "topText",
      title: "Top Text",
      type: "string",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export default heroSchema;
