import { Container, Image } from "react-bootstrap"
import { reviewsSwiperData } from "../../../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./CHReviews.module.css"
import clsx from "clsx";

export const CHReviews = () => {
  return (
    <>
      <section className={clsx(styles.reviewSection, "section-py position-relative")}>
        <Container className="z-1">
          <div>
            <span className="primary-title d-block mb-4">Reviews</span>
            <h2 className="secondary-title text-white">What client say about us</h2>
          </div>
          <div className={styles.reviewsSwiperWrapper}>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                481: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              autoplay={true}
              loop={true}
              modules={[Autoplay,]}
              className={styles.reviewSwiper}
            >
              {reviewsSwiperData.map((slider, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={clsx(styles.reviewSwiperCard, "ch-bg-white text-center d-flex flex-column justify-content-space-between gap-3")}>
                      <div>
                        <div className={clsx(styles.reviewAvatarCard, "d-flex align-items-center justify-content-center mx-auto rounded-circle overflow-hidden")}>
                          {/* <Image src={slider.imgSrc} className={"flex-0-auto w-100 h-100 object-fit-cover"} alt={`swiper-img-${index + 1}`} /> */}
                          <div className="p sm bg-dugong ch-text-white d-flex justify-content-center align-items-center w-100 h-100">73x73</div>
                        </div>
                        <p className="big font-josefin text-ellipsis line-clamp-4">{slider.reviewMessage}</p>
                      </div>
                      <span className="p sm d-block text-lemon-curry font-josefin mt-auto text-uppercase">{slider.name}</span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  )
}