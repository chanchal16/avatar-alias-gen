const About = () => {
  return (
    <section className="about">
      <h2>About Avatar-Alias-Gen</h2>
      <p>
        Avatar-Alias-Gen is a Reddit-inspired random username and avatar
        generator library. It allows you to create unique and creative
        identities based on different themes, such as Classic, Emotional,
        Elemental, and Tech. It exports the following functions:
      </p>
      <ul>
        <li>
          <strong>generateUsername(theme,separator)</strong>: Generates a random
          username based on the selected theme.
        </li>
        <li>
          <strong>generateAvatar(theme,username)</strong>: Generates a random
          avatar based on the selected theme and username.
        </li>
        <li>
          <strong>generateUsernameAndAvatar(theme,separator)</strong>: Generates
          both a random username and avatar based on the selected theme.
        </li>
      </ul>

      <p className="example-desc">
        Below are example implementations of{" "}
        <span
          style={{
            color: "#1da1f2",
            textDecorationLine: "underline",
            textDecorationStyle: "double",
          }}
        >
          avatar-alias-gen
        </span>{" "}
        in different JavaScript frameworks:
      </p>
      <div className="examples">
        <a
          href="https://codesandbox.io/p/sandbox/react-example-m5x6dr"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Example
        </a>
        <a
          href="https://codesandbox.io/p/devbox/vue-example-r3lzv5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vue Example
        </a>
        <a
          href="https://codesandbox.io/p/devbox/anglar-example-1-z3vlnd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Angular Example
        </a>
      </div>
      <p>
        Whether you're building a social platform, a game, or just need a fun
        way to generate usernames and avatars, Avatar-Alias-Gen has you covered!
      </p>
      <h3>How It Works</h3>
      <ul>
        <li>Choose a theme from the available options.</li>
        <li>Click "Generate Now" to create a random username and avatar.</li>
        <li>Enable separator to add separator in the username.</li>
        <li>Regenerate as many times as you like to find the perfect match!</li>
      </ul>
    </section>
  );
};

export default About;