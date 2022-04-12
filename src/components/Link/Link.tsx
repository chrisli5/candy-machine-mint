import "./NavLink.css";

interface LinkProps {
  href: string;
  children: string;
}

const Link = (props: LinkProps): JSX.Element => (
  <a
    rel="noopener noreferrer"
    href={props.href}
    target="_blank"
    className="navlink"
  >
    {props.children}
  </a>
);

export default Link;
