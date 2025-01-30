import Notify from "simple-notify";
import {
  IconCopy,
  IconSquareLetterS,
  IconSquareLetterSFilled,
} from "@tabler/icons-react";

const Output = ({
  username,
  avatar,
  onRegenerate,
  isSeparatorEnabled,
  setIsSeparatorEnabled,
}: any) => {
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
    <section className="output">
      <h2>Your Generated Identity</h2>
      <div className="output-content">
        {avatar && (
          <div className="avatar-container">
            <div className="avatar-border">
              <img src={avatar} alt="Generated Avatar" className="avatar" />
            </div>

            <button
              onClick={() => copyToClipboard(avatar)}
              className="copy-btn"
            >
              <IconCopy />{" "}
            </button>
          </div>
        )}
        <div className="username-container">
          <p className="username">{username}</p>
          <button
            onClick={() => copyToClipboard(username)}
            className="copy-btn"
          >
            <IconCopy />{" "}
          </button>
        </div>
        <span>
          Add separator:{" "}
          <button
            className="toggle-btn"
            onClick={() => setIsSeparatorEnabled(!isSeparatorEnabled)}
          >
            {!isSeparatorEnabled ? (
              <IconSquareLetterS stroke={2} color="gray" />
            ) : (
              <IconSquareLetterSFilled stroke={2} color="#1da1f2" />
            )}
          </button>
        </span>
        <button className="regenerate-button" onClick={onRegenerate}>
          Regenerate
        </button>
      </div>
    </section>
  );
};

export default Output;