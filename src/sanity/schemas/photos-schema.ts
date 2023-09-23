import { defineField, defineType } from "sanity";

export type PhotosSchema = {
  image: string;
  showCaseIndex: boolean;
};

const photosSchema = defineType({
  name: "photos",
  title: "Photos",
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
    defineField({
      name: "showCaseIndex",
      title: "Show Case Index",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "orderRank",
      title: "Order Rank",
      type: "string",
    }),
  ],
});

export default photosSchema;
