import "../Style/Footer.css"
const Footer = () => {
    return(
        <>
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h3>CoderSite</h3>
      <p>Learn coding with quality courses and resources curated for beginners to experts.</p>
    </div>

    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section social">
      <h4>Connect</h4>
      <ul>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 CoderSite | All rights reserved.</p>
  </div>
</footer>

        </>
    )
}

export default Footer;