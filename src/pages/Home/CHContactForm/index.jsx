import { Container, Row, Col, Form } from "react-bootstrap";
import { CHFormControl, CHButton } from "../../../components";
import clsx from "clsx";
import styles from "./CHContactForm.module.css";
import { contactUsImg1, contactUsImg2, contactUsImg3 } from "../../../constant/imageData";
import { useTranslation } from "react-i18next";
export const CHContactForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className={clsx(styles.contactUsSection, "section-py")}
        id="contactUsSection"
      >
        <Container>
          <Row>
            <Col xs={12}>
              <span className="primary-title d-block mb-4 text-start">
                  {t("InscriLabel")}
              </span>
              <h2 className="secondary-title text-start" style={{fontSize:"1.7em"}}>{t("RegistrationLabel")}</h2>
            </Col>
            <Col xs={12}>
              <div className={styles.contactUsFormWrapper}>
                <Row className="align-items-center">
                  <Col xs={12} xl={6}>
                    <div
                      className={clsx(styles.contactUsImageWrapper, "d-grid")}
                    >
                      <div className={clsx(styles.gridImg, "ratio")}>
                        <img src={contactUsImg1} alt="contact-us-img-1" width={"100%"} height={"100%"} className="object-fit-cover" /> 
                      
                      </div>
                      <div className={clsx(styles.gridImg, "ratio")}>
                        <img src={contactUsImg2} alt="contact-us-img-2" width={"100%"} height={"100%"} className="object-fit-cover" /> 
                       
                      </div>
                      <div className={clsx(styles.gridImg3, "ratio")}>
                        <img src={contactUsImg3} alt="contact-us-img-3" width={"100%"} height={"100%"} className="object-fit-cover" /> 
                       
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} xl={6} className="mt-5 mt-xl-0">
                    <div className={clsx(styles.formWrapper, "ch-bg-white")}>
                      <Form>
                        <Row>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="nameId"
                              label={t("Name")}
                              type="text"
                              placeholder=""
                              formGroupClassName=""
                              inputClassName=""
                              required
                            />
                          </Col>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="emailId"
                              label={t("Email")}
                              type="email"
                              placeholder=""
                              formGroupClassName=""
                              inputClassName=""
                              required
                            />
                          </Col>
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="dateId"
                              label="Date"
                              type="date"
                              placeholder=""
                              formGroupClassName=""
                              inputClassName=""
                              required
                            />
                          </Col>
                       
                          <Col xs={12}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="textareaId"
                              label={t("TellLabel")}
                              as="textarea"
                              rows="8"
                              placeholder=""
                              formGroupClassName=""
                              inputClassName=""
                              textAreaShow
                            />
                          </Col>
                          <div className="mt-5 pt-4">
                            <CHButton CHBtnClassname="text-uppercase m-auto text-jet">
                              {t("SInscriLabel")}
                            </CHButton>
                          </div>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
