import { PortableTextBlock, defineField, defineType } from "sanity";

export type Services = {
  headerText: string;
  services: Service[];
};

export type Service = {
  serviceName: string;
  serviceContent: PortableTextBlock[];
};

const servicesSchema = defineType({
  name: "services",
  title: "ServicesSection",
  type: "document",
  fields: [
    defineField({
      name: "headerText",
      title: "Header Text",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          name: "service",
          title: "Service",
          fields: [
            {
              name: "serviceName",
              title: "Service Name",
              type: "string",
            },
            {
              name: "serviceContent",
              title: "Service Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
  ],
});

export default servicesSchema;
