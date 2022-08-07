import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function IconSocials() {
  return (
    <div className="icon-socials">
      <a href="https://www.linkedin.com/in/aliceludesign/">
        <FiLinkedin />
      </a>
      <a href="https://github.com/AliceLu8?tab=repositorie">
        <FiGithub />
      </a>
    </div>
  );
}

export default IconSocials;
