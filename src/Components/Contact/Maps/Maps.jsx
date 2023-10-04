import React from "react";
import "./Maps.scss";

const Maps = () => {
  return (
    <div className="maps">
      <iframe
        title="Google Map of Hyderabad"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.2759430424659!2d78.51294006957606!3d17.502559077979374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bcb273a37bf%3A0xd610927f193f92cf!2sDr.%20Naveen&#39;s%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1696364624489!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
