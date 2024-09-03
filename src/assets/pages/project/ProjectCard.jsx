import PropTypes from 'prop-types';
import "./ProjectCard.module.css";
import { getIconUrl } from "../../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const links = [
    { href: demo, text: 'Demo', className: 'demo-link' },
    { href: source, text: 'Source', className: 'source-link' },
  ];

  return (
    <div className="container">
      <img
        src={getIconUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="image"
      />
      <h3 className="title">{title}</h3>
      <div className="divider">
        <br />
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill, id) => {
            return (
              <li key={id} className="skill">
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="links">
          {links.map((link, id) => {
            return (
              <li key={id} className="link">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={link.className}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};