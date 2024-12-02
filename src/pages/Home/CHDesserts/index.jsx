import { Col, Container, Row } from "react-bootstrap"
import clsx from "clsx"
import styles from "./CHDesserts.module.css"
import { dessertsNamesData, drinkNamesData } from "../../../constant/data"
import { dessert, drink } from "../../../constant/imageData"

export const CHDesserts = () => {
  return (
    <>
      <section className={clsx(styles.dessertsSection, "section-py")}>
        <Container>
          <div className={styles.drinksWrapper}>
            <Row className="align-items-center">
              <Col md={6} className="order-md-0 order-1">
                <div className={styles.dessertsWrapper}>
                  <h4 className={clsx(styles.dessertsTitle, "font-josefin text-jet text-uppercase fw-bold")}>drinks & Beverages</h4>
                  <div className={styles.dessertsDishesWrapper}>
                    {drinkNamesData.map((drink, index) => {
                      return (
                        <a href="#contactUsSection" key={index} className={clsx(styles.dessertAnchor, "d-block")}>
                          <div className={styles.dessertDishCard} >
                            <div className={clsx(styles.dessertNameCard, "d-flex align-items-center justify-content-between gap-4")}>
                              <h5 className="font-josefin text-jet text-capitalize fw-bold">{drink.drinkName}</h5>
                              <span className="h5 big font-josefin text-lemon-curry fw-bold">{drink.price}</span>
                            </div>
                            <p className="text-shadowed-steel">{drink.drinkVariant}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Col>
              <Col md={6} className="mb-md-0 mb-5">
                <div className={clsx(styles.dessertsImgWrap, "ratio")}>
                  <img src={drink} alt={"drink-img"} width={"100%"} height={"100%"} className="object-fit-cover" />
                  {/* <div className="h6 bg-woodprecker-green ch-text-white d-flex justify-content-center align-items-center w-100 h-100">600x597</div> */}
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="align-items-center">
              <Col md={6} className="mb-md-0 mb-5">
                <div className={clsx(styles.dessertsImgWrap, "ratio")}>
                  <img src={dessert} alt={"dessert-img"} width={"100%"} height={"100%"} className="object-fit-cover" />
                  {/* <div className="h6 bg-woodprecker-green ch-text-white d-flex justify-content-center align-items-center w-100 h-100">600x597</div> */}
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.dessertsWrapper}>
                  <h4 className={clsx(styles.dessertsTitle, "font-josefin text-jet text-uppercase fw-bold")}>cakes & desserts</h4>
                  <div className={styles.dessertsDishesWrapper}>
                    {dessertsNamesData.map((dessert, index) => {
                      return (
                        <a href="#contactUsSection" key={index} className={clsx(styles.dessertAnchor, "d-block")}>
                          <div className={styles.dessertDishCard}>
                            <div className={clsx(styles.dessertNameCard, "d-flex align-items-center justify-content-between gap-4")}>
                              <h5 className="font-josefin text-jet text-capitalize fw-bold">{dessert.dessertName}</h5>
                              <span className="h5 big font-josefin text-lemon-curry fw-bold">{dessert.price}</span>
                            </div>
                            <p className="text-shadowed-steel">{dessert.dessertVariant}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}