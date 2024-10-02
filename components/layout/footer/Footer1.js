import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer id="footer" className="clearfix bg-footer2 pd-t81 re-hi">
                <div className="themesflat-container">
                    <div className="row footer-top">
                        <div className="col-lg-8 col-md-12 col-12 pd-r80 ">
                            <h2 className="title-footer-top">Visitez notre <span className="red-title"> showroom  </span> et Découvrez les Voitures</h2>
                            {/* <img className="icon-ft" src="/assets/images/page/shape-footer.png" alt="" /> */}
                        </div>
                        {/* <div className="col-lg-12 col-md-12 col-12 t-al-right ">
                            <Link href="/#" className="btn-sell">Sell your car today</Link>
                        </div> */}
                    </div>
                    <div className="row footer-main">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widget-info">
                                <img src="./assets/images/All imgs/footerlogo.png" alt="Logo Footer" />
                                <p> nous sommes un concessionnaire automobile de confiance offrant une large sélection de voitures de qualité, un service exceptionnel et la satisfaction du client.
                                </p>
                                <ul>
                               
                                    <li>
                                        <i className="icon-Group-2" />
                                        <a href="tel:+2250707666660"  style={{color:'white'}}> +225 07 07 66 66 60</a>
                                    </li>
                                    <li>
                                        <i className="icon-Group-1" />
                                        <a href="mailto:Info@farhatfreres.com" style={{color:'white'}}>Info@farhatfreres.com</a>
                                    </li>
                                    <li>
                                        <i className="icon-Vector1" />
                                        <p>Rue Thomas Edison - Zone 4, Abidja</p>
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widget-menu pl-60">
                                <h3>Page principale</h3>
                                <ul className="box-menu">
                                    <li><Link href="/#">Accueil </Link></li>
                                    <li><Link href="/about">A propos de nous   </Link></li>
                                    <li><Link href="/Brands">Notre marque</Link></li>
                                    <li><Link href="/contact-us">Contactez nous</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widget-menu pl-30">
                                <h3>Nos marques</h3>
                                <ul className="box-menu">
                                    <li><Link href="/honda">Honda </Link></li>
                                    <li><Link href="/Chevrolet">Chevrolet </Link></li>
                                    <li><Link href="/Kaiyi"> Kaiyi</Link></li>
                                    <li><Link href="/Foton">Foton </Link></li>
                                    <li><Link href="/Honda-Bikes">Honda Bikes</Link></li>
                                    <li><Link href="/Honda-Engines">Honda Power Products</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-menu widget-form">
                                <h3>Newsletter</h3>
                                <form method="post" className="email-footer-form form-submit" action="#" acceptCharset="utf-8">
                                    <div className="text-wrap clearfix">
                                        <fieldset className="email-wrap style-text">
                                            <input type="email" className="tb-my-input" name="email" placeholder="Enter Email Adress" required />
                                        </fieldset>
                                        <button name="submit" type="submit" className="btn-submit-email">
                                            <i className="icon-Group" />
                                        </button>
                                    </div>
                                    <div className="tfad-listing-feature">
                                        <div className="radio">
                                            <input id="front" type="checkbox" name="check" defaultValue="check" />
                                            <label htmlFor="front" className="text-white">I agree to all your terms and
                                                policies</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    <div className="row footer-bottom" >
                        <div className="col-12 col-md- col-lg- col-xl-8 col-xxl-4">
                            <p className="coppy-right">© 2024 Farhat Freres Conçu par   <Link href="https://brightmedia.tech/" style={{color:'red '}} target="blank">Bright Media</Link></p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <ul className="social-icon">
                                <li>
                                    <Link href="https://www.facebook.com/FarhatFreresCoteDivoire/"><i className="icon-6" /></Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/farhat_freres_ci/"><i className="icon-11" /></Link>
                                </li>
                                <li>
                                    <Link href="mailto:Info@farhatfreres.com"><i className="icon-9" /></Link>
                                </li>
                               
                                <li>
                                    <Link href="tel:+2250707666660"><i className="icon-Group-14" /></Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                            <ul className="bottom-bar-menu">
                                <li><Link href="/#">Privacy &amp; Policy</Link></li>
                                <li><Link href="/#">Licensing</Link></li>
                                <li><Link href="/#">Instruction</Link></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                {/* <img src="/assets/images/page/ft-left.png" alt="left" className="shape-left" />
                <img src="/assets/images/page/ft-right.png" alt="right" className="shape-right" /> */}
            </footer>

        </>
    )
}
