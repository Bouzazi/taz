import { Col, Container, NavItem, NavLink, Row } from "react-bootstrap";
import { icons } from "../../constant/icons";
import clsx from "clsx";
import { restaurantTimeMap, socialLinksMap } from "../../constant/data";
import styles from "./CHFooter.module.css";
// import { chfLogo } from "../../constant/imageData";
export const CHFooter = () => {
  return (
    <>
      <footer className={clsx(styles.footerSection, "section-pt")}>
        <Container>
          <div className={clsx(styles.footerGridWrap, "d-grid section-pb")}>
            <a
              href="/"
              className={clsx(styles.footerLogoWrap, "w-100 mb-4 mb-sm-0")}
            >
              {/* <Image src={chfLogo} alt="Cooking Healthy Food Logo" fluid /> */}
              <div className="bg-sugar-milk w-100 text-jet d-flex justify-content-center align-items-center">
                130X66
              </div>
            </a>
            <div className={styles.footerDetailsCard}>
              <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
                address
              </span>
              <a
                href="https://maps.app.goo.gl/oRKaXU2yHh1r7eYk7"
                target="_blank"
                className="fw-normal ch-text-white line-height-normal"
              >
                956 ABCD Street, Surat, Gujarat
              </a>
            </div>
            <div className={styles.footerDetailsCard}>
              <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
                we are open
              </span>
              {restaurantTimeMap.map((restaurantItem, restaurantIndex) => {
                return (
                  <div className="w-100" key={restaurantIndex}>
                    <div className="d-flex gap-3">
                      <strong className="ch-text-white">
                        {restaurantItem.restaurantWeek}:
                      </strong>
                      <p className="fw-normal ch-text-white line-height-normal">
                        {restaurantItem.restaurantTime}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.footerDetailsCard}>
              <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
                reservation
              </span>
              <a
                href="tel:+916382791462"
                className="fw-normal ch-text-white line-height-normal d-block"
              >
                +916382791462
              </a>
              <a
                href="mailto:abcdef@gmail.com"
                className="fw-normal ch-text-white line-height-normal d-block"
              >
                abcdef@gmail.com
              </a>
            </div>
            <div className={styles.footerDetailsCard}>
              <span className="d-block fw-bold ch-text-white line-height-normal text-uppercase">
                stay connected
              </span>
              <ul className="d-flex align-items-center gap-4">
                {socialLinksMap.map((socialIconItem, socialIndex) => {
                  return (
                    <li key={socialIndex}>
                      <a
                        href={socialIconItem.socialLink}
                        target="_blank"
                        className="d-flex align-items-center justify-content-center rounded-circle"
                      >
                        <span className="d-flex justify-content-center align-items-center mb-0">
                          {socialIconItem.socialIconName}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
        <div className={styles.copyrightWrapper}>
          <span className="p sm d-block text-center ch-text-white">
            © 2024 Restaurant Landing, Made by Omnibubble.
          </span>
        </div>
      </footer>
    </>
  );
};
