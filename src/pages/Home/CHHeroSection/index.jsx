import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CHButton } from "../../../components";
import { chfLogo } from "../../../constant/imageData";
import styles from "./CHHeroSection.module.css";

export const CHHeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <Container>
          <div>
            <Link className={styles.logo} to="/">
              <img
                width={"100%"}
                height={"100%"}
                src={chfLogo}
                alt="Cooking Healthy Food Logo"
              />
              {/* <div className="bg-sugar-milk w-100 h-100 text-jet text-center">100X50</div> */}
            </Link>
            <span className="h1 small font-satisfy text-lemon-curry fw-normal text-center d-block mb-4 pb-1">
              Luxury Restaurant
            </span>
            <h1 className="text-uppercase fw-bold text-white text-center font-josefin">
              Feel the Taste
            </h1>
            <div className="mt-5 pt-4 d-flex justify-content-center">
              <a href="#deliciousMenuSection" className="d-inline-block">
                <CHButton CHBtnClassname="text-uppercase">
                  explore menu
                </CHButton>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
