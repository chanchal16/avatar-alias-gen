const Hero = ({ onGenerate, setTheme, theme }: any) => {
  const handleGenerate = () => {
    document
      .querySelector("#output")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    onGenerate(theme);
  };

  return (
    <section className="hero">
      <h1 className="heading">Create Your Unique Identity</h1>
      <p className="sub-heading">
        Choose a theme, and let us generate a random username and avatar for
        you.
      </p>
      <div className="theme-selector">
        <button
          className={`${theme === "classic" ? "selected-theme" : "theme-btn"}`}
          onClick={() => setTheme("classic")}
        >
          Classic
        </button>
        <button
          className={`${
            theme === "emotional" ? "selected-theme" : "theme-btn"
          }`}
          onClick={() => setTheme("emotional")}
        >
          Emotional
        </button>
        <button
          className={`${
            theme === "elemental" ? "selected-theme" : "theme-btn"
          }`}
          onClick={() => setTheme("elemental")}
        >
          Elemental
        </button>
        <button
          className={`${theme === "tech" ? "selected-theme" : "theme-btn"}`}
          onClick={() => setTheme("tech")}
        >
          Tech
        </button>
      </div>
      <button className="generate-button" onClick={handleGenerate}>
        Generate Now
      </button>
    </section>
  );
};

export default Hero;