import Link from 'next/link'

export default function IconBox() {
    return (
        <>
       
            <div className="widget-icon-box mt--15" id='widget-icon-boxId' >
                <div className="themesflat-container">
                    <div className="heading-section t-al-center mb-30">
                        <h2 className="title wow fadeInUp">Nos Marques</h2>
                    </div>
                    <div className="row wow fadeInUp" >
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.3s">
                            <Link href="/honda" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/1.png" alt="Honda" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2"  />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.4s">
                            <Link href="/Chevrolet" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/2.png" alt="Chevrolet" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2"  />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.6s">
                            <Link href="/Kaiyi" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/logo/Kaiyilogo.webp" alt="Kaiyi" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2"  />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.7s">
                            <Link href="/Foton" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/logo/Fotonlogo.webp" alt="Foton" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2"  />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.8s">
                            <Link href="/Honda-Bikes" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/5.png" alt="Honda Bikes" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 wow fadeInUp" data-wow-delay="0.9s">
                            <Link href="/Honda-Engines" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="assets/images/All imgs/logo/Hondaeng.webp" alt="Honda Engines" />
                                </div>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
