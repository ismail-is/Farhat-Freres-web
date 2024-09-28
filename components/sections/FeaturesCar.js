
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function FeaturesCar() {
    return (
        <>
          <div className="widget-banner-car-listing banner-car-listing-list1">
                        <div className="themesflat-container full">
                            <div className="banner-car-listing">
                                {/* <span className="sub-title">Save up to 15%</span> */}
                                <h1 className="title text-white">A propos  <span className="text-red">de nous</span> </h1>
                            </div>
                        </div>
                    </div>
            <div className="widget-feature-car">
                <div className="themesflat-container full">
                    <div className="feature-car">
                        <div className="feature-car-content">
                            <div className="heading-section">
                                <span className="sub-title mb-6 wow fadeInUp">A propos de Farhat Frères</span>
                                <h2 className="title mb-40 wow fadeInUp">Qui sommes-nous </h2>
                                <p className="description wow fadeInUp " style={{color:'black',lineHeight:
"30px",fontWeight:"600",fontSize:"18px"}}>Farhat Frères est un distributeur automobile de premier plan basé à Abidjan, en Côte d'Ivoire. Nous sommes spécialisés dans l'offre de véhicules de haute qualité de grandes marques mondiales, ainsi que dans une large sélection de voitures d'occasion et de services de location de voitures. Notre mission est d'offrir un service à la clientèle exceptionnel et de fournir une expérience d'achat de voiture transparente et personnalisée qui répond aux besoins uniques de chaque client.
                                </p>
                            </div>
                            {/* <div className="list-icon-check">
                                <ul>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Nous fournissons les meilleurs services après-vente pendant le plus grand nombre d'années possible.</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Nous avons un excellent mécanicien dans notre garage. </p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Nous proposons des essais de conduite pour tous nos véhicules.</p>
                                    </li>
                                    <li>
                                        <i className="icon-Vector-32" />
                                        <p>Toutes les voitures sont couvertes par une garantie complète.</p>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className="btn-main">
                                <Link href="/#" className="button_main_inner">
                                    <span>Get started</span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="feature-car-video video-wrap">
                            <img src="./assets/images/All imgs/about/about.jpeg" alt="" />
                            {/* <VideoPopup style={1}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
