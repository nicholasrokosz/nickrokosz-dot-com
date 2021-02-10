import React from "react";
import style from "../styles/ExternalLink.module.css";

const ExternalLink = ({ url, text, children }) => {
  return (
    <a href={url} target="_blank">
      {text}
      {/* <img src={`logos/${icon}.svg`} className={style.icon} /> */}
      <div className={style.icon}>{children}</div>
    </a>
  );
};

export default ExternalLink;
