import { SchemaType, defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import schemas from "./src/sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { markdownSchema } from "sanity-plugin-markdown";
import { structureTool } from "sanity/structure";

const ORDERABLE_TYPES = ["projects", "about", "photos", "archive"];

export default defineConfig({
  name: "default",
  title: "aydens-net-v2",
  projectId: "3g4csmfm",
  dataset: "production",
  basePath: "/admin",

  plugins: [
    markdownSchema(),
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            ...S.documentTypeListItems().filter(
              (item) =>
                !ORDERABLE_TYPES.includes(
                  (item.getSchemaType() as SchemaType)?.name,
                ),
            ),

            orderableDocumentListDeskItem({ type: "photos", S, context }),
            orderableDocumentListDeskItem({ type: "projects", S, context }),
            orderableDocumentListDeskItem({ type: "about", S, context }),
            orderableDocumentListDeskItem({ type: "archive", S, context }),
          ]);
      },
    }),
    visionTool(),
  ],

  schema: { types: schemas },

  // schema: {
  //   types: schemas.map((schema) => {
  //     return {...schema, {
  //         orderings: [orderRankOrdering],
  //         fields: [
  //           // Minimum required configuration
  //           orderRankField({ type: "category" }),

  //           // ...all other fields
  //         ],
  //       },
  //     }
  //   }),
  // },
});
