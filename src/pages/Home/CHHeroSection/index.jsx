
import { Container } from "react-bootstrap";

import { CHButton } from "../../../components";
import { useTranslation } from "react-i18next";
import styles from "./CHHeroSection.module.css";

export const CHHeroSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.heroSection} id="_heroSection_syk8k_1" >
        <Container>
          
          <div>
          
            <span className="h1 small font-satisfy text-lemon-curry fw-normal text-center d-block mb-4 pb-1">
             {t("El_WaeedCulinatifLabe")} 
            </span>
            <h1 className="text-uppercase fw-bold text-white text-center font-josefin">
            {t("La_PassionLabel")}
            </h1>
            <div className="mt-5 pt-4 d-flex justify-content-center">
              <a href="#deliciousMenuSection" className="d-inline-block">
                <CHButton CHBtnClassname="text-uppercase">
                {t("Au_cœurLabel")}
                </CHButton>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
