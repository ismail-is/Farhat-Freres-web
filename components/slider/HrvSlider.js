

'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HrvSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <div className="swiper property-gallary2">
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="swiper-wrapper">
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 2.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 3.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 4.webp" alt="Image" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 5.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 6.webp" alt="Image" />
                    </SwiperSlide>
                   
                    
                  
                    {/* <SwiperSlide>
                        <img src="./assets/images/cvr/crv 6.webp" alt="Image" />
                    </SwiperSlide> */}
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div >
            <div className="swiper property-gallary">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={7}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 5,
                        },
                    }}
                    className="swiper-wrapper">
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 2.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 3.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 4.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 5.webp" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/Hrv1/HRV 2024 6.webp" alt="Image" />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <img src="./assets/images/cvr/crv 6.webp" alt="Image" />
                    </SwiperSlide> */}
                    
                    
                    {/* <SwiperSlide>
                        <img src="./assets/images/gallary/thum7.jpg" alt="Image" />
                    </SwiperSlide> */}
                    {/* <SwiperSlide>
                        <img src="./assets/images/gallary/thum5.jpg" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/gallary/thum2.jpg" alt="Image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/gallary/thum3.jpg" alt="Image" />
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    )
}