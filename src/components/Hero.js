const Hero = ({ text, backdrop }) => {
  return (
    <header
      className="hero-container"
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <div className="overlay"></div>
      <div className="container text-center">
        <h1 className="hero-text">{text}</h1>
      </div>
    </header>
  );
};

export default Hero;
