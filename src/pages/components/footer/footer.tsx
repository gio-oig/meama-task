import { useContacts } from "../../../queryHook/useContacts";
import "./footer.css";

const Footer = () => {
  const { data } = useContacts();
  return (
    <div className="footer">
      <div>
        <div>
          <p>{data?.name}</p>
          <a className="footer-phone" href={`tel:${data?.value}`}>
            {data?.value}
          </a>
        </div>
      </div>
      <div className="socials">
        {data?.socialLinks.map(({ imageUrl, link }, i) => (
          <a key={i} rel="noreferrer" href={link} target="_blank">
            <img alt="" src={imageUrl} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
