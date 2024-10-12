

'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HomeBanne() {
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
                    className="swiper-wrapper" >
                    <SwiperSlide >
                        <img src="./assets/images/All imgs/mobile/mobilebanner2.webp" alt="Image" style={{borderRadius:'0%',backgroundSize:'cover'}} id='mainbanner'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/mobile/Farhat2.webp" alt="Image" style={{borderRadius:'0%'}} id='mainbanner'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assets/images/All imgs/mobile/Farhat3.webp" alt="Image" style={{borderRadius:'0%'}} id='mainbanner'/>
                    </SwiperSlide>
                    
                    
                   
                  
                   
                    
                  
                    {/* <SwiperSlide>
                        <img src="./assets/images/cvr/crv 6.webp" alt="Image" />
                    </SwiperSlide> */}
                </Swiper>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div >
           
        </>
    )
}