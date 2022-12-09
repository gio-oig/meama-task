import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <p>დაგვიკავშირდით</p>
          <a className="footer-phone" href="tel:*08 08">
            *08 08
          </a>
        </div>
      </div>
      <div className="socials">
        <a rel="noreferrer" href="https://meama.ge/ka/home" target="_blank">
          <img
            alt=""
            src="https://cms.meamacollect.ge//meama-collect/application/upload-api/files/link_1615367822268.svg"
          />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/meamacollect/"
          target="_blank"
        >
          <img
            alt=""
            src="https://cms.meamacollect.ge//meama-collect/application/upload-api/files/instagram_1615367794272.svg"
          />
        </a>
        <a
          rel="noreferrer"
          href="https://www.facebook.com/MeamaCoffee"
          target="_blank"
        >
          <img
            alt=""
            src="https://cms.meamacollect.ge//meama-collect/application/upload-api/files/facebook_1615367767308.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
