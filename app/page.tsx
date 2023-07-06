import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects()
  return (
   <main className="text-center p-2">
    <h1 className="text-4xl">Inicio</h1>
    <div>
      {projects.map((project) =>(
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
   </main>
    
  )
}


