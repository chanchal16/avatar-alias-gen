const ThemeShowcase = ({ onSelectTheme }: any) => {
  const themes = [
    {
      name: "Classic",
      description: "Traditional Reddit-style usernames",
    },
    { name: "Emotional", description: "Expressive and mood-based identities." },
    { name: "Elemental", description: "Inspired by nature and the elements." },
    { name: "Tech", description: "Futuristic and tech-inspired usernames." },
  ];

  const applyTheme = (theme: string) => {
    const output = document.querySelector("#output");
    output?.scrollIntoView({ behavior: "smooth", block: "start" });
    onSelectTheme(theme.toLowerCase());
  };

  return (
    <section className="theme-showcase">
      <h2 className="theme-heading">Explore Themes</h2>
      <div className="theme-cards">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card">
            <h3>{theme.name}</h3>
            <p>{theme.description}</p>
            <button onClick={() => applyTheme(theme.name)}>
              Try This Theme
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeShowcase;