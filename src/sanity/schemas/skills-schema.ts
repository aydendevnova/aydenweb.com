import {
  Image,
  PortableTextBlock,
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export type SkillSchema = {
  headerText: string;
  skills: Skill[];
};

export type Skill = {
  image: string;
  title: string;
};

const skillsSchema = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "headerText",
      title: "Header Text",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          name: "skill",
          title: "Skill",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              title: "Skill Image - (recommend 512x512)",
              type: "image",
            },
          ],
        },
      ],
    }),
  ],
});

export default skillsSchema;
