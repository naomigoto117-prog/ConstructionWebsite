import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h1>Project Not Found</h1>
          <Link to="/" className="btn btn-primary mt-4">
            Back Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const coverImage = `/project_assets/${project.folder}/${project.images[0]}`;
  const galleryImages = project.images.slice(1);

  return (
    <>
      <Navbar />

      <section
        className="project-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.68), rgba(0,0,0,.58)), url(${coverImage})`,
        }}
      >
        <div className="container">
          <p className="section-label">Featured Project</p>
          <h1>{project.title}</h1>
          <p>{project.type}</p>
          <Link to="/#projects" className="btn btn-primary mt-3">
            ← Back to Projects
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <p className="section-label">Project Overview</p>
              <h2 className="section-heading">Designed With Precision</h2>
              <p>
                This project highlights Arkitekt Construction’s focus on
                practical design, structural planning, and clear construction
                documentation.
              </p>
              <p>
                The gallery includes plan sheets, elevations, layouts, and
                technical drawings prepared for project development and
                construction coordination.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="project-info-card">
                <h3>Project Info</h3>
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Type:</strong> {project.type}</p>
                <p><strong>Status:</strong> Completed Design</p>
                <p><strong>Scope:</strong> Architectural & Construction Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "620px" }}>
            <p className="section-label">Project Gallery</p>
            <h2 className="section-heading">Plans And Drawings</h2>
          </div>

          <div className="row g-4">
            {galleryImages.map((image, index) => (
              <div className="col-lg-6" key={index}>
                <div className="gallery-card">
                  <img
                    src={`/project_assets/${project.folder}/${image}`}
                    alt={`${project.title} drawing ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div className="container text-center">
          <h2>Ready To Start Your Own Project?</h2>
          <p>
            Talk to our team and let us help bring your vision to life.
          </p>
          <Link to="/#contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectDetails;