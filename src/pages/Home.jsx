import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import linePng from "../assets/images/LineBtn.png";
import logoMain from "../assets/images/logoBlue.svg";
import Team from "../components/Team";
import ServiceCard from "../components/ServiceCard";
import { useSelector } from "react-redux";
import { getAllSlides, getStatus } from "../features/slideSlice";
import { Helmet } from "react-helmet";
import LoadingBox from "../components/LoadingBox";

const Home = () => {
  const slides = useSelector(getAllSlides);
  const status = useSelector(getStatus);
  var settings = {
    infinite: true,
    speed: 2000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };
  const navigate = useNavigate();
  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <>
      <div className="home">
        <Helmet>
          <title>əsas səhifə</title>
        </Helmet>
        <div className="home__cover__content">
          <h1 className="home__cover__content__title">de fendo vəkil bürosu</h1>
          <p className="home__cover__content__intro">
            Hüquqlarınızın ən layiqli təminatçısı
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="home__cover__content__button"
          >
            bizimlə əlaqə
          </button>
        </div>
        <Slider {...settings} className="home__cover">
          {slides &&
            slides.map((slide) => (
              <div key={slide.id}>
                <img
                  src={`https://defendovb.az/api/v1/files?filepath=${
                    slide && slide.image.filePath
                  }`}
                  alt=""
                />
              </div>
            ))}
        </Slider>

        <div className="home__container custom-container">
          <div className="home__container__about__row row">
            <div className="home__container__about__row__left  col-lg-9 col-8">
              <h3 className="home__container__about__row__title ">
                Haqqımızda
              </h3>
              <p className="home__container__about__row__info">
                "De Fendo" Vəkil Bürosunun ilk təsisçiləri, 4 dost vəkil - Azər
                Tanrıverdi, Arslan Mikayılov, İlqar Eyyubov və Seymur
                Səfərovdur. Büronun yaradılmasında məqsəd müasir tələblərə cavab
                verən şəraitdə vətəndaşlara daha keyfiyyətli və effektiv hüquqi
                xidmətin göstərilməsinin təmin edilməsi idi. Birgə səylərimiz
                nəticəsində "De Fendo" Vəkil Bürosu 10.02.2022-ci ildə rəsmi
                dövlət qeydiyyatından keçdi və ilk olaraq Bakı şəhəri, Ziya
                Bünyadov prospektinda yerləşən ofisdə fəaliyyatə başladı...
              </p>
              <button
                onClick={() => navigate("/about")}
                className="home__container__about__row__button"
              >
                <span className="home__container__about__row__button__span">
                  <img
                    className="home__container__about__row__button__span__img"
                    src={linePng}
                    alt=""
                  />
                </span>
                daha ətraflı
              </button>
            </div>
            <div className="home__container__about__row__logo col-lg-3 col-4">
              <img src={logoMain} alt="" />
            </div>
          </div>
          <Team />
        </div>
      </div>
      <main className="p-0">
        <div className="custom-container">
          <div className="row">
            <ServiceCard />
          </div>
          <div className="button__parent mb-5 d-flex justify-content-center">
            <button
              onClick={() => navigate("/services")}
              className="show__all__button"
            >
              hamısını gör
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
