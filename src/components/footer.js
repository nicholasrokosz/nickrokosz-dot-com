import React from "react";
import PropTypes from "prop-types";
import ExternalLink from "./ExternalLink";
import GithubLogo from "./logos/GithubLogo";
import GatsbyLogo from "./logos/GatsbyLogo";

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
          © 2022 Built by{" "}
          {/* <a href="https://github.com/nicholasrokosz" target="_blank">
            Nick Rokosz
          </a>{" "} */}
          <ExternalLink
            url="https://github.com/nicholasrokosz"
            text="Nick Rokosz"
          >
            <GithubLogo />
          </ExternalLink>
          with{" "}
          {/* <a href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </a> */}
          <ExternalLink url="https://www.gatsbyjs.org" text="Gatsby">
            <GatsbyLogo />
          </ExternalLink>
        </span>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
