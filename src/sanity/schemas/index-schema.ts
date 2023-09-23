import {
  Image,
  PortableTextBlock,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export type IndexSchema = {
  image: string;
};

const indexSchema = defineType({
  name: "index",
  title: "Index",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

export default indexSchema;
