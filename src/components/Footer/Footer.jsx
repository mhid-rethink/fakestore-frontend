import "./styles.css";

import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

import logo from "../../assets/logo.svg";

import Column from "./Column";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="leftFooter">
          {/* <h2 className="logoFooter">GREENMIND</h2> */}
          <img src={logo} alt="logomarca" className="logoFooter" />
          <p>
            We help you find <br /> your dream plant
          </p>
          <ul className="socialMediaContainer">
            <li>
              <a href="https://www.facebook.com/" className="socialMedia">
                {" "}
                <RiFacebookFill />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="socialMedia">
                {" "}
                <RiInstagramFill />{" "}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="socialMedia">
                {" "}
                <RiTwitterFill />{" "}
              </a>
            </li>
          </ul>
          <p>2023 all Right Reserved Term of use GREENMIND</p>
        </div>
        <Column title={"Information"}>
          <p>
            <a href="">About</a>
          </p>
          <p>
            <a href="">Product</a>
          </p>
          <p>
            {" "}
            <a href="">Blog</a>
          </p>
        </Column>
        <Column title={"Company"}>
          <p>
            <a href="">Community</a>
          </p>
          <p>
            <a href="">Career</a>
          </p>
          <p>
            <a href="">Our story</a>
          </p>
        </Column>
        <Column title={"Contact"}>
          <p>
            <a href="">Getting Started</a>
          </p>
          <p>
            <a href="">Pricing</a>
          </p>
          <p>
            <a href="">Resources</a>
          </p>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
