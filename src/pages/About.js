import React from "react";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <div className="container">
        <article className="about-intro">
          <p>
            I love creating beautiful designs on websites and I enjoy working
            with HTML and CSS.
          </p>
          <br />
          <p>
            I came from an Interior Design background and have been working with
            furniture design for 8 years. I decided to take a step forward in my
            career and I chose to land myself in the tech sector.
          </p>
          <br />
          <p>
            After learning how to build responsive and function websites, coding
            has become a part of my life. There is a lot of potential in the
            world and my passion is to become a part of the web industry.
          </p>
        </article>

        <section className="skills-container">
          <div className="skills-item">
            <article className="technical-skills">
              <h3>Technical Skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
            </article>

            <article className="design-skills">
              <h3>Design Skills</h3>
              <ul>
                <li>Adobe XD</li>
                <li>Figma</li>
                <li>Invision</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
