import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../../../components/Section/Section";
import Link from "../../../components/Link/Link";
import { footer } from "../content.json";
import "./Footer.css";

const Footer = (): JSX.Element => (
  <Section id="footer">
    <Row>
      <Col xs={12} className="footer__left">
        <h4 className="footer__title">{footer.title}</h4>
        <p className="footer__body">
          A NFT Project created on the Solana Blockchain
        </p>
      </Col>
      <Col xs={12} className="footer__right">
        <h4 className="footer__find">Find Us</h4>
        <ul className="footer__ul">
          {footer.links.map((item) => (
            <li key={item.title} className="footer__li">
              <Link href={item.href} className="footer__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Col>
      <p className="footer__copyright">{footer.copyright}</p>
    </Row>
  </Section>
);

export default Footer;
