import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "620px" }}>
          <p className="section-label">Our Projects</p>
          <h2 className="section-heading">Explore Our Latest Work</h2>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                className="project-card text-decoration-none d-block"
              >
                <img
                  src={`/project_assets/${project.folder}/${project.images[0]}`}
                  alt={project.title}
                />

                <div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;