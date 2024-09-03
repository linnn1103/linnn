import projects from "../../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import Sidebar from "../../components/Sidebar";
import "./Projects.css";

function Projects (){
  return (
    <div>
      <Sidebar />
      <section className="container" id="projects">
        <h2 className="title">Projects</h2>
        <div className="projects">
        {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    </div>
  )
}
export default Projects;