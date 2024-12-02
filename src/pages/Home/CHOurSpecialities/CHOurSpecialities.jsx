import clsx from "clsx";
import React from "react";
import { Container } from "react-bootstrap";
import { ourSpecialitiesList } from "../../../constant/data";
import styles from "./CHOurSpecialities.module.css";

export const CHOurSpecialities = () => {
  return (
    <>
      <section
        className={clsx(
          "section-py position-relative",
          styles.ourSpecialitiesSection
        )}
      >
        <Container>
          <span className="primary-title mb-4 d-block text-capitalize">
            The best Place of culinary
          </span>
          <h2 className="secondary-title text-white">our specialities</h2>
          <div className={styles.ourSpecialitiesGrid}>
            {ourSpecialitiesList &&
              ourSpecialitiesList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(styles.specialityFoodImgWrap, "ratio image-hover-scale")}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={"100%"}
                      height={"100%"}
                      className="object-fit-cover"
                    />
                    {/* <div className="h6 bg-woodprecker-green text-white d-flex justify-content-center align-items-center w-100 h-100">400x300</div> */}
                  </div>
                );
              })}
          </div>
        </Container>
      </section>
    </>
  );
};
