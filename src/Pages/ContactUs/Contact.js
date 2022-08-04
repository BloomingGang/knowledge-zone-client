import React from "react";
import LiveChat from "./LiveChat";
import MapLocation from "./MapLocation";
import SendMessage from "./SendMessage";

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-indigo-100">
      <div className="">
        <MapLocation />
      </div>
      <div className="">
        <SendMessage />
        <LiveChat />
      </div>
    </div>
  );
};

export default Contact;
