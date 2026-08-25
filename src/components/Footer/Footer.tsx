import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img
            src="/images/brand/srcs-logo.png"
            alt="Soil-Right Consulting Services"
          />

          <p>
            Independent consulting and education for better stewardship,
            stronger understanding, and more informed decisions.
          </p>
        </div>

        <div className="footer__links">
          <div>
            <span>Explore</span>
            <Link to="/#what-we-do">What We Do</Link>
            <Link to="/#who-we-help">Who We Help</Link>
            <Link to="/#dig-deeper">Dig Deeper</Link>
            <Link to="/#about">About</Link>
            <Link to="/meet-the-team">Meet the Team</Link>
          </div>

          <div>
            <span>Connect</span>
            <Link to="/#contact">Contact</Link>
            <a href="mailto:info@soilright.com">Email SRCS</a>
          </div>

          <div>
            <span>Access</span>
            <span className="footer__coming">Client Login</span>
            <span className="footer__coming">SR Advisor Login</span>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Soil-Right Consulting Services, Inc.
        </span>

        <span>Experience → Evidence → Decision</span>
      </div>
    </footer>
  );
}

export default Footer;
