const Output = ({ username, avatar, onRegenerate }: any) => {
  return (
    <section className="output">
      <h2>Your Generated Identity</h2>
      <div className="output-content">
        <p>
          <strong>Username:</strong> {username}
        </p>
        <div className="avatar">
          {avatar && <img src={avatar} alt="Generated Avatar" />}
        </div>
        <button className="regenerate-button" onClick={onRegenerate}>
          Regenerate
        </button>
      </div>
    </section>
  );
};

export default Output;