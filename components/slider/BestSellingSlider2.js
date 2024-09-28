'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    observer: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 4000, // Autoplay delay in milliseconds (2 seconds)
        disableOnInteraction: false, // Continue autoplay even after interaction
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
    },
};


export default function BestSellingSlider2() {
    return (
        <>
            <div className="swiper mybest-selling2">
                <Swiper {...swiperOptions} className="best-selling swiper-wrapper">
                    <SwiperSlide >
                        <div className="images">
                            <img src="./assets/images/Home/Banner 1.webp" alt="image"  style={{width:'100%',height:'100%'}}/>
                        </div>
                        {/* <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5> */}
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="images">
                            <img src="./assets/images/Home/Banner 2.webp" alt="image" />
                        </div>
                        {/* <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5> */}
                    </SwiperSlide>
                    <SwiperSlide  >
                        <div className="images">
                            <img src="./assets/images/Home/Banner 3.webp" alt="image" />
                        </div>
                        {/* <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5> */}
                    </SwiperSlide>
                    {/* <SwiperSlide className="item swiper-slide" >
                        <div className="images">
                            <img src="./assets/images/All imgs/Home/homebanner.webp" alt="image" />
                        </div>
                       
                    </SwiperSlide> */}
                    {/* <SwiperSlide className="item swiper-slide">
                        <div className="images">
                            <img src="./assets/images/All imgs/Home/homebanner.webp" alt="image" />
                        </div>
                       
                    </SwiperSlide> */}









                    {/* <SwiperSlide className="item swiper-slide">
                        <div className="images">
                            <img src="./assets/images/car-list/sl1.png" alt="image" />
                        </div>
                        <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5>
                    </SwiperSlide>
                    <SwiperSlide className="item swiper-slide">
                        <div className="images">
                            <img src="./assets/images/car-list/sl2.png" alt="image" />
                        </div>
                        <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className="item swiper-slide">
                        <div className="images">
                            <img src="./assets/images/car-list/sl3.png" alt="image" />
                        </div>
                        <h5 className="name">
                            <Link href="/#" /><Link href="/dealer-details">Chevrolet Suburban 2021 mo</Link>
                        </h5>
                    </SwiperSlide> */}
                </Swiper>
                <div className="swiper-pagination" />
            </div>
        </>
    )
}
