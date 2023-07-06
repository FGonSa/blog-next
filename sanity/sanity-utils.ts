//Funciones utilizadas para realizar el fetch de datos

import {createClient, groq} from "next-sanity"

//GROQ es el GRAPHQL que usa SANITY para las consultas
//GraphQL nos devuelve los datos precisos que necesitamos
export async function getProjects() {
    const client = createClient({
        projectId: "w4nw8ydx",
        dataset: "production",
        apiVersion: "2023-03-04",
    })
    return client.fetch(
        groq`*[_type == "project"]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content,
        }`
    )
}

