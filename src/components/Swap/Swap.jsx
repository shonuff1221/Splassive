import React from "react";
import coin from "../../images/coin.png";
import balance from "../../images/balance.png";
import drops from "../../images/drops.png";
import van from "../../images/van.png";
import contact from "../../images/contact (2).png";
import transfer from "../../images/transfer.png";
import { useTranslation } from "react-i18next";
import Chart from "./Chart";

const Swap = () => {
  const { t, i18n } = useTranslation();
  return (
    // <div className="router-view">
    <div id="fountain">
      <div className="container">
        <div className="landing-page">
          <div className="row mb-4 mt-2">
            <div className="container col-xl-12">
              <div className="home-text text-center row">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <span className="luck-title  notranslate">
                        {t("FOUNTAIN.1")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-4 mt-2">
                <div className="container col-md-3 col-sm-12 text-center">
                  <div className="price-top-part">
                    <img src={coin} alt="" width="60px" />
                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 text-white fst-italic">
                      {t("Price.1")}
                    </h5>
                    <p className="text-large mb-2 text-white fst-italic">
                      <span className="notranslate">NaN {t("BNB/DRIP.1")}</span>
                    </p>
                    <p className="text-small fst-italic">
                      {t("BNB/DRIP.1")} ≈ NaN {t("USDT.1")}
                    </p>
                  </div>
                </div>
                <div className="container col-md-3 col-sm-12 text-center">
                  <div className="price-top-part">
                    <img src={balance} alt="" width="60px" />
                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 text-white fst-italic">
                      {t("BNBBalance.1")}
                    </h5>
                    <p className="text-large mb-2 text-white fst-italic">
                      <span className="notranslate">0.0000</span>
                    </p>
                    <p className="text-small fst-italic">
                      {t("BNB.1")} ≈ NaN {t("USDT.1")}
                    </p>
                  </div>
                </div>
                <div className="container col-md-3 col-sm-12 text-center">
                  <div className="price-top-part">
                    <img src={drops} alt="" width="60px" />
                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3  text-white fst-italic">
                      {t("DRIPBalance.1")}{" "}
                    </h5>
                    <p className="text-large  mb-2 text-white fst-italic">
                      <span className="notranslate">0</span>
                    </p>
                    <p className="text-small fst-italic">
                      {t("DRIP.1")} ≈ 0.000 {t("USDT.1")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-2">
            <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
              <div className="card mb-4 bg-info text-white">
                <div className="card-body">
                  <p className="card-text"></p>
                  <div className="landing-page">
                    <div className="text-left">
                      <h3>
                        <p className="notranslate fst-italic">
                          {t("BuyDRIP.1")}
                        </p>
                      </h3>
                    </div>
                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-6 text-left fst-italic">
                            <label>
                              <p>{t("Amount.1")}</p>
                            </label>
                          </div>
                          <div className="col-6 text-right fst-italic">
                            {" "}
                            <p>
                              {t("BNBBalance.1")}
                              <label className="user-balance text-white fst-italic">
                                {" "}
                                0.0000
                              </label>
                            </p>
                          </div>
                        </div>
                        <div role="group" className="input-group">
                          <input
                            type="number"
                            placeholder="BNB"
                            className="form-control"
                            id="__BVID__90"
                          />
                          <div className="input-group-append">
                            <div
                              className="dropdown b-dropdown btn-group"
                              id="__BVID__91"
                            >
                              <button
                                aria-haspopup="true"
                                aria-expanded="false"
                                type="button"
                                className="btn dropdown-toggle btn-info text-decoration-none dropdown-toggle-no-caret"
                                id="__BVID__91__BV_toggle_"
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  width="1em"
                                  height="1em"
                                  focusable="false"
                                  role="img"
                                  aria-label="gear fill"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  className="bi-gear-fill b-icon bi"
                                  style={{ width: "16px", height: "16px" }}
                                >
                                  <g>
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
                                  </g>
                                </svg>
                              </button>
                              <ul
                                role="menu"
                                tabIndex={-1}
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="__BVID__91__BV_toggle_"
                              >
                                <li role="presentation">
                                  <div
                                    role="group"
                                    className="form-group"
                                    id="__BVID__92"
                                    style={{ whiteSpace: "nowrap" }}
                                  >
                                    <label
                                      htmlFor="dropdown-slippage-config"
                                      className="d-block"
                                      id="__BVID__92__BV_label_"
                                    >
                                      {t("Slippagetolerance.1")}
                                    </label>
                                    <div>
                                      <div
                                        role="radiogroup"
                                        tabIndex={-1}
                                        className="pt-2 bv-no-focus-ring"
                                        id="__BVID__93"
                                      >
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={1}
                                            id="__BVID__93_BV_option_0"
                                            name="__BVID__93"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__93_BV_option_0"
                                          >
                                            <span>1%</span>
                                          </label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={3}
                                            id="__BVID__93_BV_option_1"
                                            name="__BVID__93"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__93_BV_option_1"
                                          >
                                            <span>3%</span>
                                          </label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={5}
                                            id="__BVID__93_BV_option_2"
                                            name="__BVID__93"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__93_BV_option_2"
                                          >
                                            <span>5%</span>
                                          </label>
                                        </div>
                                      </div>
                                      <div role="group" className="input-group">
                                        <input
                                          id="dropdown-slippage-config"
                                          type="number"
                                          placeholder="0.1%"
                                          max={50}
                                          className="form-control"
                                        />
                                        <div className="input-group-append">
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            %
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 text-left fst-italic">
                            <small className="form-text">
                              <p>{t("Estimatereceived.1")}</p>
                            </small>
                            <small className="form-text fst-italic">
                              <p>{t("Minimumreceived.1")}: </p>{" "}
                            </small>
                          </div>
                          <div className="col-6 text-right fst-italic">
                            <small className="form-text">
                              <p>{t("Slippagetolerance.1")}: 3% </p>
                            </small>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row justify-content-end">
                      <div className="col-12 text-left">
                        <button type="button" className="btn btn-outline-light">
                          {t("Buy.1")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
            <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
              <div className="card mb-4 bg-info text-white">
                <div className="card-body">
                  <p className="card-text"></p>
                  <div className="landing-page">
                    <div className="text-left">
                      <h3>
                        <span className="notranslate fst-italic">
                          <p style={{ fontSize: "20px" }}>{t("SELLDRIP.1")}</p>
                        </span>
                      </h3>
                    </div>
                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-3 text-left fst-italic">
                            <label>
                              <p>{t("Amount.1")}</p>
                            </label>
                          </div>
                          <div className="col-9 text-right fst-italic">
                            {" "}
                            <p>
                              {t("DRIPBalance.1")}:
                              <label className="user-balance text-white fst-italic">
                                N/A
                              </label>{" "}
                            </p>
                          </div>
                        </div>
                        <div role="group" className="input-group">
                          <input
                            type="number"
                            placeholder="Pearl"
                            className="form-control"
                            id="__BVID__99"
                          />
                          <div className="input-group-append">
                            <button type="button" className="btn btn-info">
                              {t("Max.1")}
                            </button>
                            <div
                              className="dropdown b-dropdown btn-group"
                              id="__BVID__100"
                            >
                              <button
                                aria-haspopup="true"
                                aria-expanded="false"
                                type="button"
                                className="btn dropdown-toggle btn-info text-decoration-none dropdown-toggle-no-caret"
                                id="__BVID__100__BV_toggle_"
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  width="1em"
                                  height="1em"
                                  focusable="false"
                                  role="img"
                                  aria-label="gear fill"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  className="bi-gear-fill b-icon bi"
                                  style={{ width: "16px", height: "16px" }}
                                >
                                  <g>
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
                                  </g>
                                </svg>
                              </button>
                              <ul
                                role="menu"
                                tabIndex={-1}
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="__BVID__100__BV_toggle_"
                              >
                                <li role="presentation">
                                  <div
                                    role="group"
                                    className="form-group"
                                    id="__BVID__101"
                                    style={{ whiteSpace: "nowrap" }}
                                  >
                                    <label
                                      htmlFor="dropdown-sell-slippage-config"
                                      className="d-block"
                                      id="__BVID__101__BV_label_"
                                    >
                                      {t("Slippagetolerance.1")}
                                    </label>
                                    <div>
                                      <div
                                        role="radiogroup"
                                        tabIndex={-1}
                                        className="pt-2 bv-no-focus-ring"
                                        id="__BVID__102"
                                      >
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={1}
                                            id="__BVID__102_BV_option_0"
                                            name="__BVID__102"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__102_BV_option_0"
                                          >
                                            <span>1%</span>
                                          </label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={3}
                                            id="__BVID__102_BV_option_1"
                                            name="__BVID__102"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__102_BV_option_1"
                                          >
                                            <span>3%</span>
                                          </label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-radio">
                                          <input
                                            type="radio"
                                            className="custom-control-input"
                                            defaultValue={5}
                                            id="__BVID__102_BV_option_2"
                                            name="__BVID__102"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__102_BV_option_2"
                                          >
                                            <span>5%</span>
                                          </label>
                                        </div>
                                      </div>
                                      <div role="group" className="input-group">
                                        <input
                                          id="dropdown-sell-slippage-config"
                                          type="number"
                                          placeholder="0.1%"
                                          max={50}
                                          className="form-control"
                                        />
                                        <div className="input-group-append">
                                          <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                          >
                                            %
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 text-left fst-italic">
                            <small className="form-text">
                              <p style={{ lineHeight: "120%" }}>
                                {t("Estimatereceived.1")}*:
                              </p>
                            </small>
                            <small className="form-text fst-italic">
                              <p style={{ lineHeight: "10%" }}>
                                {t("Minimumreceived.1")}:{" "}
                              </p>
                            </small>
                            <small className="form-text text-left">
                              <p style={{ lineHeight: "100%" }}>
                                {t("10%Taxisappliedonsells.1")}
                              </p>
                            </small>
                          </div>
                          <div className="col-6 text-right fst-italic">
                            <small className="form-text">
                              <p style={{ lineHeight: "100%" }}>
                                {t("Slippagetolerance.1")}: 3%
                              </p>
                            </small>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row justify-content-end">
                      <div className="col-12 text-left">
                        <button type="button" className="btn btn-outline-light">
                          {t("Sell.1")}
                        </button>
                        <div
                          className="allowanceSelect"
                          style={{ float: "right" }}
                        >
                          <div className="custom-control custom-switch b-custom-control-lg">
                            <input
                              type="checkbox"
                              name="check-button"
                              className="custom-control-input"
                              defaultValue="true"
                              id="__BVID__107"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="__BVID__107"
                            >
                              {" "}
                              <p>{t("ApproveDRIP.1")}</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-2">
            <div className="container col-12 text-center">
              <div className="row mb-4 mt-2">
                <div className="container col-12 text-center">
                  <h1>{t("Chart.1")}</h1>
                </div>

                {/* <div id="chartContainer" style={{height: '370px', width: '100%'}}><div className="canvasjs-chart-container" style={{position: 'relative', textAlign: 'left', cursor: 'auto', direction: 'ltr'}}><canvas className="canvasjs-chart-canvas" width={1140} height={370} style={{position: 'absolute', userSelect: 'none'}} /><canvas className="canvasjs-chart-canvas" width={1140} height={370} style={{position: 'absolute', WebkitTapHighlightColor: 'transparent', userSelect: 'none', cursor: 'default'}} /><div className="canvasjs-chart-toolbar" style={{position: 'absolute', right: '1px', top: '1px', border: '1px solid transparent'}}><button state="pan" type="button" title="Pan" style={{display: 'none', backgroundColor: 'white', color: 'black', borderTop: 'none', borderRight: '1px solid rgb(33, 150, 243)', borderBottom: 'none', borderLeft: 'none', borderImage: 'initial', userSelect: 'none', padding: '5px 12px', cursor: 'pointer', float: 'left', width: '40px', height: '25px', outline: '0px', verticalAlign: 'baseline', lineHeight: 0}}><img style={{height: '95%', pointerEvents: 'none'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" alt="Pan" /></button><button state="reset" type="button" title="Reset" style={{display: 'none', backgroundColor: 'white', color: 'black', borderTop: 'none', borderRight: '0px solid rgb(33, 150, 243)', borderBottom: 'none', borderLeft: 'none', borderImage: 'initial', userSelect: 'none', padding: '5px 12px', cursor: 'pointer', float: 'left', width: '40px', height: '25px', outline: '0px', verticalAlign: 'baseline', lineHeight: 0}}><img style={{height: '95%', pointerEvents: 'none'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" alt="Reset" /></button></div><div className="canvasjs-chart-tooltip" style={{position: 'absolute', height: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 2px 2px', zIndex: 1000, pointerEvents: 'none', display: 'none', borderRadius: '5px'}}><div style={{width: 'auto', height: 'auto', minWidth: '50px', lineHeight: 'auto', margin: '0px 0px 0px 0px', padding: '5px', fontFamily: 'Calibri, Arial, Georgia, serif', fontWeight: 'normal', fontStyle: 'italic', fontSize: '14px', color: '#000000', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', textAlign: 'left', border: '2px solid gray', background: 'rgba(255,255,255,.9)', textIndent: '0px', whiteSpace: 'nowrap', borderRadius: '5px', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none', userSelect: 'none'}}> Sample Tooltip</div></div><a className="canvasjs-chart-credit" title="JavaScript Charts" style={{outline: 'none', margin: '0px', position: 'absolute', right: 'auto', top: '356px', color: 'dimgrey', textDecoration: 'none', fontSize: '11px', fontFamily: 'Calibri, "Lucida Grande", "Lucida Sans Unicode", Arial, sans-serif'}} tabIndex={-1} target="_blank" href="https://canvasjs.com/">CanvasJS.com</a></div></div> */}
              </div>
              <div>
                <Chart />
              </div>
            </div>
          </div>
          <div className="row mb-4 mt-2">
            <div className="container col-12 text-center">
              <h1>{t("Stats.1")}</h1>
              <p>
                {t(
                  "FountainisthebestwaytoexchangevalueintheDripNetwork!Herearethenumbers.1"
                )}
                ...
              </p>
            </div>
            <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
              <div className="price-top-part">
                <img src={van} alt="" className="" width="60px" />
                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 text-white fst-italic">
                  {t("Supply.1")}
                </h5>
                <p className="text-large mb-2 text-white fst-italic">
                  <span className="notranslate">...</span>
                </p>
                <p className="text-small fst-italic">{t("DRIP.1")}</p>
              </div>
            </div>
            <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
              <div className="price-top-part">
                <img
                  src={contact}
                  alt=""
                  className=""
                  style={{ width: "150px", backgroungColor: "white" }}
                />
                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 text-white fst-italic">
                  {t("ContractBalance.1")}
                </h5>
                <p className="text-large mb-2 text-white fst-italic">
                  <span className="notranslate">...</span>
                </p>
                <p className="text-small fst-italic">
                  {t("DROPS.1")} ({t("DRIP.1")} / {t("LOCKED.1")})
                </p>
              </div>
            </div>
            <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
              <div className="price-top-part">
                <img src={transfer} alt="" width="60px" className="" />
                <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 text-white">
                  {t("Tranactions.1")}
                </h5>
                <p className="text-large mb-2 text-white">
                  <span className="notranslate">...</span>
                </p>
                <p className="text-small">{t("Txs.1")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="fluid-container">
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
      <div>
            <div>
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
            </div>
          </div>
    </div>
  );
};

export default Swap;
