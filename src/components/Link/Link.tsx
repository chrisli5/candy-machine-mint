import "./NavLink.css";

interface LinkProps {
  href: string;
  children: string;
  className?: string;
}

const Link = (props: LinkProps): JSX.Element => (
  <a
    rel="noopener noreferrer"
    href={props.href}
    target="_blank"
    className={props.className ? `navlink ${props.className}` : `navlink`}
  >
    {props.children}
  </a>
);

export default Link;
