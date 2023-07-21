import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://github.com/Ashokkumar1302/calculator/blob/master/WhatsApp%20Image%202023-06-24%20at%2009.22.58.jpeg?raw=true"}
          alt="Founder"
        />

        <h2>Ashok Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ashok-kumar-20bb9a20a" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/ashti1302/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Ashokkumar1302" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
