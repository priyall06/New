import photo from "../assets/priyal.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="tag">
          ✨ React Developer
        </p>

        <h1>
          Hi, I'm Priyal Raut
        </h1>

        <h2>
          Frontend Developer &
          <br />
          Cloud Computing Student
        </h2>

        <p className="desc">
          Passionate about building beautiful,
          responsive and user-friendly web
          applications using React and modern
          technologies.
        </p>

        <button>
          View Projects
        </button>

      </div>

      <div className="hero-image">
        <img src={photo} alt="Priyal" />
      </div>

    </section>
  );
}

export default Hero;