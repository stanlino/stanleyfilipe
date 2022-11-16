import { Container } from "./styles";
import projects from "../../utils/projects";
import Image from "next/image";
import { Translate } from "../atomic/Text";

export function Projects() {
  return (
    <Container>
      <h2>
        <Translate text="titles.projects" />
      </h2>
      <div className="projects">
        { projects.map((project) => (
          <a key={project.name} href={project.demo} target="_blank" rel="noreferrer">
            <Image fill src={project.image} alt={project.name} />
            <div className="info">
              <strong>{project.name}</strong>
              <p>{project.description}</p>

              <div className="techs">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <span>
                <Translate text="buttons.open" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Container>
  )
}