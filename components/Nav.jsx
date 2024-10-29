import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    path: "about",
    name: "ABOUT",
    offset: -49,
  },
  {
    path: "create",
    name: "CREATE",
    offset: -180,
  },
  {
    path: "missions",
    name: "MISSIONS",
    offset: -39,
  },
  {
    path: "roadmap",
    name: "ROADMAP",
    offset: -69,
  },
  {
    path: "socials",
    name: "SOCIALS",
    offset: -69,
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles} relative flex items-center`}>
      {/* Links de navegación */}
      {links.map((link, index) => {
        return link.customUrl ? (
          <Link target="black" href={link.customUrl} key={index}>
            {link.name}
          </Link>
        ) : (
          <ScrollLink
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </ScrollLink>
        );
      })}

      {/* Imagen de corona fija sobre el enlace "CREATE" */}
      <div className="absolute top-[-10px] left-[31%] translate-x-[-50%]">
        <Image
          src="/nav/corona.png"
          width={30} // Ajusta el tamaño según tu diseño
          height={30}
          alt="Corona fija"
        />
      </div>
    </nav>
  );
};

export default Nav;
