import React from "react";

const MapLocation = () => {
  return (
    <div>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7289.142505088145!2d90.31701162295458!3d24.010912738321167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dda343fb798b%3A0x8eb85c599592cb2b!2sKonabari!5e0!3m2!1sen!2sbd!4v1651840092241!5m2!1sen!2sbd"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
