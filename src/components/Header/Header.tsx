import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../ContactModal/ContactModalContext';
import './Header.css';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openContactModal } = useContactModal();

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="site-header__utility">
        <div className="container site-header__utility-inner">
          <span className="site-header__coming">Client Login</span>
          <span className="site-header__coming">SR Advisor Login</span>

          <a
            href="https://utilities.raneydaysolutions.com/"
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
          <Link to="/dig-deeper">Dig Deeper</Link>

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

        <Link
          className="site-header__cta"
          to="/#contact"
          onClick={(event) => {
            event.preventDefault();
            openContactModal();
          }}
        >
          Start a Conversation
        </Link>

        <button
          className={`site-header__menu-button ${
            mobileOpen ? 'site-header__menu-button--open' : ''
          }`}
          type="button"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}>
        <nav
          className="container mobile-nav__inner"
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav__primary">
            <Link to="/what-we-do" onClick={closeMobileMenu}>
              What We Do
            </Link>
            <Link to="/#who-we-help" onClick={closeMobileMenu}>
              Who We Help
            </Link>
            <Link to="/dig-deeper" onClick={closeMobileMenu}>
              Dig Deeper
            </Link>
            <Link to="/#about" onClick={closeMobileMenu}>
              About Soil-Right
            </Link>
            <Link to="/meet-the-team" onClick={closeMobileMenu}>
              Meet the Team
            </Link>
          </div>

          <div className="mobile-nav__actions">
            <Link
              className="mobile-nav__cta"
              to="/#contact"
              onClick={(event) => {
                event.preventDefault();
                closeMobileMenu();
                openContactModal();
              }}
            >
              Start a Conversation
            </Link>
          </div>

          <div className="mobile-nav__access">
            <span>Access</span>

            <span className="mobile-nav__coming">Client Login</span>
            <span className="mobile-nav__coming">SR Advisor Login</span>

            <a
              href="https://utilities.raneydaysolutions.com/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
            >
              RDS Utilities ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
