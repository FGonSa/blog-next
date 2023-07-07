import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"
import {visionTool} from '@sanity/vision'
import {schemaTypes} from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
    projectId,
    dataset,
    title: "Franky's Next Blog",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: {types: schemaTypes}
})

export default config;