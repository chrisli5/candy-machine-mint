import Col from "react-bootstrap/Col";
import Card from "../Card/Card";
import "./Footer.css";

interface FooterLinkProps {
  children: string;
  href: string;
}

const FooterLink = (props: FooterLinkProps): JSX.Element => (
  <a
    rel="noopener noreferrer"
    href={props.href}
    className="footer__link"
    target="_blank"
  >
    <p>{props.children}</p>
  </a>
);

const Footer = (): JSX.Element => (
  <Card id="footer">
    <Col xs={12} lg={7}>
      <h4 className="footer__header">Kyubits NFT</h4>
      <p className="footer__copyright">
        © 2022 Kyubits NFT. All Rights Reserved.
      </p>
    </Col>
    <Col xs={12} lg={4} className="offset-lg-1">
      <h4 className="footer__header">Contact Us</h4>
      <FooterLink href="https://discord.gg/HUa4jd2Km5">Discord</FooterLink>
      <FooterLink href="https://twitter.com/KyubitsNFT">Twitter</FooterLink>
      <FooterLink href="mailto:kyubitsnft@gmail.com">
        Send us an Email
      </FooterLink>
      <FooterLink href="">Terms and Services</FooterLink>
    </Col>
  </Card>
);

export default Footer;
