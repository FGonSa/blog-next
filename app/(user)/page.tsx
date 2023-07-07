import { groq } from "next-sanity"
import {client} from "../../lib/sanity.client"
import BlogList from "../components/BlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
export default async function userPage() {
  
  const posts = await client.fetch(query);
return(
   <main className="text-center p-2">
    User
    <BlogList posts={posts} />
   </main>
    
  )
}


