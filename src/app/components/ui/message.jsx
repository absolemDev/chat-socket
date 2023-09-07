import React from "react";
import PropTypes from "prop-types";
import localStorageService from "../../services/localStorage.service";

const Message = ({ login, message }) => {
  const isCurrentUser = login === localStorageService.getUserLogin();
  const styleCard = "card";
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{login}</div>
        <div className="card-text">{message}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  login: PropTypes.string,
  message: PropTypes.string,
};

export default Message;
