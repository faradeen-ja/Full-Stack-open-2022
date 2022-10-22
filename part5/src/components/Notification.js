import React from "react"

const Notification = function({ notification }) {
  if (notification === null) {
    return null
  }

  return <div className={notification.type}>{notification.message}</div>
}

export default Notification
