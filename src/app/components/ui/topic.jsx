import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Topic = ({ id, title }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/topics/${id}`);

  return (
    <div className="card mb-3" role="button" onClick={handleClick}>
      <div className="card-body fw-bold">{title}</div>
    </div>
  );
};

Topic.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Topic;
