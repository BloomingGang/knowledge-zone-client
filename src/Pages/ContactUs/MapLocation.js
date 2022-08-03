import React from "react";

const MapLocation = () => {
  return (
    <div className="p-6">
      <iframe
        className="w-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.73151029736!2d90.40142131358165!3d23.79257338456854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c720e1c93f6f%3A0xed3ded8aa3836538!2sBanani!5e0!3m2!1sen!2sbd!4v1658841461029!5m2!1sen!2sbd"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapLocation;
