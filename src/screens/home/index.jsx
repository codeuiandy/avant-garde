import React, { useState } from "react";
import "./index.css";
import pasta from "../../assets/pasta.png";
import home from "../../assets/home.png";
import workerImg from "../../assets/worker.png";
import sym from "../../assets/sym.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Index() {
  const [activeTab, setactiveTab] = useState("Pending Verification");
  var settings = {
    dots: true,
    draggable: true,
    slideToShow: 1,
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    arrows: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    // centerPadding: $(".slick").find(".col3-home-slideChild").outerWidth() / 2,
    slidesToShow: 1,
  };
  return (
    <>
      <div
        style={{ backgroundColor: "#070F15", paddingTop: "30px" }}
        className="home-page app-padding"
      >
        <div className="homepage-header-col1">
          <div className="homepage-header-col1t1">
            <h2>African Dishes</h2>
          </div>

          <div className="homepage-header-col1t2">
            <h2>The Fine Art of The Modern Professional Cooking Methods</h2>
          </div>

          <div className="homepage-header-col1t3">
            <p>
              {" "}
              Avant Garde offers a delivery service via Deliveroo, Supper and
              Uber Eats within most of central London for those who would prefer
              to experience Avant Garde’s signature Cantonese cuisine at home.
            </p>
          </div>

          <div className="homepage-header-col1t4">
            <p>Make Order</p>
          </div>
        </div>

        <div className="homepage-header-col2">
          <img src={pasta} alt="" />
        </div>
      </div>
      <div className="col2-home app-padding">
        <div className="col2-home-ch1">
          <h2>
            Avant Garde offers a delivery service via Deliveroo, Supper and Uber
            Eats within most of central London for those who would prefer to
            experience Avant
          </h2>
          <div className="col2-home-hr"></div>
        </div>

        <div className="col2-home-ch2">
          <div className="col2-home-ch1-col1">
            <img src={home} alt="" />
          </div>

          <div className="col2-home-ch1-col2">
            <h2>
              The Fine Art of The Modern <br />
              Professional Cooking Methods
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo.{" "}
            </p>

            <h3>Book a Reservation</h3>
          </div>
        </div>
      </div>

      <div
        className="col3-home app-padding"
        style={{ backgroundColor: "#070F15" }}
      >
        <div className="col3-home-header">
          <p>Enjoy Our Dishes</p>
          <h2>Welcome to African Dishes</h2>
        </div>

        <div className="container" style={{ width: "100%" }}>
          <Slider {...settings}>
            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col3-home-slideChild">
              <div className="caroldghomes2">
                <img src="https://baconmockup.com/400/200" />
                <div class="overlay">
                  <div class="overlay-content">
                    <h4>Jollof Goat Meat</h4>
                    <p>Food > Recipes</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="col4-home app-padding">
        <p>Downloadable</p>
        <h2>
          Download our restaurant menu to
          <br /> for prices and packages
        </h2>
        <a href="">Download PDF</a>
        <div
          className="col2-home-hr"
          style={{
            width: "100%",
            marginTop: "30px",
            // marginBottom: "50px",
            height: "1px",
            background: "#7C7C7C",
          }}
        ></div>
      </div>

      <div className="col5-home app-padding">
        <div className="col5-home-co1">
          <img src={workerImg} alt="" />
          <h3>
            Lorem ipsum dolor sit amet, con sec scdss adipiscing elit. Aenean
            commodo ligulasc eget dolor.
          </h3>
          <p>August 13, 2021</p>
        </div>

        <div className="col5-home-co1 ">
          <img src={workerImg} alt="" />
          <h3>
            Lorem ipsum dolor sit amet, con sec scdss adipiscing elit. Aenean
            commodo ligulasc eget dolor.
          </h3>
          <p>August 13, 2021</p>
        </div>

        <div className="col5-home-co1">
          <img src={workerImg} alt="" />
          <h3>
            Lorem ipsum dolor sit amet, con sec scdss adipiscing elit. Aenean
            commodo ligulasc eget dolor.
          </h3>
          <p>August 13, 2021</p>
        </div>
      </div>

      <div className="col6-home">
        <div className="commahomecol6">
          <img src={sym} alt="" />
        </div>

        <div className="commahomecol6Text">
          <h2>
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipiscing elit. Aenean commodo ligula eget dolor. <br />
            Aenean massa. Cum sociis natoque penatibus et <br />
            magnis dis parturient montes, nascetur <br />
            ridiculus mus. Donec quam felis, ultricies nec,
          </h2>
          <p>Restaurant Message</p>
        </div>
      </div>
    </>
  );
}
