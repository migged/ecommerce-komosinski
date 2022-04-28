import { useState, createContext, useContext } from "react";
import "./NotificationServices.css";

const Notification = ({ message, severity }) => {
  const notificationStyles = {
    position: "absolute",
    top: 5,
    right: 5,
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    width: "auto",
    height: "auto",
    // backgroundColor: severity === "success" ? "green" : "red",
    padding: "10px 20px 10px 20px",
    color: "white",
    borderRadius: "10px",
  };

  if (message === "") {
    return null;
  }

  return (
    <div
      style={notificationStyles}
      className={severity === "success" ? "Success" : "Error"}
    >
      {message}
    </div>
  );
};

const NotificationContext = createContext();

export const NotificationServicesProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const setNotification = (severity, message) => {
    console.log("se ejecuta setnotification");
    setMessage(message);
    setSeverity(severity);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification message={message} severity={severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationServices = () => {
  return useContext(NotificationContext);
};
