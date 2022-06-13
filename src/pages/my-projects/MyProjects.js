import ProjectCard from "components/common/ProjectCard";
import "styles/pages/my-projects.scss";

export default function MyProjects() {
  return (
    <div className="my-projects-page">
      <div className="my-projects-title">
        <h1>Meus Projetos</h1>
      </div>
      <div className="my-projects-container">
        <button>EXCLUIR</button>
        <div className="flex g-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
