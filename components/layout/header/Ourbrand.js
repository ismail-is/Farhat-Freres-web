
import Link from 'next/link'

export default function Ourbrand() {
    return (
        <>
            <div className="widget-icon-box mt--15">
                <div className="themesflat-container">
                    <div className="heading-section t-al-center mb-30">
                        {/* <span className="sub-title mb-6 wow fadeInUp">Trouvez la marque de votre choix</span> */}
                        <h2 className="title wow fadeInUp">Nos Marques </h2>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/honda" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/1.png" alt=""  />
                                </div>
                                {/* <span className="title-icon">Honda</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/Chevrolet " className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/2.png" alt="" />
                                </div>
                                {/* <span className="title-icon">Chevrolet</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/Kaiyi" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="./assets/images/All imgs/logo/Kaiyilogo.webp" alt="" />
                                </div>
                                {/* <span className="title-icon">Kaiyi</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/Foton" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="./assets/images/All imgs/logo/Fotonlogo.webp" alt="" />
                                </div>
                                {/* <span className="title-icon">Foton</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/Honda-Bikes" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/5.png" alt="" />
                                </div>
                                {/* <span className="title-icon">Honda Bikes</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/Honda-Engines" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="./assets/images/All imgs/logo/Hondaeng.webp" alt="" />
                                </div>
                                {/* <span className="title-icon">Honda Engines</span> */}
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="description wow fadeInUp " style={{color:'black',lineHeight:
"30px",fontWeight:"600",fontSize:"18px",marginTop:'30px'}}>
    Nous sommes fiers de distribuer des véhicules de <span style={{color:'red'}}>Honda, Chevrolet, Kaiyi, Foton et Honda Motos </span> , répondant à des besoins variés - des berlines et SUV élégants aux véhicules utilitaires. Chaque marque est connue pour sa fiabilité, son innovation et ses performances de premier plan, ce qui nous permet de proposer le véhicule adapté à chaque style de vie et à chaque entreprise.
                                </p>
                        </div>
                </div>
            </div>
        </>
    )
}
