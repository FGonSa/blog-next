import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk"

const config = defineConfig({
    projectId: "w4nw8ydx",
    dataset: "production",
    title: "Franky's Next Blog",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
})

export default config;