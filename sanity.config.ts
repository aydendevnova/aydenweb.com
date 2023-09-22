import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "~/sanity/schemas";
import { env } from "~/env.mjs";
// import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "aydens-net-v2",

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
});
