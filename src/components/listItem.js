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
              <li>{feature}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
};

export default ListItem;
