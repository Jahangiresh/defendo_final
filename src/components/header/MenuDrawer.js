import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import menuIcon from "../../assets/images/hamburger.png";
import Header from "./Header";
import facebookPng from "../../assets/images/facebook.png";
import twitterPng from "../../assets/images/twitter.png";
import instagramPng from "../../assets/images/instagram.png";
import { Link, useNavigate } from "react-router-dom";
import logoSvg from "../../assets/images/logo.svg";
import cancelPng from "../../assets/images/cancel.png";
import { useTranslation } from "react-i18next";
import { getAllSetting } from "../../features/settingSlice.js";
import { useSelector } from "react-redux";

export default function MenuDrawer() {
  const { i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const settings = useSelector(getAllSetting);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="header">
        <div className="header__container custom-container">
          <div className="header__container__logo">
            <img src={logoSvg} alt="" />
          </div>
          <div className="header__container__menu d-block d-md-none">
            <img src={cancelPng} alt="" />
          </div>
        </div>
      </div>
      <div className="menudrawer">
        <div className="menudrawer__container custom-container">
          <div className="menudrawer__container__upper">
            <span className="menudrawer__container__upper__span">
              {settings &&
                settings
                  .filter((setting) => setting.key === "Telefon")
                  .map((s) => <>Telefon: {s.value}</>)}
            </span>
            <span className="menudrawer__container__upper__span">
              {settings &&
                settings
                  .filter((setting) => setting.key === "Email")
                  .map((s) => <>Email: {s.value}</>)}
            </span>
            <span className="menudrawer__container__upper__span">
              {settings &&
                settings
                  .filter((setting) => setting.key === "Mobil")
                  .map((s) => <>Mobil: {s.value}</>)}
            </span>
            <div className="upperheader__container__right">
              <a
                href="https://www.facebook.com/arsmika?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="icons__href"
              >
                <img src={facebookPng} alt="" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icons__href"
              >
                <img src={twitterPng} alt="" />
              </a>
              <a
                href="https://www.instagram.com/de_fendo_official/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="icons__href"
              >
                <img src={instagramPng} alt="" />
              </a>
            </div>
            {/* <div className="menudrawer__container__upper__langs">
              <span
                onClick={() => clickLang("az")}
                className="menudrawer__container__upper__langs__span"
              >
                Az??rbaycan
              </span>
              <span
                onClick={() => clickLang("en")}
                className="menudrawer__container__upper__langs__span"
              >
                English
              </span>
              <span
                onClick={() => clickLang("tr")}
                className="menudrawer__container__upper__langs__span"
              >
                Russian
              </span>
            </div> */}
          </div>
          <div className="menudrawer__container__down">
            <ul className="menudrawer__container__down__ul">
              <li className="menudrawer__container__down__ul__li">
                <Link className="link-default" to="/">
                  <span className="link__span">ana s??hif??</span>
                </Link>
              </li>
              <li className="menudrawer__container__down__ul__li">
                <Link className="link-default" to="/about">
                  <span className="link__span">haqq??m??zda </span>
                </Link>
              </li>
              <li className="menudrawer__container__down__ul__li">
                <Link className="link-default" to="/team">
                  <span className="link__span">komandam??z </span>
                </Link>
              </li>
              <li className="menudrawer__container__down__ul__li">
                <Link className="link-default" to="/services">
                  <span className="link__span">xidm??tl??r </span>
                </Link>
              </li>
              <li className="menudrawer__container__down__ul__li">
                <Link className="link-default" to="/blogs">
                  <span className="link__span">m??qal??l??r </span>
                </Link>
              </li>
              <li className="menudrawer__container__down__ul__li">
                <button
                  onClick={() => navigate("/contact")}
                  className="menudrawer__container__down__ul__li__button"
                >
                  Biziml?? ??laq??
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img onClick={toggleDrawer(anchor, true)} src={menuIcon} alt="" />

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
