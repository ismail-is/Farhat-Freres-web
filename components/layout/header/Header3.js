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
  const [hoverHonda1, setHoverHonda1] = useState(false);
  const [hoverHonda2, setHoverHonda2] = useState(false);
  const [hoverHonda3, setHoverHonda3] = useState(false);
  const [hoverHonda4, setHoverHonda4] = useState(false);
  const [hoverHonda5, setHoverHonda5] = useState(false);
  const [hoverHonda6, setHoverHonda6] = useState(false);
 
    // const [selectedBrand, setSelectedBrand] = useState(null);
  
    // const handleClick = (brand) => {
    //   setSelectedBrand(brand);
    // };
    const [selectedBrand, setSelectedBrand] = useState("Honda");

    const handleClick = (brand) => {
      setSelectedBrand(brand);
    };

    const [currentBrand, setCurrentBrand] = useState("Captiva");

    const selectBrand = (brand) => {
      setCurrentBrand(brand);
    };
  // Inline styles for the image card
 // Inline styles for the image card
 const imageCardStyles = {
  position: "absolute",
  top: "90px",
  left: "0px",
  width: "100%",
  padding: "10px",
  backgroundColor: "white",
  borderRadius: "1%",
  textAlign:"center",
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "grid",
  gridTemplateColumns: "repeat(3, 2fr)",  // This creates 1 row with 4 images
  gap: "10px",
  zIndex: 100, // Ensure image card appears above other elements
  
};

const imgStyles = {
  width: "100px",
  height: "auto",
 
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: -1, // This moves the image behind other content
  transition: "border 0.6s ease-in-out" // Smooth transition effect
};


// const imageCardStyles = {
//   display: 'flex',
//   flexWrap: 'wrap',
// };

// const imgStyles = {
//   width: '100px',
//   height: 'auto',
// };

const imageData = {
  Honda: [
    { id: "honda1", src: "./assets/images/All imgs/Brands/CR-V 2024.png", alt: "Honda CR-V 2024", caption: "CR-V", url: "/crv" },
    { id: "honda2", src: "./assets/images/All imgs/navbar/HRV.webp", alt: "Honda HR-V 2024", caption: "HR-V", url: "/hrv" },
    { id: "honda3", src: "./assets/images/All imgs/navbar/Pilot.webp", alt: "Honda CR-V 2024", caption: "PILOT", url: "/pilot" },
    { id: "honda4", src: "./assets/images/All imgs/navbar/Accord.webp", alt: "Honda HR-V 2024", caption: "ACCORD", url: "/accord" },
    { id: "honda5", src: "./assets/images/All imgs/navbar/Civic.webp", alt: "Honda CR-V 2024", caption: "CIVIC", url: "/civic" },
    { id: "honda6", src: "./assets/images/All imgs/navbar/City.webp", alt: "Honda HR-V 2024", caption: "CITY", url: "/city" },
  ],
  Chevrolet: [
    { id: "chevrolet", src: "./assets/images/All imgs/navbar/Captiva.webp", alt: "Chevrolet Captiva", caption: "Captiva", url: "/Captiva" },
    { id: "chevrolet", src: "./assets/images/All imgs/navbar/Groove.webp", alt: "Chevrolet Groove", caption: "Groove" , url: "/Groove"},
    { id: "chevrolet", src: "./assets/images/All imgs/navbar/N400.webp", alt: "Chevrolet Groove", caption: "N400" , url: "/N400"},
    // Add other Chevrolet images here
  ],
  Kaiyi: [
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/X3.webp", alt: "Chevrolet Captiva", caption: "X3",url: "/x3" },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/X3 Pro.webp", alt: "Chevrolet Groove", caption: "X3 Pro",url: "/X3Pro"  },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/X7.webp", alt: "Chevrolet Groove", caption: "X7",url: "/X7"  },
    // Add other Chevrolet images here
  ],
  Foton : [
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/Tunland G7.webp", alt: "Chevrolet Captiva", caption: "Tunland G7" ,url: "/G7"},
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/Tunland E5.webp", alt: "Chevrolet Groove", caption: "Tunland E5",url: "/TunlandE5" },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/FotonView C2.webp", alt: "Chevrolet Groove", caption: "FotonView C2",url: "/ViewC2" },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/TM.webp", alt: "Chevrolet Groove", caption: "Foton TM" ,url: "/TM"},
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/Toano.webp", alt: "Chevrolet Groove", caption: "Foton Tohano"  ,url: "/Tohano"},
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/Aumark.webp", alt: "Chevrolet Groove", caption: "Aumark"  ,url: "/Aumark"},
    // Add other Chevrolet images here
  ], 
  HondaBikes : [
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/XL 125.webp", alt: "Chevrolet Captiva", caption: "XL125",url: "/XL125"  },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/ACE110.webp", alt: "Chevrolet Groove", caption: "ACE110",url: "/ACE110"  },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/ACE 125.webp", alt: "Chevrolet Groove", caption: "ACE125" ,url: "/ACE125" },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/ACE 125 TUFF.webp", alt: "Chevrolet Groove", caption: "ACE125 TUFF",url: "/ACE125TUFF"  },
    { id: "Kaiyi", src: "./assets/images/All imgs/navbar/Wave 110.webp", alt: "Chevrolet Groove", caption: "Wave 110" ,url: "/Wave110" },
    // Add other Chevrolet images here
  ], HondaEngines: [
    { id: "Kaiyi", src: "./assets/images/All imgs/engin/Engine 1.webp", alt: "Chevrolet Captiva", caption: "2 Generators " },
    { id: "Kaiyi", src: "./assets/images/All imgs/engin/Engine 2.webp", alt: "Chevrolet Groove", caption: "2 Water pumps " },
    // Add other Chevrolet images here
  ], 
};
const brandLogos = {
  Honda: "./assets/images/All imgs/1.png",
  Chevrolet: "./assets/images/All imgs/2.png",
  Kaiyi: "./assets/images/All imgs/logo/Kaiyilogo.webp",
  Foton: "./assets/images/All imgs/logo/Fotonlogo.webp",
  HondaBikes: "./assets/images/All imgs/5.png",
  HondaEngines: "./assets/images/All imgs/logo/Hondaeng.webp",
  // Add logos for other brands as needed...
};
const usedCar = {
  Captiva: [
    { src: "./assets/images/All imgs/Brands/CR-V 2024.png", alt: "Captiva CR-V 2024", caption: "Captiva "},
    { src: "./assets/images/All imgs/Brands/HR-V 2024.png", alt: "Captiva HR-V 2024", caption: "CR-V "},
    { src: "./assets/images/All imgs/Brands/CR-V 2024.png", alt: "Captiva Accord 2024", caption: "Accord " },
  ],
};


  
  return (
    <>
      <header id="header3" className="main-header header header-fixed">
        {/* Header Lower */}
        <div className="top-bar" style={{backgroundColor:"white"}}>
          <div className="themesflat-container">
            <div className="row">
            <div className="col-md-4">
                <ul className="icon-topbar">
                <div className="logo-box flex">
                    <div className="logo">
                      <Link href="/">
                        <img src="./assets/images/All imgs/Logo.png" alt="Logo"  />
                      </Link>
                    </div>
                  </div>
                  {/* <li>
                    <Link  href="https://www.facebook.com/FarhatFreresCoteDivoire/">
                      <i className="icon-6" />
                    </Link>
                  </li> */}
                 
                 
                  {/* <li>
                    <Link href="https://www.instagram.com/farhat_freres_ci/">
                      <i className="icon-11" />
                    </Link>
                  </li> */}
                 
                </ul>
              </div>
              <div className="col-md-8">
                <ul className="list-infor-topbar">

                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                            <ul className="social-icon1">
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
                  {/* <li>
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
                  </li> */}


                </ul>
              </div>
              {/* <div className="col-md-12">
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
                      <i className="icon-11" />
                    </Link>
                  </li>
                 
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="header-lower" >
          <div className="themesflat-container" id="mobilecolor">
            <div className="row" >
              <div className="col-lg-12" >
                <div className="header-style2 flex justify-space align-center" id="mobilecolor">
                  {/* Logo Box */}
                  <div className="logo-box flex" > 
  <div className="logo" id="mobilelog">
    <Link href="/">
      <img src="./assets/images/All imgs/Logo.png" alt="Logo" />
    </Link>
  </div>
</div>

                  <div className="nav-outer flex align-center " >
                    {/* Main Menu */}
                    <nav className="main-menu show navbar-expand-md" >
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                        <li>
                            <Link href="/">Accueil </Link>
                          </li>
                        {/* <li>
                            <Link href="/about">A propos de nous </Link>
                          </li> */}
                          {/* <li className="dropdown2 current">
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
                          </li> */}
                          {/* <li className="dropdown2">
                            <Link href="/#">Cars</Link>
                            <ul>
                              <li>
                                <Link href="/car-list">Car Listings</Link>
                              </li>
                              <li>
                                <Link href="/listing-details">Listings Details</Link>
                              </li>
                            </ul>
                          </li> */}

<li className="dropdown2">
      <Link href="/#">Nos Marques</Link>
      <ul style={{ gap: "30px", width: "570%",display:"flex",marginLeft:'-200px'}}>
        {Object.keys(imageData).map((brand) => (
          <li
            key={brand}
            onClick={() => handleClick(brand)}
            style={{ color: selectedBrand === brand ? 'red' : 'black',cursor: 'pointer',  }} // Apply color based on selected brand
          >
            {/* <p>{brand}</p> */}

            <img
          src={brandLogos[brand]}
          alt={`${brand} logo`}
          style={{
            width: '100%',
            height: 'auto',
            
          }}
        />
          </li>
        ))}

        {/* Conditionally render the image section outside of the brand loop */}
        {selectedBrand && (
          <div style={imageCardStyles} >
            {imageData[selectedBrand].map((image, index) => (
              <figure
                key={index}
                style={{ marginLeft: "60px", marginTop: "40px", margin: "2px" }}
              >
                {image.url ? (
                  <Link href={image.url}>
                    <img
                      style={imgStyles}
                      src={image.src}
                      alt={image.alt}
                      onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                      onMouseLeave={(e) => (e.target.style.border = 'none')}
                    />
                  </Link>
                ) : (
                  <img
                    style={imgStyles}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                    onMouseLeave={(e) => (e.target.style.border = 'none')}
                  />
                )}
                <figcaption style={{ textAlign: 'center', marginTop: '5px',color:"black"}}>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </ul>
    </li>

    <li>
                            <Link href="/about">A propos de nous </Link>
                          </li>


















{/* used car */}
    {/* <li className="dropdown2">
      <Link href="/#">Voitures d'occasion</Link>
      <ul style={{ gap: "10px", width: "1%" ,marginLeft:"-200px",marginTop:"-30px",backgroundColor:"none"}}>
        {Object.keys(usedCar).map((brand) => (
          <li
            key={brand}
            onClick={() => selectBrand(brand)}
            style={{ color: currentBrand === brand ? 'red' : 'black', cursor: 'pointer' }}
          >
            {currentBrand && (
          <div style={imageCardStyles}>
            {usedCar[currentBrand].map((image, index) => (
              <figure
                key={index}
                style={{ margin: "2px" }}
              >
                {image.url ? (
                  <Link href={image.url}>
                    <img
                      style={imgStyles}
                      src={image.src}
                      alt={image.alt}
                      onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                      onMouseLeave={(e) => (e.target.style.border = '1px solid transparent')}
                    />
                  </Link>
                ) : (
                  <img
                    style={imgStyles}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                    onMouseLeave={(e) => (e.target.style.border = '1px solid transparent')}
                  />
                )}
                <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
          </li>
        ))}

        
      </ul>
    </li> */}
{/* used car */}





{/* rent car */}
    {/* <li className="dropdown2">
      <Link href="/#">location De Voitures</Link>
      <ul style={{ gap: "10px", width: "1%" ,marginLeft:"-200px",marginTop:"-30px",backgroundColor:"none"}}>
        {Object.keys(usedCar).map((brand) => (
          <li
            key={brand}
            onClick={() => selectBrand(brand)}
            style={{ color: currentBrand === brand ? 'red' : 'black', cursor: 'pointer' }}
          >
            {currentBrand && (
          <div style={imageCardStyles}>
            {usedCar[currentBrand].map((image, index) => (
              <figure
                key={index}
                style={{ margin: "2px" }}
              >
                {image.url ? (
                  <Link href={image.url}>
                    <img
                      style={imgStyles}
                      src={image.src}
                      alt={image.alt}
                      onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                      onMouseLeave={(e) => (e.target.style.border = '1px solid transparent')}
                    />
                  </Link>
                ) : (
                  <img
                    style={imgStyles}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                    onMouseLeave={(e) => (e.target.style.border = '1px solid transparent')}
                  />
                )}
                <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
          </li>
        ))}

        
      </ul>
    </li> */}
{/* rent car */}

    {/* use fulll */}
    {/* <li className="dropdown2">
      <Link href="/#">Voitures d'occasion</Link>
      <ul style={{ gap: "10px", width: "470%" ,backgroundColor:'transparent',marginLeft:'-200px'}}>
        {Object.keys(imageData).map((brand) => (
          <li
            key={brand}
            onClick={() => handleClick(brand)}
            style={{ color: selectedBrand === brand ? 'red' : 'black' }} // Apply color based on selected brand
          >
            <p>{brand}</p>
          </li>
        ))}

        {selectedBrand && (
          <div style={imageCardStyles} >
            {usedCar[selectedBrand].map((image, index) => (
              <figure
                key={index}
                style={{ marginLeft: "60px", marginTop: "-90px", margin: "2px" }}
              >
                {image.url ? (
                  <Link href={image.url}>
                    <img
                      style={imgStyles}
                      src={image.src}
                      alt={image.alt}
                      onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                      onMouseLeave={(e) => (e.target.style.border = 'none')}
                    />
                  </Link>
                ) : (
                  <img
                    style={imgStyles}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                    onMouseLeave={(e) => (e.target.style.border = 'none')}
                  />
                )}
                <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </ul>
    </li> */}






    {/* <li className="dropdown2">
      <Link href="/#">location De Voitures</Link>
      <ul style={{ gap: "10px", width: "470%" ,backgroundColor:'transparent',marginLeft:'-200px'}}>
       

        {selectedBrand && (
          <div style={imageCardStyles} >
            {usedCar[selectedBrand].map((image, index) => (
              <figure
                key={index}
                style={{ marginLeft: "60px", marginTop: "-90px", margin: "2px" }}
              >
                {image.url ? (
                  <Link href={image.url}>
                    <img
                      style={imgStyles}
                      src={image.src}
                      alt={image.alt}
                      onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                      onMouseLeave={(e) => (e.target.style.border = 'none')}
                    />
                  </Link>
                ) : (
                  <img
                    style={imgStyles}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={(e) => (e.target.style.border = '1px solid red')}
                    onMouseLeave={(e) => (e.target.style.border = 'none')}
                  />
                )}
                <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </ul>
    </li> */}


{/* old drop down */}
                          {/* <li className="dropdown2">
                            <Link href="/#">Notre marque</Link>
                            <ul style={{ gap: "10px", width: "800%" }}>
                              <li
                                onMouseEnter={() => setHoverHonda(true)}
                                onMouseLeave={() => setHoverHonda(false)}
                              >
                                <Link href="/car-list">Honda</Link>
                                {hoverHonda && (
                                  <div style={imageCardStyles}>
                                    <Link href="/car-list">
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/CR-V 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>CR-V 2024</figcaption>
                                  </figure></Link>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/HR-V 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>HR-V 2024</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>ACCORD 2024</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/PILOT 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>PILOT 2024</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/CIVIC 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>CIVIC 2024</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/CITY 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>CITY 2024</figcaption>
                                  </figure>
                                </div>
                                
                                
                                )}
                              </li>
                                <li
                                onMouseEnter={() => setHoverHonda2(true)}
                                onMouseLeave={() => setHoverHonda2(false)}
                              >
                                <Link href="/car-list">Chevrolet </Link>
                                {hoverHonda2 && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/Captiva1.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Captiva</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/Groove.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Groove</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/N400.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> N400 </figcaption>
                                  </figure>
                                
                                  
                                  
                                </div>
                                
                                
                                )}
                              </li>

                                <li
                                onMouseEnter={() => setHoverHonda3(true)}
                                onMouseLeave={() => setHoverHonda3(false)}
                              >
                                <Link href="/car-list">Kaiyi</Link>
                                {hoverHonda3 && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/Captiva.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>X3</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>X3 Pro</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> X7 </figcaption>
                                  </figure>
                                
                                  
                                  
                                </div>
                                
                                
                                )}
                              </li>
                             




                              
                              


                              <li
                                onMouseEnter={() => setHoverHonda4(true)}
                                onMouseLeave={() => setHoverHonda4(false)}
                              >
                                <Link href="/car-list">Foton </Link>
                                {hoverHonda4 && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/Captiva.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Tunland - G7</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Tunland - E5</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> Foton View -C2</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> CS2</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> Foton TM</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>Foton Tohano</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> Aumark</figcaption>
                                  </figure>
                                
                                  
                                  
                                </div>
                                
                                
                                )}
                              </li>




                              <li
                                onMouseEnter={() => setHoverHonda5(true)}
                                onMouseLeave={() => setHoverHonda5(false)}
                              >
                                <Link href="/car-list">Honda Bikes </Link>
                                {hoverHonda5 && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/Captiva.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>XL125</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>ACE110</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> ACE125</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> ACE125 TUFF</figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}> Wave 110</figcaption>
                                  </figure>
                                
                                  
                                  
                                </div>
                                
                                
                                )}
                              </li>




                              <li
                                onMouseEnter={() => setHoverHonda6(true)}
                                onMouseLeave={() => setHoverHonda6(false)}
                              >
                                <Link href="/car-list">Honda Engines</Link>
                                {hoverHonda6 && (
                                  <div style={imageCardStyles}>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="/assets/images/All imgs/Brands/Captiva.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>2 Generators </figcaption>
                                  </figure>
                                  <figure style={{ display: 'inline-block', margin: '10px' }}>
                                    <img
                                      style={imgStyles}
                                      src="./assets/images/All imgs/Brands/ACCORD 2024.png"
                                      alt="Honda"
                                    />
                                    <figcaption style={{ textAlign: 'center', marginTop: '5px' }}>2 Water pumps </figcaption>
                                  </figure>
                               
                                
                                  
                                  
                                </div>
                                
                                
                                )}
                              </li>


                            </ul>
                          </li> */}













                          
                          {/* <li className="dropdown2">
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
                          </li> */}
                          {/* <li className="dropdown2">
                            <Link href="/#">News </Link>
                            <ul>
                              <li>
                                <Link href="/blog">Blog List</Link>
                              </li>
                              <li>
                                <Link href="/blog-single">Blog Detail</Link>
                              </li>
                            </ul>
                          </li> */}
                          <li>
                            <Link href="/contact-us">Contactez nous </Link>
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
              {/* <div className="help-bar-mobie login-box">
                <a
                  data-bs-toggle="modal"
                  onClick={handleToggle1}
                  role="button"
                  className="fw-7 category"
                >
                  <i className="icon-user" />
                  Login
                </a>
              </div> */}
              {/* <div className="help-bar-mobie search">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-loupe-1" />
                  Search
                </Link>
              </div> */}
              {/* <div className="help-bar-mobie compare">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-shuffle-2-1" />
                  Compare
                </Link>
              </div> */}
              {/* <div className="help-bar-mobie cart">
                <Link href="/#" className="fw-7 font-2">
                  <i className="icon-Vector" />
                  Cart
                </Link>
              </div> */}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
    </>
  );
}
