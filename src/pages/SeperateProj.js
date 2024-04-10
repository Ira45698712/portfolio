import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import { NavLink } from "react-router-dom";
import '../styles/main.css'

const SeperateProj = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="constainer">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          {project.BtnGitHub && (<BtnGitHub link="https://github.com" />)}
          <NavLink to="/projects">
            <button className="btnReturn">Вернуться к проектам </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default SeperateProj;
