import { type PortableTextBlock, defineField, defineType } from "sanity";

export type ContactSchema = {
  contactHeader: string;
  description: string;
  footerText: PortableTextBlock[];
  socials: Social[];
};

export type Social = {
  link: string;
  icon: string;
};

const contactSchema = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "contactHeader",
      title: "Contact Header",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
            }),
          ],
        },
      ],
    }),
  ],
});

export default contactSchema;
