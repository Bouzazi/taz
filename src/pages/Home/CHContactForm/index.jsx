import { Container, Row, Col, Form } from "react-bootstrap";
import { CHFormControl, CHButton } from "../../../components";
import clsx from "clsx";
import styles from "./CHContactForm.module.css";
// import { contactUsImgOne, contactUsImgThree, contactUsImgTwo } from "../../../constant/imageData";
export const CHContactForm = () => {
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
                Reservation
              </span>
              <h2 className="secondary-title text-start">Book a Table</h2>
            </Col>
            <Col xs={12}>
              <div className={styles.contactUsFormWrapper}>
                <Row className="align-items-center">
                  <Col xs={12} xl={6}>
                    <div
                      className={clsx(styles.contactUsImageWrapper, "d-grid")}
                    >
                      <div className={clsx(styles.gridImg, "ratio")}>
                        {/* <img src={contactUsImgOne} alt="contact-us-img-1" width={"100%"} height={"100%"} className="object-fit-cover" /> */}
                        <div className="h6 bg-shadowed-steel ch-text-white d-flex justify-content-center align-items-center w-100 h-100">
                          600x597
                        </div>
                      </div>
                      <div className={clsx(styles.gridImg, "ratio")}>
                        {/* <img src={contactUsImgTwo} alt="contact-us-img-2" width={"100%"} height={"100%"} className="object-fit-cover" /> */}
                        <div className="h6 bg-shadowed-steel ch-text-white d-flex justify-content-center align-items-center w-100 h-100">
                          600x597
                        </div>
                      </div>
                      <div className={clsx(styles.gridImg3, "ratio")}>
                        {/* <img src={contactUsImgThree} alt="contact-us-img-3" width={"100%"} height={"100%"} className="object-fit-cover" /> */}
                        <div className="h6 bg-shadowed-steel ch-text-white d-flex justify-content-center align-items-center w-100 h-100">
                          600x597
                        </div>
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
                              label="Name"
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
                              label="Email"
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
                          <Col xs={12} sm={6}>
                            <CHFormControl
                              controlid="namecontrolid"
                              id="timeId"
                              label="Time"
                              type="time"
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
                              label="Tell us more"
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
                              send
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
