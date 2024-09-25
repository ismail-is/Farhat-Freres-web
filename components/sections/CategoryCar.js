
import Link from 'next/link'

export default function CategoryCar() {
    return (
        <>
            <div className="widget-category-car " style={{marginBottom:'400px',marginTop:'-130px'}}>
                <div className="themesflat-container">
                    <div className="category-car-wrap mb--280">
                        <div className="heading-section t-al-center">
                            {/* <span className="sub-title mb-6 wow fadeInUp">20% OFF FOR ONLINE BOOKing</span> */}
                            <h2 className="title wow fadeInUp">Découvrez nos <span className="red-title">Showroom</span></h2>
                          
                        </div>
                        <div className="category-car">
                            <div className="category-car-item">
                                <img src="./assets/images/All imgs/about/about.jpeg" alt="" />
                                {/* <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>Minivan</span>
                                    </Link>
                                </div> */}
                            </div>
                            <div className="category-car-item">
                                <img src="./assets/images/All imgs/about/about 3.jpeg" alt="" />
                                {/* <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>Hatchback</span>
                                    </Link>
                                </div> */}
                            </div>
                            <div className="category-car-item">
                                <img src="./assets/images/All imgs/about/about 2.jpeg" alt="" />
                                {/* <div className="btn-main">
                                    <Link href="/#" className="button_main_inner">
                                        <span>Hatchback</span>
                                    </Link>
                                </div> */}
                            </div>
                            {/* <div className="category-car-item-wrap">
                                <div className="category-car-item">
                                    <img src="./assets/images/All imgs/about/about 3.jpeg" alt="" />
                                    <div className="btn-main">
                                        <Link href="/#" className="button_main_inner">
                                            <span>Sedan</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="category-car-item">
                                    <img src="./assets/images/car-list/category4.jpg" alt="" />
                                    <div className="btn-main">
                                        <Link href="/#" className="button_main_inner">
                                            <span>Coupe</span>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div>
                        <p className="description wow fadeInUp " style={{color:'black',lineHeight:
"30px",fontWeight:"600",fontSize:"18px",marginTop:'30px'}}>Farhat Frères est un distributeur automobile de premier plan basé à Abidjan, en Côte d'Ivoire. Nous sommes spécialisés dans l'offre de véhicules de haute qualité de grandes marques mondiales, ainsi que dans une large sélection de voitures d'occasion et de services de location de voitures. Notre mission est d'offrir un service à la clientèle exceptionnel et de fournir une expérience d'achat de voiture transparente et personnalisée qui répond aux besoins uniques de chaque client.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
