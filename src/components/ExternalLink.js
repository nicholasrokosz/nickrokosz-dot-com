import React from "react";
import style from "../styles/ExternalLink.module.css";

const ExternalLink = ({ url, text, icon }) => {
  return (
    <a href={url} target="_blank">
      {text}
      <img src={`logos/${icon}.svg`} className={style.icon} />
    </a>
  );
};

export default ExternalLink;
