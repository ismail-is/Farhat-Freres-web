'use client'
import RangeSlider from "@/components/elements/RangeSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Kaiyi() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isToggled, setToggled] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setToggled(false)
            } else {
                setToggled(true)
            }
        }

        // Call the function once to set the initial state
        handleResize()

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const handleToggle = () => setToggled(!isToggled)

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                <div>
                    <div className="widget-banner-car-listing banner-car-listing-list-car" style={{backgroundImage: "url('./assets/images/brandBanner/KAIYIbanner.webp')"}}>
                        <div className="themesflat-container full" style={{marginTop:'30px'}}>
                            <div className="banner-car-listing">
                                {/* <span className="sub-title">Save up to 15%</span> */}
                                {/* <h1 className="title text-white">HONDA <span className="text-red">Rental</span> Car</h1> */}
                                {/* <h1 className="title text-white"> <span className="text-red">Kaiyi</span> </h1> */}
                            </div>
                        </div>
                    </div>
                    {/* car-listing-list */}
                    <div className="widget-car-listing-list" >
                        <div className="themesflat-container">
                            <div className="row car-listing-list">
                               
                                <div className="col-md-12 col-lg-12 listing-list-car-wrap ">
                                    <form action="/" className="tf-my-listing-search">
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                                <p className="showing">Showing 1–12 of <span className="text-red">54</span> results</p>
                                            </div> */}
                                            {/* <div className="col-md-6 toolbar-search-list">
                                                <div className="group-select-recently">

                                                    <select className="nice-select">
                                                        <option data-value className="option selected">Recently Added</option>
                                                        <option data-value="new" className="option">New</option>
                                                        <option data-value="Recently Added" className="option">Recently Added</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="tab-listing-all">
                                            {/* <div className="condition-tab-wrap tf-search-condition-tab">
                                                <div className="nav" id="nav-tab" role="tablist">
                                                    <a className={activeIndex == 1 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(1)}>
                                                        All <span className="number-list">(100)</span>
                                                    </a>
                                                    <a className={activeIndex == 2 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(2)}>
                                                        New <span className="number-list">(29)</span>
                                                    </a>
                                                    <a className={activeIndex == 3 ? "btn-condition-filter active" : "btn-condition-filter"} onClick={() => handleOnClick(3)}>
                                                        Used <span className="number-list">(29)</span>
                                                    </a>
                                                </div>
                                            </div> */}
                                            <div className="toolbar-list">
                                                <div className="form-group">
                                                    <a className="btn-display-listing-grid active">
                                                        {/* <i className="icon-th-list" /> */}
                                                    </a>
                                                </div>
                                                <div className="form-group">
                                                    <a className="btn-display-listing-list">
                                                        {/* <i className="icon-line-height" /> */}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="tab-content" id="nav-listing-car">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                            <div className="listing-list-car-grid ">
                                            <Link href='/x3'>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/All imgs/v3/6.webp" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="listing-item" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    {/* <div className="bl-item" />
                                                                    <div className="bl-item" /> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            {/* <i className="icon-heart-1-1" /> */}
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"> <Link href="/x3" >Kaiyi X3  </Link></h6>
                                                            {/* <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div> */}
                                                            {/* <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div> */}
                                                            {/* <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul> */}
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            {/* <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div> */}
                                                            {/* <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                                <Link href='/X3Pro'>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/All imgs/x3pro/X3pro 6.webp" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="listing-item" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    {/* <div className="bl-item" />
                                                                    <div className="bl-item" /> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            {/* <i className="icon-heart-1-1" /> */}
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Kaiyi X3 Pro</a></h6>
                                                            {/* <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div> */}
                                                            {/* <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div> */}
                                                            <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            {/* <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div> */}
                                                            {/* <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                               


                                                <Link href='/X7'>
                                                <div className="listing-grid-item">
                                                    <div className="listing-item-image">
                                                        <div className="hover-listing-image">
                                                            <div className="wrap-hover-listing">
                                                                <div className="listing-item active" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/All imgs/x7/Kaiyi x7 3.webp" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="listing-item" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car11.jpg" className="swiper-image lazy tfcl-light-gallery" alt="images" />
                                                                    </div>
                                                                </div>
                                                                <div className="listing-item view-gallery" title="">
                                                                    <div className="images">
                                                                        <img src="./assets/images/car-list/car12.jpg" className="swiper-image tfcl-light-gallery" alt="images" />
                                                                        <div className="overlay-limit">
                                                                            <img src="./assets/images/car-list/img.png" className="icon-img" alt="icon-map" />
                                                                            <p>2 more photos</p>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                <div className="bullet-hover-listing">
                                                                    <div className="bl-item active" />
                                                                    {/* <div className="bl-item" />
                                                                    <div className="bl-item" /> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="icon-favorite">
                                                            {/* <i className="icon-heart-1-1" /> */}
                                                        </a>
                                                        <span className="feature">Featured</span>
                                                    </div>
                                                    <div className="listing-item-content">
                                                        <div className="listing-top-content">
                                                            <h6 className="title"><a href="#">Kaiyi X7</a></h6>
                                                            {/* <div className="review-wrap">
                                                                <div className="rating">
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                    <i className="icon-Vector3" />
                                                                </div>
                                                                <span className="review">( 2 Reviews )</span>
                                                            </div> */}
                                                            {/* <div className="description">
                                                                <ul>
                                                                    <li className="listing-information fuel">
                                                                        <i className="icon-gasoline-pump-1" />
                                                                        <div className="inner">
                                                                            <span>Fuel type</span>
                                                                            <p>Petrol</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information size-engine">
                                                                        <i className="icon-Group1" />
                                                                        <div className="inner">
                                                                            <span>Mileage</span>
                                                                            <p>90 k.m</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="listing-information transmission">
                                                                        <i className="icon-gearbox-1" />
                                                                        <div className="inner">
                                                                            <span>Transmission</span>
                                                                            <p>Auto</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div> */}
                                                            {/* <ul className="list-controller">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-heart-1-1" />
                                                                        <span>Favorite</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="icon-shuffle-2-11" />
                                                                        <span>Compare</span>
                                                                    </a>
                                                                </li>
                                                            </ul> */}
                                                        </div>
                                                        <div className="bottom-price-wrap">
                                                            {/* <div className="price-wrap">
                                                                <p className="price">$489</p>
                                                                <p className="price-sale">$399</p>
                                                            </div> */}
                                                            {/* <div className="btn-read-more">
                                                                <Link className="more-link" href="/listing-details">
                                                                    <span>View details</span>
                                                                    <i className="icon-arrow-right2" />
                                                                </Link>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                </Link>
                                               
                                                
                                                
                                               
                                               
                                            </div>
                                           
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout >
        </>
    )
}