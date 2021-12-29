import React from "react";
import "./footer.css";
import { IoIosArrowDropup } from "react-icons/io";
import l from "../../images/l.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <div>
        <div className="header">
          <div>
            <svg
              data-v-ab5e3c86
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              className="waves"
            >
              <defs data-v-ab5e3c86>
                <path
                  data-v-ab5e3c86
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g data-v-ab5e3c86 className="parallax">
                <use
                  data-v-ab5e3c86
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  data-v-ab5e3c86
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  data-v-ab5e3c86
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use
                  data-v-ab5e3c86
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={7}
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div> */}
      <div id="footer" className="section footer mb-0">
        <div className="container">
          <div className="row footer-row">
            <div className="col-11 text-right">
              <a
                id="footerCircleButton"
                className="btn btn-circle btn-outline-semi-light footer-circle-button"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <IoIosArrowDropup size={60} style={{ color: "#2ef0e6" }} />
              </a>
            </div>
            <div className="col-12 text-center footer-content">
              <img alt="footer logo" src={l} className="footer-logo" />
            </div>
          </div>
          <div id="footerMenuAccordion" className="row"></div>
        </div>
        <div className="container copyright pt-5 pb-5">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-6 mb-2">
              2021 © {t("DRIPNETWORK.1")}
            </div>
            <div className="social-icons col-sm-12 col-md-6">
              <p>
                <a
                  target="_blank"
                  href="https://t.me/Pearltoken_Chat"
                  className="footer-link"
                >
                  <img src="/images/telegram.png" className="footer-telegram" />
                  {t("JoinusonTelegram.1")}
                </a>
              </p>
              <p style={{ marginTop: -10 }}>
                <a
                  target="_blank"
                  href="https://twitter.com/Pearlcommunity"
                  className="footer-link"
                >
                  <img src="/images/twitter.png" className="footer-telegram" />
                  {t("JoinusTwiter.1")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
