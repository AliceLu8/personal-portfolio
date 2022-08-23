import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarouselSlider from "../components/CarouselSlider";
import { useParams } from "react-router-dom";
import { ProjectList } from "../data/ProjectList";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

function SingleWork() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    const project = ProjectList.filter((project) => project.id === id)[0];

    setProject(project);
  }, [id]);

  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="single-work" className="project-wrapper">
      <img src={project.bannerImgUrl} alt="movie banner" className="banner" />

      <h1>{project.title}</h1>
      <h4>{project.subtitle}</h4>

      <div className="project-container">
        <div className="overview">
          <h3>
            <strong>Overview:</strong>
          </h3>
          <p>{project.overview}</p>
        </div>

        <div className="team-dur-role">
          <h3>
            <strong>Team:</strong> <span>{project.team}</span>
          </h3>
          <h3>
            <strong>Duration:</strong> <span>{project.duration}</span>
          </h3>

          <h3>
            <strong>Tools:</strong> <span>{project.skills}</span>
          </h3>

          <h3>
            <strong>Role:</strong> <span>{project.role}</span>
          </h3>
        </div>

        <div className="links">
          <a href={project.live}>Live Site</a>
          <a href={project.gitHub}>GitHub</a>
        </div>

        <div className="design">
          <article className="design">
            <h3>
              <strong>Design Process: </strong>
            </h3>
            <p>{project.design}</p>
          </article>
        </div>

        {project.development && (
          <article className="development">
            <h3>
              <strong>Development Process:</strong>
            </h3>
            {project.development.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </article>
        )}

        <div className="carousel">
          <CarouselSlider imgSlider={project.imgSlider} />
        </div>

        <div className="take-away">
          <h3>
            <strong>Take Away: </strong>
          </h3>
          <p>{project.takeaway}</p>
        </div>

        <div className="scroll-up">
          <ScrollToTop />
        </div>

        <div className="return">
          <div className="return-work">
            <Link to="/work">View my other work</Link>
          </div>
          <div className="return-home">
            <Link to="/home">Return to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SingleWork;
