'use client';
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    observer: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    autoplay: {
        delay: 4000, // Autoplay delay in milliseconds (4 seconds)
        disableOnInteraction: false, // Continue autoplay even after interaction
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: { 
        nextEl: '.swiper-button-next-tes', 
        prevEl: '.swiper-button-prev-tes', 
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
                    <SwiperSlide>
                        <div className="images">
                            <img src="./assets/images/Home/Banner 1.webp" alt="image" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src="./assets/images/Home/Banner 2.webp" alt="image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="images">
                            <img src="./assets/images/Home/Banner 3.webp" alt="image" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" />
                {/* Add Navigation Buttons */}
                <div className="btn-next-prev">
                    <div className="swiper-button-next-tes next" style={{backgroundColor:"white"}}>
                        <i className="icon-Vector-11" style={{color:'red'}}></i>
                    </div>
                    <div className="swiper-button-prev-tes prev" style={{backgroundColor:"white"}}>
                        <i className="icon-Vector-2" style={{color:'red'}}></i>
                    </div>
                </div>
            </div>
        </>
    );
}
