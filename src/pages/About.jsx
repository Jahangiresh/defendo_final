import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/about.scss";
import logoPng from "../assets/images/logoBlue.svg";
import HeaderDown from "../components/header/HeaderDown";
const About = () => {
  return (
    <>
      <HeaderDown>
        <h1>haqqimizda</h1>
      </HeaderDown>
      <div className="about">
        <Helmet>
          <title>haqqımızda</title>
        </Helmet>
        <div className="about__container custom-container">
          <div className="about__container__row row">
            <div className="about__container__row__left col-lg-8 col-7">
              <h1 className="about__container__row__left__title">Haqqımızda</h1>
              <p className="about__container__row__left__text">
                "De Fendo" Vəkil Bürosunun ilk təsisçiləri, 4 dost vəkil - Azər
                Tanrıverdi, Arslan Mikayılov, İlqar Eyyubov və Seymur
                Səfərovdur. Büronun yaradılmasında məqsəd müasir tələblərə cavab
                verən şəraitdə vətəndaşlara daha keyfiyyətli və effektiv hüquqi
                xidmətin göstərilməsinin təmin edilməsi idi. Birgə səylərimiz
                nəticəsində "De Fendo" Vəkil Bürosu 10.02.2022-ci ildə rəsmi
                dövlət qeydiyyatından keçdi və ilk olaraq Bakı şəhəri, Ziya
                Bünyadov prospektinda yerləşən ofisdə fəaliyyatə başladı.
                Fəaliyyatə başlandıqdan bir müddət sonra vəkil bürosuna yeni
                vəkillər üzv oldular və əksəriyyəti gənc, prespektivli
                vəkillərdən ibarət peşakar komanda formalaşdı. Belə ki,
                komandamızda ölkənin sabiq hakimləri, hüquq üzra fəlsəfə
                doktorları və hüquq sahəsində bir çox nailiyyətlərə imza atmış
                vəkillər, hüquqşünaslarımız çalışmaqdadır. Büroda vəkillərin
                sayı artdıqca konfidensiallığın qorunması və vətəndaşlar üçün
                daha da rahat şəraitin təmin edilməsi məsələsi gündəmə gəldi və
                bu məqsədlə yekdilliklə büronun fealiyyətinin daha geniş va
                rahat ofisdə davam etdirilməsi qərarı verildi. İnkişaf
                strategiyasına uyğun olaraq büro üçün daha böyük, işıqlı və
                modern dizayna malik ümumi sahəsi 500 kv.m-dən çox olan 14 vəkil
                otağı, konfrans zalı, konfidensial görüş otağı, istirahət otağı
                və terasından ibarət yeni təmirdən çıxmış ofis seçildi.
                Vətəndaşların ve vəkillərin rahatçılığını təmin etmek üçün yeni
                ofisdə bütün lazımi şərait təmin edilmişdir. Hazirda "De Fendo"
                Vəkil Bürosu Bakı şəhəri, Akademik Həsen Əliyev küçəsinda
                yerləşir və nəinki paytaxtımız olan Bakı şəhərinin, həm də
                ölkəmizin ən böyük və müasir vəkil bürolarından biridir.
              </p>
            </div>
            <div className="about__container__row__right col-lg-4 col-5 ">
              <img src={logoPng} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
