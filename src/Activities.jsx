import React from "react";
import web from "../src/image/5.png";
import  Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Slider from "./Components/Slider/Slider";
import Carusel from "./Components/Activity/carusel";
import Table1 from "./Components/Table/table1"
import Gallery from "./Components/Gallery/Gallery"


const Activities =() => {
    return (
        <>
        <Navbar />
        <section id="header" className="d-flex algin-items-center ">
        
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="hello5">
                   
                     <h1 className="blast-text3">
                <span className="text3">Events   </span>
                <span className="text3">We   </span> 
                <span className="text3">Organize</span>
              </h1>
            </div>
                <div className="col-lg-6 order-lg-2 header-img"><img src={web} className="img-fluid animated" alt="home img" />
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        {/* -------------------------- */}
        <Carusel />
        {/* -------------------------------- */}
        {/* -------------------------- */}
        <section className="reveal"> <Table1 /></section>
        
        {/* -------------------------------- */}
        <section>
            <section>
                <Gallery />
            </section>
            <Footer />
        </section>
        </>
    )
}
export default Activities;