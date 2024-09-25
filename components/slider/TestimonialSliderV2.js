
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
        nextEl: ".swiper-button-next-tes",
        prevEl: ".swiper-button-prev-tes",
    },
    loop: true,
    speed: 600,
    parallax: true,
}
export default function TestimonialSliderV2() {
    return (
        <>
            <div className="swiper testimonial-swiper mt-20">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">A propos de Farhat Frères</span>
                        <h3 className="title">Qui sommes-nous ?</h3>
                        <p className="description">Farhat Frères est un distributeur automobile de premier plan basé à Abidjan, en Côte d'Ivoire. Nous sommes spécialisés dans l'offre de véhicules de haute qualité de grandes marques mondiales, ainsi que dans une large sélection de voitures d'occasion et de services de location de voitures. Notre mission est d'offrir un service à la clientèle exceptionnel et de fournir une expérience d'achat de voiture transparente et personnalisée qui répond aux besoins uniques de chaque client
                        </p>
                        {/* <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt1.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div> */}
                    </SwiperSlide>
                    {/* <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">Trusted Car Delaer Service</span>
                        <h3 className="title">What client’s Says</h3>
                        <p className="description">The other hand we denounce with righteou indg ation and dis
                            men who are so beguiled and demorali ed by the of pleasure
                            moment.Dislike men who are so beguiled and demoraliz
                            by the charms of pleasure “
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt1.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className="testimonial-v2-content swiper-slide">
                        <span className="sub-title">Trusted Car Delaer Service</span>
                        <h3 className="title">What client’s Says</h3>
                        <p className="description">The other hand we denounce with righteou indg ation and dis
                            men who are so beguiled and demorali ed by the of pleasure
                            moment.Dislike men who are so beguiled and demoraliz
                            by the charms of pleasure “
                        </p>
                        <div className="wrap-avatar">
                            <div className="avatar">
                                <img src="./assets/images/testimonial/avt1.png" alt="avatar" />
                            </div>
                            <div className="info">
                                <div className="name">Leslie Alexander</div>
                                <div className="position">ThemeForest Exclusive</div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                {/* <div className="btn-next-prev">
                    <div className="swiper-button-next-tes next">
                        <i className="icon-Vector-11" />
                    </div>
                    <div className="swiper-button-prev-tes prev">
                        <i className="icon-Vector-2" />
                    </div>
                </div> */}
            </div>

        </>
    )
}
