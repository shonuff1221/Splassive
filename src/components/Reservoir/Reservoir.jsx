import React,{useState,useEffect} from "react";
import balance from "../../images/balance.png";
import undo from "../../images/undo.png";
import refresh from "../../images/refresh.png";
import speedometer from "../../images/speedometer.png";
import astro from "../../images/astro.png";
import contact from "../../images/contact (2).png";
import user from "../../images/user.png";
import pearl from "../../images/pearl.png";
import dummy from "../../images/dummy.png";
import transfer from "../../images/transfer.png";
import { useTranslation } from "react-i18next";
import { loadWeb3 } from "../api";
import { faucetContractAddress, faucetContractAbi, faucetTokenAddress, faucetTokenAbi } from "../utils/Faucet";


function Reservoir() {
  const { t, i18n } = useTranslation();
  let [deposit, setDeposit]= useState(0);
  let [totalWithDrawn, setTotalWithDrawn] =useState(0);
const getData=async()=>{
  let acc = await loadWeb3();
    const web3 = window.web3;
    let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
    let contractInfo = await contractOf.methods.contractInfo().call();
    let totalWithdraw = contractInfo._total_withdraw;
    let stake = contractInfo._total_deposited;
    totalWithdraw = web3.utils.fromWei(totalWithdraw);
    totalWithdraw= parseFloat(totalWithdraw).toFixed(6);
    stake = web3.utils.fromWei(stake);
    stake = parseFloat(stake).toFixed(6);
    setTotalWithDrawn(totalWithdraw);
    setDeposit(stake);
}
useEffect(() => {
  setInterval(() => {
    getData();
  }, 1000);
}, []);

  return (
    <div className="images">
      <div id="reservoir">
        <div className="container">
          <div className="landing-page">
            <div className="row mb-4 mt-2">
              <div className="container col-xl-12">
                <div className="home-text text-center row">
                  <div className="container ">
                    <div className="row ">
                      <div className="col">
                        <span className="luck-title notranslate">
                          {t("RESERVOIR.1")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container col-xl-6 col-lg-6 col-md-6 mb-4 pt-4">
                <div id="topStatsContainer" className="row">
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={balance} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Rewards.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                      </p>
                      <p className="text-small fst-italic">{t("BNB.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={astro} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                      {t("TotalDROPS.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                      </p>
                      <p className="text-small fst-italic">{t("DROP.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={speedometer} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Stake.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{deposit}</span>
                      </p>
                      <p className="text-small fst-italic">%</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={refresh} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Compounds.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                      </p>
                      <p className="text-small fst-italic">{t("Count.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={contact} alt="" width="80px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                      {t("TotalWithdrawn.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{totalWithDrawn}</span>
                      </p>
                      <p className="text-small fst-italic">{t("BNB.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={undo} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("CompoundedTotal.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                      </p>
                      <p className="text-small fst-italic">{t("BNB.1")}</p>
                    </div>
                  </div>
                </div>
                <p className="col-12 white mb-3 text-justify fst-italic text-white" style={{fontSize: "20px"}}>
                  {" "}
                  {t("ReservoirisTheDRIPNetwork’ssolutionforplayersthatwantbenefitfromnon-inflationaryyieldfarmingthroughaddingliquiditytoDRIP.1")}
                </p>
                <p className="col-12 white mb-3"></p>
                <div>
                  <button
                  style={{ color: "#7c625a", fontSize: "20px" }}
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    <b>{t("COMPOUND.1")}</b>
                  </button>
                  <button
                  style={{ color: "#7c625a",fontSize: "20px" }}
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    <b>{t("CLAIM.1")}</b>
                  </button>
                </div>
                <p />
              </div>
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <div className="card mb-2 text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
                  <div className="card-body">
                    {/* <div className="landing-page"> */}
                    <div className="text-left">
                      <h3>
                        <span className="notranslate fst-italic">
                          <p style={{ fontSize: "20px" }}>{t("BuyandDeposit.1")}</p>
                        </span>
                      </h3>
                      {/* <div className="col-6 text-right fst-italic "> */}{" "}
                      <p
                        className="d-flex justify-content-end fst-italic"
                        style={{ lineHeight: "10%" }}
                      >
                        {t("BNBBalance.1")}:
                        <label className="user-balance text-white fst-italic">
                          0.0000
                        </label>
                      </p>
                      {/* </div> */}
                    </div>

                    <form>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-6 text-left">
                            <label className="text-white fst-italic">
                              <p style={{ lineHeight: "20%" }}>{t("Amount.1")}</p>
                            </label>
                          </div>
                          <div className="col-6 text-right fst-italic">
                            {" "}
                            <p style={{ lineHeight: "20%" }}>
                              {t("Price.1")}:
                              <label className="user-balance text-white fst-italic">
                                ...
                              </label>
                              {t("DRIP.1")}/{t("BNB.1")}
                            </p>
                          </div>
                        </div>
                        <div role="group" className="input-group">
                          <input
                            type="number"
                            placeholder="BNB"
                            className="form-control"
                            id="__BVID__213"
                          />
                        </div>

                        <small className="form-text text-left">
                          <p style={{ fontSize: "12px" }}>{t("Estimated.1")}: {t("DROPS.1")}</p>
                        </small>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-12 text-left">
                          <button
                            type="button"
                            className="btn btn-outline-light"
                          >
                            {t("BUY.1")}
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* </div> */}
                    <p />
                  </div>
                </div>
                <div className="card mb-2 text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
                  <div className="card-body">
                    <div className="landing-page">
                      <div className="text-left">
                        <h3>
                          <span className="notranslate fst-italic">
                            <p style={{ fontSize: "20px" }}>{t("Withdraw.1")}</p>
                          </span>
                        </h3>
                      </div>
                      <form>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6 text-left">
                              <label className="text-white fst-italic">
                                <p style={{ lineHeight: "20%" }}>{t("Amount.1")}</p>
                              </label>
                            </div>
                            <div className="col-6 text-right fst-italic">
                              {" "}
                              <p style={{ lineHeight: "20%" }}>
                                {t("DropBalance.1")}:
                                <label className="user-balance text-white fst-italic">
                                  N/A
                                </label>
                              </p>
                            </div>
                          </div>
                          <div role="group" className="input-group">
                            <input
                              type="number"
                              placeholder="DROPS"
                              className="form-control"
                              id="__BVID__213"
                            />
                          </div>
                        </div>
                        <div className="row justify-content-end">
                          <div className="col-12 text-left">
                            <button
                              type="button"
                              className="btn btn-outline-light"
                            >
                              {t("Withdraw.1")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4 mt-2">
              <div className="container col-10 text-center">
                <h1>{t("Stats.1")}</h1>
                <p className="text-white mb-4" style={{fontSize: "20px"}}>
                {t("ReservoirisTheDRIPNetwork’ssolutionforplayersthatwantbenefitfromnoninflationaryyieldfarmingthroughaddingliquiditytoDRIP.Herearethenumbers.1")}...
                </p>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                <div className="price-top-part">
                  <img src={user} alt="" className="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 fst-italic" style={{ color: "#7c625a" }}>
                    {t("Players.1")}
                  </h5>
                  <p className="text-large mb-2 text-white fst-italic">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                  </p>
                  <p className="text-small fst-italic">{t("UserCount.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                <div className="price-top-part">
                  <img src={pearl} alt="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 fst-italic" style={{ color: "#7c625a" }}>
                  {t("TotalValueLocked.1")}
                  </h5>
                  <p className="text-large mb-2 text-white fst-italic">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                  </p>
                  <p className="text-small fst-italic">{t("DROPS.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                <div className="price-top-part">
                  <img src={dummy} alt="" width="60px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("Rewards.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                  </p>
                  <p className="text-small">{t("BNB.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 mt-3 text-center">
                <div className="price-top-part">
                  <img src={contact} alt="" width="120px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("Dividend Pool.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>... / ...</span>
                  </p>
                  <p className="text-small">{t("DROPS.1")} ({t("DRIP.1")} / {t("LOCKED.1")})</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 mt-3 text-center">
                <div className="price-top-part">
                  <img src={balance} alt="" width="60px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("ContractBalance.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>... {t("BNB.1")}</span>
                  </p>
                  <p className="text-small">{t("DROPS.1")} ≈ ... {t("USDT.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 mt-3 text-center">
                <div className="price-top-part">
                  <img src={transfer} alt="" width="50px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("Transactions.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                  </p>
                  <p className="text-small">{t("Txs.1")}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
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
}

export default Reservoir;
