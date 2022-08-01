import React from "react";
import LiveChat from "./LiveChat";
import MapLocation from "./MapLocation";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-100">
      <div className="flex-1">
        <MapLocation />
      </div>
      <div className="flex-1">
        <SendMessage />
        <LiveChat />
      </div>
    </div>
  );
};

export default Contact;
