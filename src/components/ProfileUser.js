import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import {
  Email_Link,
  Github_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../utils/constants";

const ProfileUser = ({ gitData }) => {
  return (
    <div className="flex flex-row justify-evenly m-4 p-4">
      <a href={Linkedin_Link} className="w-22 h-22" target="_blank">
        <i>
          <BsLinkedin />
        </i>
      </a>
      <a href={Twitter_Link} className=" w-22 h-22" target="_blank">
        <i>
          <SiTwitter />
        </i>
      </a>
      <a href={Github_Link} className="w-22 h-22" target="_blank">
        <i>
          <SiGithub />
        </i>
      </a>
      <a href={Email_Link} className="w-22 h-22">
        <i>
          <SiGmail />
        </i>
      </a>
    </div>
  );
};

export default ProfileUser;
