import React from "react";
import MapLocation from "./MapLocation";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-1">
        <MapLocation />
      </div>
      <div className="flex-1">
        <SendMessage />
      </div>
    </div>
  );
};

export default Contact;
