const ThemeShowcase = ({ onSelectTheme }: any) => {
  const themes = [
    {
      name: "Classic",
      description: "Timeless and simple usernames and avatars.",
    },
    { name: "Emotional", description: "Expressive and mood-based identities." },
    { name: "Elemental", description: "Inspired by nature and the elements." },
    { name: "Tech", description: "Futuristic and tech-inspired usernames." },
  ];

  return (
    <section className="theme-showcase">
      <h2 style={{ fontSize: "32px" }}>Explore Themes</h2>
      <div className="theme-cards">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card">
            <h3>{theme.name}</h3>
            <p>{theme.description}</p>
            <button onClick={() => onSelectTheme(theme.name.toLowerCase())}>
              Try This Theme
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeShowcase;