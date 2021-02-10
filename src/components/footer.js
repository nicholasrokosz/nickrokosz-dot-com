import React from "react";
import PropTypes from "prop-types";

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2021 Built by{" "}
          <a href="https://github.com/nicholasrokosz" target="_blank">
            Nick Rokosz
          </a>{" "}
          with{" "}
          <a href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </a>
        </span>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
