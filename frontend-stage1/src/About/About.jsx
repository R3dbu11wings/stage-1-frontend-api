import "./About.css";

function About() {
  return (
    <div className="about">
   <div className="about__image-container">
  <img 
    src="../../public/smile.svg" 
    alt="Author" 
    className="about__image"
  />
  <p className="about__image-text">Placeholder image. Put an image of yourself here.</p>
</div>
        <div className="about__container">
      <h1 className="about__title">About the Author</h1>
      <p className="about__paragraph">
        This block describes the project author.
         Here you should indicate your name, what you do, and which development technologies you know. 
         You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers.
      </p>
        </div>
    </div>
  );
}

export default About;