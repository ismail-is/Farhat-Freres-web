import Layout from "@/components/layout/Layout"
import BestsellingCar from "@/components/sections/BestsellingCar"
import BrowseByMode from "@/components/sections/BrowseByMode"
import CarBannerV1 from "@/components/sections/CarBannerV1"
import CarBlogV1 from "@/components/sections/CarBlogV1"
import CarListV2 from "@/components/sections/CarListV2"
import CounterCar from "@/components/sections/CounterCar"
import FeatureCar2 from "@/components/sections/FeatureCar2"
import FeaturesCar from "@/components/sections/FeaturesCar"
import IconBox from "@/components/sections/IconBox"
import Logo from "@/components/sections/Logo"
import Quote from "@/components/sections/Quote"
import SellingCar from "@/components/sections/SellingCar"
import Slide from "@/components/sections/Slide"
import SlideForm from "@/components/sections/SlideForm"
import SlideSearchCar from "@/components/sections/SlideSearchCar"
import TabCarService from "@/components/sections/TabCarService"
import TestimonialCar from "@/components/sections/TestimonialCar"
import BestSellingSlider2 from "@/components/slider/BestSellingSlider2"
import HomeBanne from "@/components/slider/HomeBanne"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                {/* <SlideForm/> */}
                {/* <BestsellingCar/> */}
                <div className="row">
                                <div className="col-lg-12">
                                    <div className="gallary-property-details">
                                    <HomeBanne/>
                                    </div>
                                </div>
                            </div>


                {/* <BestSellingSlider2 />    */}


                {/* <BestSellingSlider2 /> */}
                {/* <Slide /> */}
                {/* <SlideSearchCar /> */}
                <IconBox />
                {/* <TabCarService /> */}
                {/* <BrowseByMode /> */}
                {/* <Logo /> */}
                {/* <CarListV2 /> */}
                {/* <Quote /> */}
                {/* <SellingCar /> */}
                {/* <CounterCar /> */}
                {/* <TestimonialCar /> */}
                <SellingCar/>
                <FeatureCar2 />
                {/* <BrowseByMode/> */}
              
                {/* <CarBannerV1 /> */}
                {/* <CarBlogV1 /> */}
            </Layout>
        </>
    )
}