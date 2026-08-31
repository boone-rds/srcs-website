import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__utility">
        <div className="container site-header__utility-inner">
          <a href="/client-login">Client Login</a>
          <a href="/advisor-login">Advisor Login</a>

          <a
            href="https://raneydaysolutions.com/utilities"
            target="_blank"
            rel="noreferrer"
          >
            RDS Utilities ↗
          </a>
        </div>
      </div>

      <div className="container site-header__inner">
        <Link
          className="site-header__brand"
          to="/"
          aria-label="Soil-Right home"
        >
          <img
            className="site-header__logo"
            src="/images/brand/srcs-logo.png"
            alt="Soil-Right Consulting Services"
          />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <Link to="/what-we-do">What We Do</Link>
          <Link to="/#who-we-help">Who We Help</Link>
          <Link to="/#dig-deeper">Dig Deeper</Link>

          <div className="site-header__dropdown">
            <Link to="/#about" className="site-header__dropdown-trigger">
              About
              <span className="site-header__chevron" aria-hidden="true" />
            </Link>

            <div className="site-header__dropdown-menu">
              <Link to="/#about">About Soil-Right</Link>
              <Link to="/meet-the-team">Meet the Team</Link>
            </div>
          </div>
        </nav>

        <Link className="site-header__cta" to="/#contact">
          Start a Conversation
        </Link>
      </div>
    </header>
  );
}

export default Header;
