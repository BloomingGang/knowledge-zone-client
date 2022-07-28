import React from "react";
import MapLocation from "./MapLocation";
import SendMessage from './SendMessage';

const Contact = () => {
  return (
    <div className="flex">
      <MapLocation />
      <SendMessage />
    </div>
  );
};

export default Contact;
