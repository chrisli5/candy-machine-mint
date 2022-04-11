import Col from "react-bootstrap/Col";
import Card from "../Card/Card";
import "./Footer.css";
import { Row } from "react-bootstrap";

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
    <Col xs={12} md={8} className="mb-2">
      <h4 className="footer__title">Kyubits NFT</h4>
      <p className="footer__copyright">
        © 2022 Kyubits NFT. All Rights Reserved.
      </p>
    </Col>
    <Col xs={12} md={4}>
      <h4 className="footer__contact">Contact Us</h4>
      <FooterLink href="https://discord.gg/HUa4jd2Km5">Discord</FooterLink>
      <FooterLink href="https://twitter.com/KyubitsNFT">Twitter</FooterLink>
      <FooterLink href="mailto:kyubitsnft@gmail.com">Email</FooterLink>
      <FooterLink href="">Terms and Services</FooterLink>
    </Col>
  </Card>
);

export default Footer;
