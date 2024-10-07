// Card.js
import "./card.css";
import PropTypes from "prop-types";

const Card = ({ icon, title, description }) => (
  <div className="why-ucook__item">
    <div className="why-ucook__icon">
      <img src={icon} alt={`${title} Icon`} width={192} height={192} />
    </div>
    <div className="why-ucook__text">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// Prop validation
Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
