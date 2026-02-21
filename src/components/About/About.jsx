import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img
          src="../../src/assets/aboutimage.jpg"
          alt="Author"
          className="about__image"
        />
        <p className="about__image-text"></p>
      </div>
      <div className="about__container">
        <h1 className="about__title">About the Author</h1>
        <p className="about__paragraph">
          I'm Zachary Tesch, a full-stack web developer and U.S. Navy veteran.
          My journey into tech started on the shop floor as a CNC Machinist, I
          learned that programming a machine to execute precise instructions
          wasn't so different from writing code. That realization sparked a
          passion I couldn't ignore. After years of machining in the Navy and
          private industry, I enrolled in the TripleTen Software Engineering
          Bootcamp, where I built full-stack web applications from the ground
          up. There I deepened my skills in HTML, CSS, JavaScript, React, and
          Express.js learning not just how to build, but how to build things
          that last. The precision and attention to detail I developed on the
          shop floor now drive how I approach every project. Whether it's
          crafting a responsive UI or architecting a RESTful API, I bring the
          same discipline and problem-solving mindset to my code.
        </p>
      </div>
    </div>
  );
}

export default About;
