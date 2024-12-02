import React from "react";
import { Container } from "react-bootstrap";
import { clsx } from "clsx";
import { chfDoe, fennel } from "../../../constant/imageData";
import styles from "./CHDiscover.module.css";

export const CHDiscover = () => {
  return (
    <section className={clsx("section-py", styles.CHDiscoverSection)}>
      <Container>
        <span className="primary-title mb-4 d-block">Discover</span>
        <h2 className="secondary-title">Where Vision Meets Reality</h2>
        <div>
          <div className={styles.storyCard}>
            <div className={clsx(styles.storyCImgWrap, "d-flex w-100 position-relative")}>
              <div className={clsx(styles.storyImgCard, "ratio position-relative")}>
                <img
                  src={chfDoe}
                  alt="chef"
                  width={"100%"}
                  height={"100%"}
                  className={"object-fit-cover"}
                />
                {/* <div className="h4 bg-shadowed-steel ch-text-white d-flex justify-content-center align-items-center">478x591</div> */}
              </div>
              <div className={clsx(styles.storySubImgCard, "position-absolute w-100 h-100")}>
                {/* <div className="h6 bg-dugong ch-text-white d-flex justify-content-center align-items-center w-100 h-100">387x281</div> */}
                <img src={fennel} alt={"fennel-pasta"} width={"100%"} height={"100%"} className="object-fit-cover" />
              </div>
            </div>
            <div className={styles.storyContent}>
              <h3 className="fw-bold font-josefin text-capitalize text-jet mb-5">
                Where Flavor Meets Elegance
              </h3>
              <p className="text-capitalize text-shadowed-steel lh-16 text-ellipsis line-clamp-5 mb-4">
                Experience the pinnacle of Healthy food Dining with our award winning Restaurant , where everyone wants to be for the Healthy food and mind-blowing grilling.
                we Typically serve the best and most delicious food and drinks prepared with high quality ingredients that are maintained and cooked by our own expert cheifs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
