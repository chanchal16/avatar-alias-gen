const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="./logo.svg" alt="triangle" width={28} height={28} />
      </a>
      <nav className="nav">
        <a
          href="https://www.npmjs.com/package/avatar-alias-gen"
          target="_blank"
        >
          NPM
        </a>
        <a
          href="https://github.com/chanchal16/avatar-alias-gen"
          target="_blank"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Header;