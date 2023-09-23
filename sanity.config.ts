import { SchemaType, defineConfig } from "sanity";
import {
  DocumentListItemBuilder,
  ListItemBuilder,
  deskTool,
} from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "~/sanity/schemas";
import { env } from "~/env.mjs";
import {
  orderRankField,
  orderRankOrdering,
  orderableDocumentListDeskItem,
} from "@sanity/orderable-document-list";
// import { schemaTypes } from "./schemas";

const ORDERABLE_TYPES = ["projects", "about", "photos"];

export default defineConfig({
  name: "default",
  title: "aydens-net-v2",

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  basePath: "/admin",

  plugins: [
    deskTool({
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
