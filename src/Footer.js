/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" css={CSS}>
      <Link to="/">
        <div >
          <span className="logo-ico">
            <ion-icon name="wallet-outline"></ion-icon>
          </span>
          <div className="logo__text">
            <span >Real  </span>
            <span>bank</span>
          </div>
        </div>
      </Link>
      <div className="sign">
        Made By{" "}
        <a
          href="https://www.linkedin.com/in/ayush-sharma-840506194/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i> Ayush sharma
        </a>
      </div>

      <div className="copyright">
        &#169; Copyright 2022-2023.
        <br />
        All rights reserved.
      </div>
    </div>
  );
}

const CSS = css`
  height: 4.5rem;
  background: rgb(3, 4, 94);
  background: linear-gradient(
    45deg,
     rgb(146 146 146) 0%, 
     rgb(220 213 255) 33%, 
     rgb(255 253 253) 100% 
  );
  color: var(--powder-blue);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  bottom: 0;
  opacity: 60%;

  a {
    color: var(--powder-blue);
  }

  .logo {
    display: flex;
    width: 200px;
    height: 2.5rem;
    padding-left: 1rem;
   

    .logo-ico {
      color: var(--sky-blue-crayola);
      font-size: 2.5rem;
      
    }

    .logo__text {
      font-family: "Raleway", sans-serif;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-transform: capitalize;
      margin-left: 5px;
      padding-left: 5px;
      font-size: 18px;
      border-left: 2px solid var(--powder-blue);
      opacity: 100%;
    }
  }

  .sign {
    a {
      color: blue;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--powder-blue);
    }
  }

  .copyright {
    text-align: center;
  }

  @media screen and (max-width: 710px) {
    flex-direction: column;
    height: 25vh;
  }
`;

export default Footer;
