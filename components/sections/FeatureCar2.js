
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function FeatureCar2() {
    return (
        <>
            <div className="widget-feature-car">
                <div className="themesflat-container full">
                    <div className="feature-car">
                        <div className="feature-car-content">
                            <div className="heading-section">
                                <span className="sub-title mb-6 wow fadeInUp">Un concessionnaire automobile de confiance</span>
                                <h2 className="title mb-40 wow fadeInUp">Questions Fréquemment Posées </h2>
                                <p className="description wow fadeInUp " style={{color:'black',lineHeight:
"30px",fontWeight:"600",fontSize:"18px"}}> Nous nous engageons à vous aider à trouver la voiture idéale qui correspond à votre style et à vos besoins.
                                </p>
                            </div>
                            <div className="list-icon-check">
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
                            </div>
                            {/* <div className="btn-main">
                                <Link href="/#" className="button_main_inner">
                                    <span>Get started</span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="feature-car-video video-wrap">
                            <img src="./assets/images/All imgs/mainView/Farhat freresall.webp" alt="" />
                            {/* <VideoPopup style={1}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
