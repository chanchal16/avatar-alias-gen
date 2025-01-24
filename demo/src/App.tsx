import { useState } from "react";
import "./App.css";
import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";
import { generateUsernameAndAvatar } from "randomize-it-js";

type Theme = "classic" | "emotional" | "elemental" | "tech";

const themes = ["classic", "emotional", "elemental", "tech"];

function App() {
  const [theme, setTheme] = useState<Theme>("classic");
  const [result, setResult] = useState<{
    username: string;
    avatar: string;
  } | null>({
    username: "generated username",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  });
  const [separatorEnable, setSeparatorEnable] = useState<boolean>(false);
  const generate = async () => {
    const data = await generateUsernameAndAvatar({
      theme,
      separator: separatorEnable,
    });
    setResult(data);
  };

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard!");
      new Notify({
        title: "Copied",
        text: "copied to clipboard",
        status: "success",
        effect: "fade",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        type: "outline",
        position: "right top",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <div className="demo-container">
      <h1>Random Username & Avatar Generator</h1>
      <div className="container">
        <div className="border">
          <label htmlFor="themes" className="block text-lg font-medium mb-2">
            Select a Theme:
          </label>
          <select
            id="themes"
            className="select-item"
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
          <div style={{ marginTop: "1rem" }}>
            <label htmlFor="separator">Add Separator</label>
            <input
              id="separator"
              type="checkbox"
              checked={separatorEnable}
              onChange={() => setSeparatorEnable(!separatorEnable)}
            />
          </div>
          <button className="button" onClick={generate}>
            Generate
          </button>
        </div>

        {result && (
          <div className="border">
            <h2 className="text-xl font-semibold">Generated Username:</h2>
            <div className="username-box">
              <p
                className={`text-lg ${
                  result.username === "generated username" && "placeholder"
                }`}
              >
                {result.username}
              </p>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(result.username)}
              >
                <img src="/copy.svg" alt="copy" />
              </button>
            </div>
            <h2 className="text-xl font-semibold mt-4">Generated Avatar:</h2>
            <div className="avatar-box">
              <img
                src={result.avatar}
                alt="Generated Avatar"
                className="mt-2 border rounded"
                style={{ width: "150px", height: "150px" }}
              />
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(result.avatar)}
              >
                <img src="/copy.svg" alt="copy-file" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;