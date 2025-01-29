import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Output from "./components/Output";
import ThemeShowcase from "./components/ThemeShowcase";
import Footer from "./components/Footer";
import "./App.css";
import { generateUsernameAndAvatar } from "avatar-alias-gen";

type Theme = "classic" | "emotional" | "elemental" | "tech";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [theme, setTheme] = useState<Theme>("classic");
  const [separatorEnable, setSeparatorEnable] = useState<boolean>(false);

  const generate = async (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    const data = await generateUsernameAndAvatar({
      theme: selectedTheme,
      separator: separatorEnable,
    });
    setUsername(data.username);
    setAvatar(data.avatar);
  };

  const handleRegenerate = () => {
    generate(theme);
  };

  return (
    <div className="App">
      <Header />
      <Hero onGenerate={generate} setTheme={setTheme} theme={theme} />
      {username ||
        (avatar && (
          <Output
            username={username}
            avatar={avatar}
            onRegenerate={handleRegenerate}
          />
        ))}
      <ThemeShowcase onSelectTheme={generate} />
      <Footer />
    </div>
  );
};

export default App;