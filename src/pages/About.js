import React from "react";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <div className="container">
        <article className="about-intro">
          <p>
            As a front-end web developer, I find great satisfaction in crafting
            visually appealing designs for websites and enjoy working with{" "}
            <span className="emphasize-text">HTML </span> and
            <span className="emphasize-text-css"> CSS </span> to bring them to
            life.
          </p>
          <br />
          <p>
            With a background in Interior Design and 8 years of experience in
            furniture design, I bring a unique blend of creativity and technical
            expertise to my work. My decision to transition into the tech sector
            was driven by a desire to expand my skillset and explore new
            possibilities.
          </p>
          <br />
          <p>
            Since then, I have developed a strong proficiency in HTML and CSS
            and have honed my skills in building
            <span className="emphasize-text-res"> responsive </span> and
            <span className="emphasize-text-fun"> functional </span>
            websites, and coding has become an integral part of my professional
            life. I am driven by the endless possibilities of the web industry.
            My goal is to leverage my expertise and creativity to make a
            meaningful contribution to the field of web design and development,
            pushing the boundaries of what is possible and driving innovation
            forward.
          </p>
        </article>
      </div>

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
    </section>
  );
}

export default About;
