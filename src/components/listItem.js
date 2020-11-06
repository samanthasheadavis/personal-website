import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ title, description, features }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <>
          <h4>Features:</h4>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ListItem.defaultProps = {
  features: null
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
};

export default ListItem;
