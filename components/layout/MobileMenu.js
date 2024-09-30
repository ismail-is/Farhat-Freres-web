'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react'

export default function MobileMenu() {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation clearfix">
                {/* <li className={isActive.key == 1 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(1)}>
                    <Link href="/#">Home</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li className={pathname == "/" ? "current" : ""}>
                            <Link href="/">Home Page 01</Link>
                        </li>
                        <li className={pathname == "/home02" ? "current" : ""}><Link href="/home02">Home Page 02</Link>
                        </li>
                        <li className={pathname == "/home03" ? "current" : ""}><Link href="/home03">Home Page 03</Link></li>
                        <li className={pathname == "/home04" ? "current" : ""}><Link href="/home04">Home Page 04</Link></li>
                        <li className={pathname == "/home05" ? "current" : ""}><Link href="/home05">Home Page 05</Link></li>
                        <li className={pathname == "/home06" ? "current" : ""}><Link href="/home06">Home Page 06</Link></li>
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}
                <li className={pathname == "/" ? "current" : ""}><Link href="/" target="_target"> Accueil
                </Link></li>
                <li className={pathname == "/Brands" ? "current" : ""}><Link href="/Brands" target="_target">Nos Marques
                </Link></li>
                <li className={pathname == "/about" ? "current" : ""}><Link href="/about" target="_target">A propos de nous
                </Link></li>
               
                {/* <li className={pathname == "/userCar" ? "current" : ""}><Link href="/userCar" target="_target">Voitures d'occasion
                </Link></li>
                <li className={pathname == "/carRental" ? "current" : ""}><Link href="/carRental" target="_target">location De Voitures
                </Link></li> */}
                {/* <li className={pathname == "/about" ? "current" : ""}><Link href="/about" target="_target">A propos de nous
                </Link></li> */}
                {/* <p style={{textAlign:'center',fontWeight:"bolder",color:"red"}}>Brand</p> */}
                {/* <li className={isActive.key == 5 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(5)}>
                    <Link href="/#">Honda </Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="./assets/images/All imgs/Brands/CR-V 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>CR-V</figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="./assets/images/All imgs/Brands/HR-V 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> HR-V</figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>PILOT</figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> ACCORD</figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> CIVIC</figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">
                        <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> CITY </figcaption>
                                  </figure></Link></li>
                        
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}


             






















                {/* <li className={isActive.key == 2 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(2)}>
                    <Link href="/#">Brand</Link>
                    <div className="dropdown2-btn" />
                <li className={isActive.key == 2 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(2)}>
                    <Link href="/#">Honda</Link> 
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/crv">Honda CR-V</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/hrv">Honda HR-V</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">PILOT</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">ACCORD</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">CIVIC</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/hrv">CITY</Link></li>
                    </ul>
                    
                    <div className="dropdown2-btn" />
                </li>
                </li> */}
                {/* <li className={isActive.key == 2 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(2)}>
                    <Link href="/#">Honda</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/crv">Honda CR-V</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/hrv">Honda HR-V</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">PILOT</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">ACCORD</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">CIVIC</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/hrv">CITY</Link></li>
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}
                {/* <li className={isActive.key == 2 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(2)}>
                    <Link href="/#">Cars</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li className={pathname == "/car-list" ? "current" : ""}><Link href="/car-list">Car Listings</Link></li>
                        <li className={pathname == "/listing-details" ? "current" : ""}><Link href="/listing-details">Listings Details</Link></li>
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}
                {/* <li className={isActive.key == 3 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(3)}>
                    <Link href="/#">Page</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className={pathname == "/dashboard" ? "current" : ""}><Link href="/dashboard">Dashboard</Link></li>
                        <li className={pathname == "/my-inventory" ? "current" : ""}><Link href="/my-inventory">My Inventory</Link></li>
                        <li className={pathname == "/addcart" ? "current" : ""}><Link href="/addcart">Add car</Link></li>
                        <li className={pathname == "/seller-profile" ? "current" : ""}><Link href="/seller-profile">Seller Profile</Link></li>
                        <li className={pathname == "/dealer-details" ? "current" : ""}><Link href="/dealer-details">Dealer Detail</Link></li>
                        <li className={pathname == "/404" ? "current" : ""}><Link href="/404">404</Link></li>
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}
                {/* <li className={isActive.key == 4 ? "dropdown2 current" : "dropdown2"} onClick={() => handleClick(4)}>
                    <Link href="/#">News </Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li className={pathname == "/blog" ? "current" : ""}><Link href="/blog">Blog List</Link></li>
                        <li className={pathname == "/blog-single" ? "current" : ""}><Link href="/blog-single">Blog Detail</Link></li>
                    </ul>
                    <div className="dropdown2-btn" />
                </li> */}
              
                <li className={pathname == "/contact-us" ? "current" : ""}><Link href="/contact-us" target="_target">Contactez nous</Link>
                </li>
               
            </ul>
            {/* <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4" style={{backgroundColor:"black"}}>
                            <ul className="social-icon">
                                <li>
                                    <Link href="/#"><i className="icon-6" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-9" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-11" /></Link>
                                </li>
                                <li>
                                    <Link href="/#"><i className="icon-8" /></Link>
                                </li>
                            </ul>
                        </div> */}
           






           <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4" style={{backgroundColor:'red',borderRadius:'10px',marginTop:'450px'}}>
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
        </>
    )
}
