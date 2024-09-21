'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function SellingCar() {
    const [activeItem, setActiveItem] = useState(1);

  const handleMouseOver = (index) => {
    setActiveItem(index);
  };
    return (
        <>
            <div className="widget-selling-car" style={{marginTop:"-120px"}}>
                <div className="themesflat-container">
                    <div className="selling-car-wrap">
                        <div className="heading-section t-al-center mb-60">
                            <span className="sub-title mb-6 wow fadeInUp">Les meilleurs concessionnaires automobiles</span>
                            <h2 className="title wow fadeInUp">Voiture la plus vendue </h2>
                        </div>
                        <div className="selling-car">
                            <div className="selling-carpart">
                                {/* <div className="offer-bg">
                                    <div className="offer">
                                        <div className="offer-sale">29<span>% off</span></div>
                                    </div>
                                </div> */}
                                <div className="carpart">
                                    <img src="./assets/images/page/mast.png" alt="" className="mask" />
                                    <img src="./assets/images/All imgs/Kaiyi.webp" alt="" className="car" z/>
                                </div>
                                <div className={`item-dot right ${1 === activeItem ? 'active' : ''}`} onMouseOver={() => handleMouseOver(1)}>
                                    <Link href="/#">
                                        <div className="inner" >
                                            <div className="group-title">
                                                <div className="title">
                                                  car
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p>Lorem ipsum dolor sit amet ectetur adipisicing elit</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`item-dot dot-1 right ${2 === activeItem ? 'active' : ''}`} onMouseOver={() => handleMouseOver(2)}>
                                    <Link href="/#">
                                        <div className="inner">
                                            <div className="group-title">
                                                <div className="title">
                                                    Car Suspension Disc
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p>Lorem ipsum dolor sit amet ectetur adipisicing elit</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`item-dot dot-2 ${3 === activeItem ? 'active' : ''}`} onMouseOver={() => handleMouseOver(3)}>
                                    <Link href="/#">
                                        <div className="inner">
                                            <div className="group-title">
                                                <div className="title">
                                                    Car Suspension Disc
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p>Lorem ipsum dolor sit amet ectetur adipisicing elit</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`item-dot dot-3 ${4 === activeItem ? 'active' : ''}`} onMouseOver={() => handleMouseOver(4)}>
                                    <Link href="/#">
                                        <div className="inner">
                                            <div className="group-title">
                                                <div className="title">
                                                    Car Suspension Disc
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p>Lorem ipsum dolor sit amet ectetur adipisicing elit</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="selling-content">
                                <span className="sub-selling">Nouvelles Arrivées</span>
                                <h4 className="title-selling"> Kaiyi X7                                </h4>
                                <p className="des">For 15 years, we raising the standard of used car ret
                                    with one of the most innovative and reliable used ve
                                    programmes ever created. A comprehensive
                                </p>
                                {/* <div className="price-selling">
                                    <span className="price-sale">$114700</span>
                                    <span className="price">$119000</span>
                                </div> */}
                                <div className="parameter mt-18" >
                                    <ul>
                                        <li className="listing-information fuel">
                                            {/* <i className="icon-gasoline-pump-1" /> */}
                                            <i className="icon-Group5" />
                                            <div className="inner">
                                                <span>Capacité de carburant</span>
                                                <p>51 Litres 
                                                </p>
                                            </div>
                                        </li>
                                        <li className="listing-information size-engine">
                                            {/* <i className="icon-Group1" /> */}
                                                                <i className="icon-Group-22" />
                                            <div className="inner">
                                                <span>Sièges</span>
                                                <p> 5 

                                                </p>
                                            </div>
                                        </li>
                                        <li className="listing-information transmission">
                                            {/* <i className="icon-gearbox-1" /> */}
                                            <i className="icon-Vector-22" />
                                            <div className="inner">
                                                <span>Transmission</span>
                                                <p> Automatique
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-main">
                                    <Link href="/X7" className="button_main_inner">
                                        <span>En savoir plus</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
