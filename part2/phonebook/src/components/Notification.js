import React from "react";

const Notification = function (message, error = false) {
  if (message) {
    if (error) {
      return <div className="error">{message}</div>;
    } else {
      return <div className="message">{message}</div>;
    }
  }
  return null;
};

export { Notification };
