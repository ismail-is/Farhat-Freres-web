import { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header3({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handleToggle1,
  isToggled1,
  handleToggle2,
  isToggled2,
  handleToggle3,
  isToggled3,
}) {
  // State to manage hover effect
  const [hoverHonda, setHoverHonda] = useState(false);

  // Inline styles for the image card
 // Inline styles for the image card
const imageCardStyles = {
    position: "absolute",
    top: "50px", // Adjust based on where you want the card to appear
    left: "0",
    width: "330px", // Adjust width to fit the grid layout
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "100",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // Create a 3x3 grid
    gap: "10px", // Space between grid items
  };
  
  const imgStyles = {
    width: "100%",
    height: "auto",
  };
  

  
  return (
    <>
      <header id="header3" className="main-header header header-fixed">
        {/* Header Lower */}
        <div className="top-bar">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-md-9">
                <ul className="list-infor-topbar">
                  <li>
                    <Link href="tel:+2250707666660">
                      <i className="icon-Group-11" />
                      <p>
                        <Link href="tel:+2250707666660">+225 07 07 66 66 60</Link>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@farhatfreres.com">
                      <i className="icon-Group3" />
                      <p>
                        <Link href="mailto:info@farhatfreres.com">
                          info@farhatfreres.com
                        </Link>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="icon-topbar">
                  <li>
                    <Link href="/#">
                      <i className="icon-6" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <i className="icon-4" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <i className="icon-5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <i className="icon-7" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-style2 flex justify-space align-center">
                  {/* Logo Box */}
                  <div className="logo-box flex">
                    <div className="logo">
                      <Link href="/">
                        <img src="./assets/images/All imgs/Logo.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>

                  <div className="nav-outer flex align-center">
                    {/* Main Menu */}
                    <nav className="main-menu show navbar-expand-md">
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className="dropdown2 current">
                            <Link href="/#">Home</Link>
                            <ul>
                              <li className="current">
                                <Link href="/">Home Page 01</Link>
                              </li>
                              <li>
                                <Link href="/home02">Home Page 02</Link>
                              </li>
                              <li>
                                <Link href="/home03">Home Page 03</Link>
                              </li>
                              <li>
                                <Link href="/home04">Home Page 04</Link>
                              </li>
                              <li>
                                <Link href="/home05">Home Page 05</Link>
                              </li>
                              <li>
                                <Link href="/home06">Home Page 06</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown2">
                            <Link href="/#">Cars</Link>
                            <ul>
                              <li>
                                <Link href="/car-list">Car Listings</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Listings Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown2">
                            <Link href="/#">Brand</Link>
                            <ul style={{ display: "flex", gap: "10px", width: "1200%" }}>
                              <li
                                onMouseEnter={() => setHoverHonda(true)}
                                onMouseLeave={() => setHoverHonda(false)}
                              >
                                <Link href="/car-list">Honda</Link>
                                {hoverHonda && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Honda</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Honda</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Honda</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Honda</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="https://madebydesignesia.com/themes/autoev/images/misc/m3.webp"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Honda</figcaption>
                                  </figure>
                                </div>
                                
                                
                                )}
                              </li>
                              <li>
                                <Link href="/listing-details">Chevrolet</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Kaiyi</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Foton</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Honda Bikes</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Honda Engines</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown2">
                            <Link href="/#">Page</Link>
                            <ul>
                              <li>
                                <Link href="/dashboard">Dashboard</Link>
                              </li>
                              <li>
                                <Link href="/my-inventory">My Inventory</Link>
                              </li>
                              <li>
                                <Link href="/addcart">Add car</Link>
                              </li>
                              <li>
                                <Link href="/seller-profile">Seller Profile</Link>
                              </li>
                              <li>
                                <Link href="/dealer-details">Dealer Detail</Link>
                              </li>
                              <li>
                                <Link href="/404">404</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown2">
                            <Link href="/#">News </Link>
                            <ul>
                              <li>
                                <Link href="/blog">Blog List</Link>
                              </li>
                              <li>
                                <Link href="/blog-single">Blog Detail</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/contact-us">Contact us </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End */}
                  </div>
                  <div className="header-account flex align-center">
                    {/* Uncomment if needed
                                        <div className="register ml--18">
                                            <div className="flex align-center">
                                                <a data-bs-toggle="modal" onClick={handleToggle1} role="button">Register</a>
                                                <a data-bs-toggle="modal" onClick={handleToggle2} role="button">Login</a>
                                            </div>
                                        </div>
                                        <div className="flat-bt-top sc-btn-top ml--20 ">
                                            <Link className="btn-icon-list" href="/car-list">
                                                <span>Listing Yours</span>
                                                <i className="icon-add-button-1" />
                                            </Link>
                                        </div>
                                        */}
                  </div>
                  <div
                    className="mobile-nav-toggler mobile-button"
                    onClick={handleMobileMenu}
                  >
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-cancel-1" />
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleMobileMenu} />
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <img src="./assets/images/All imgs/Logo.png" alt="Logo Motorx" />
              </Link>
            </div>
            <div className="bottom-canvas">
              <div className="menu-outer">
                <MobileMenu />
              </div>
              <div className="help-bar-mobie login-box">
                <a
                  data-bs-toggle="modal"
                  onClick={handleToggle1}
                  role="button"
                  className="fw-7 category"
                >
                  <i className="icon-user" />
                  Login
                </a>
              </div>
              <div className="help-bar-mobie search">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-loupe-1" />
                  Search
                </Link>
              </div>
              <div className="help-bar-mobie compare">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-shuffle-2-1" />
                  Compare
                </Link>
              </div>
              <div className="help-bar-mobie cart">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-Vector" />
                  Cart
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
    </>
  );
}
