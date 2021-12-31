import React, { useState, useRef,useEffect } from "react";
import money from "../../images/money.png";
import astro from "../../images/astro.png";
import dummy from "../../images/dummy.png";
import shake from "../../images/shake.png";
import user from "../../images/user.png";
import Form from "react-bootstrap/Form";
import { faucetContractAddress, faucetContractAbi, faucetTokenAddress, faucetTokenAbi } from "../utils/Faucet";
import {buddySystemAddress,buddySystemAbi} from "../utils/BuddySystem"
import "./Facuet.css";
import { useTranslation } from "react-i18next";
import { loadWeb3 } from "../api";
const Facuet = () => {
  let [isChange, setIschange] = useState("Viewer");
  let [availabe,setAvailable]= useState(0);
  let [myDeposited, setMyDeposited] =useState(0);
  let [maxPayout, setMaxPayout]=useState(0);
  let [clamied, setClaimed] = useState(0);
  let [team, setTeam]=useState(0);
  let [rewarded, setRewarded]=useState(0);



  const { t, i18n } = useTranslation();
  const inputEl = useRef();
  const buddy =useRef();

const getData=async()=>{
    let acc = await loadWeb3();
    const web3 = window.web3;
    let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
    let userInfoTotal = await contractOf.methods.userInfoTotals(acc).call();
    let payOutOf = await contractOf.methods.payoutOf(acc).call();
    let contractInfo = await contractOf.methods.contractInfo().call();
    let totalDeposits = userInfoTotal.total_deposits;
    totalDeposits = web3.utils.fromWei(totalDeposits);
    let maxPay = payOutOf.max_payout;
    maxPay = web3.utils.fromWei(maxPay);
    let netPay =payOutOf.net_payout;
    netPay = web3.utils.fromWei(netPay);
    netPay = parseFloat(netPay).toFixed(6)
    let team = contractInfo._total_users
    setMyDeposited(totalDeposits);
    setMaxPayout(maxPay);
    setAvailable(netPay);

}

  const depositAmount = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    let enteredVal = inputEl.current.value;
    console.log("You entered val = ", web3.utils.toWei(enteredVal)); 
    let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
    let referral = await contractOfBuddy.methods.buddyOf(acc).call();
    console.log("Tayy ; ",referral)
    if(referral.length>15){
    let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
    let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
    await tokenContractOf.methods.approve(faucetContractAddress, web3.utils.toWei(enteredVal))
      .send({
        from: acc
      })

      await contractOf.methods.deposit("0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c",web3.utils.toWei(enteredVal)).send({
        from: acc
      })
    }else{
      console.log("No Buddy Please get A buddy first")
    }
  }

  const updatemyBuddy=async()=>{
    let acc = await loadWeb3();
    let enteredVal = buddy.current.value;
    console.log("Your Buddy: ",enteredVal )
    const web3 = window.web3;
    let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
    await contractOfBuddy.methods.updateBuddy(enteredVal).send({
      from: acc
    })
  }
  const myClaim= async()=>{
    let acc = await loadWeb3();
    const web3 = window.web3;
    let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
    await contractOf.methods.claim().send({
      from:acc
    })

  }



  const changeViewer = () => {
    setIschange("Viewer");
  };
  const changeAirdrop = () => {
    setIschange("Airdrop");
  };
  const changeDirect = () => {
    setIschange("Direct");
  };
  useEffect(() => {
    setInterval(() => {
      getData();
    }, 1000);
  }, []);
  return (
    <div className="router-view">
      <div id="faucet">
        <div className="container">
          <div className="landing-page">
            <div className="row mb-4 mt-2">
              <div className="container col-xl-12">
                <div className="home-text text-center row">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <span className="luck-title notranslate">
                          {t("FAUCET.1")}
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
                      <img src={money} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 text-white mt-2 fst-italic">
                        {t("Available.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">{availabe}</span>
                      </p>
                      <p className="text-small fst-italic">
                        {t("DRIP.1")} ≈ ... {t("USDT.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={astro} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 text-white mt-2 fst-italic">
                        {t("Deposit.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">{myDeposited}</span>
                      </p>
                      <p className="text-small fst-italic">
                        {t("DRIP.1")} ≈ ... {t("USDT.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={dummy} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 text-white mt-2 fst-italic">
                        {t("Claimed.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">...</span>
                      </p>
                      <p className="text-small fst-italic">{t("DRIP.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={shake} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 text-white fst-italic">
                        {t("Rewarded.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">... / ...</span>
                      </p>
                      <p className="text-small fst-italic">
                        {t("Direct.1")} / {t("Indirect.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={money} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 text-white mt-1 fst-italic">
                        {t("MaxPayout.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">{maxPayout}</span>
                      </p>
                      <p className="text-small fst-italic">{t("DRIP.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={user} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 text-white fst-italic">
                        {t("Team.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate">... / ... </span>
                      </p>
                      <p className="text-small fst-italic">
                        {t("Players.1")} ({t("Direct.1")} / {t("Total.1")})
                      </p>
                    </div>
                  </div>
                </div>
                <p className="col-12 white mb-3 text-justify fst-italic">
                  {" "}
                  {t(
                    "TheDRIPNetworksFaucetisalowriskhighrewardcontractthatoperatessimilarlytoahighyieldcertificateofdepositbypayingout1%dailyreturnoninvestmentupto365%..1"
                  )}
                </p>
                <p className="col-12 white mb-3 text-justify fst-italic">
                  {" "}
                  {t(
                    "Playerscancompoundandextendtheirearningsthroughdeposits,hydrating(compounding)rewardsaswellasthroughteambasedreferrals.1"
                  )}
                </p>
              </div>
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <div className="row mb-2">
                  <div className="text-left col-lg-5 col-md-12">
                    <div className="priceDiv">
                      <span className="text-white fst-italic">
                        {t("Price.1")} 0.03840231 {t("BNB.1")}/{t("DRIP.1")}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="actions col-lg-7 col-md-12 text-right">
                    <button
                      id="copyRefButton"
                      type="button"
                      className="btn btn-link"
                      style={{ display: "none" }}
                    >
                      {t("CopyReferralLink.1")}!
                    </button>
                    <a href="/fountain" className>
                      {t("GetDRIP.1")}
                    </a>
                    <a target="_blank" href="https://youtu.be/TOJg308iREw">
                      {" "}
                      {t("Tutorial.1")}
                    </a>
                  </div>
                </div>
                <div className="card mb-4 bg-info text-white">
                  <div className="card-body">
                    <p className="card-text"></p>
                    <div className="landing-page">
                      <div className="text-left">
                        <h3>
                          <span className="notranslate fst-italic">
                            <p style={{ fontSize: "20px" }}>{t("Deposit.1")}</p>
                          </span>
                        </h3>
                      </div>
                      <form>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-6 text-left">
                              <label className="text-white fst-italic">
                                <p>{t("Amount.1")}</p>
                              </label>
                            </div>
                            <div className="col-6 text-right fst-italic">
                              {" "}
                              <p>
                                {t("DRIPBalance.1")}:
                                <label className="user-balance text-white fst-italic">
                                  N/A
                                </label>
                              </p>
                            </div>
                          </div>
                          <div role="group" className="input-group">
                            <input
                              ref ={inputEl}
                              type="number"
                              placeholder="Pearl"
                              className="form-control"
                              id="__BVID__213"
                            />
                          </div>
                          <small className="form-text text-left fst-italic">
                            <p style={{ fontSize: "12px" }}>
                              {t("Aminimumof1Pearlrequiredfordeposits.1")}*
                            </p>
                          </small>
                          <small className="form-text text-left">
                            <p style={{ fontSize: "12px" }}>
                              {t("A10%taxischargedondeposits.1")}*
                            </p>
                          </small>
                        </div>
                        <div className="row justify-content-end">
                          <div className="col-12 text-left">
                            <button
                            onClick={()=>depositAmount()}
                              type="button"
                              className="btn btn-outline-light"
                            >
                              {t("Deposit.1")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p />
                  </div>
                </div>
                <p className="col-12 white mb-3"></p>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    {t("HYDRATE.1")}({t("recompound.1")})
                  </button>
                  <button
                  onClick={()=>myClaim()}
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    {t("Claim.1")}
                  </button>
                </div>
                <p />
              </div>
            </div>
            <div className="row mb-4 mt-2">
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <h2>{t("GetaBuddy.1")}</h2>
                <div className="card bg-info text-white">
                  <div className="card-body">
                    {/* <p className="card-text"> */}
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("CurrentBuddy.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>{t("None.1")}</b>
                    </span>
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("Manager.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>{t("None.1")}</b>
                    </span>
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("Beneficiary.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>{t("None.1")}</b>
                    </span>
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("LastCheckin.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>0</b>
                    </span>
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("InactivityThreshold.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>0</b>
                    </span>
                    {/* </p> */}
                    <form className>
                      <div id="buddy-input">
                        <fieldset className="form-group" id="__BVID__216">
                          <h3>
                            <legend
                              tabIndex={-1}
                              className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                              id="__BVID__216__BV_label_"
                            >
                              <p style={{ lineHeight: "40%" }}>
                                {t("Buddy.1")}
                              </p>
                            </legend>
                          </h3>
                          <div>
                            <input
                            ref={buddy}
                              type="text"
                              placeholder="Address"
                              className="form-control"
                              id="__BVID__217"
                            />
                          </div>
                        </fieldset>
                        <div>
                          <button
                          onClick={()=>updatemyBuddy()}
                            type="button"
                            className="btn btn-outline-light"
                          >
                            {t("Update.1")}
                          </button>
                        </div>
                        <div>
                          <br />
                          <button
                            type="button"
                            className="btn btn-outline-light"
                          >
                            {t("ReferralLink.1")}
                          </button>
                        </div>
                      </div>
                    </form>
                    <p />
                  </div>
                </div>
              </div>
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <h2>{t("CheckoutDrippers.1")}</h2>
                <div className="card bg-info text-white">
                  <div className="card-body">
                    <p
                      className="card-text fst-italic"
                      style={{ fontSize: "20px" }}
                    >
                      {t("PlayerLookup.1")}
                    </p>
                    <div id="buddy-input">
                      <form className>
                        <div id="buddy-input">
                          <fieldset className="form-group" id="__BVID__216">
                            <h3>
                              <legend
                                tabIndex={-1}
                                className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                id="__BVID__216__BV_label_"
                              >
                                <p style={{ lineHeight: "40%" }}>
                                  {t("Player.1")}
                                </p>
                              </legend>
                            </h3>
                            <div>
                              <input
                                type="text"
                                placeholder="Address"
                                className="form-control"
                                id="__BVID__217"
                              />
                            </div>
                          </fieldset>
                          <div>
                            <button
                              type="button"
                              className="btn btn-outline-light fst-italic"
                            >
                              {t("GO.1")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <p />
                    <p className="fst-italic" style={{ fontSize: "20px" }}>
                      {t("PlayerInfo.1")}
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                          {t("Directs.1")}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fst-italic"
                          style={{ fontSize: "16px" }}
                        >
                          0
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                          {t("Team.1")}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fst-italic"
                          style={{ fontSize: "16px" }}
                        >
                          0
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                          {t("NetDeposits.1")}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fst-italic"
                          style={{ fontSize: "16px" }}
                        >
                          0 {t("DRIP.1")}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                          {t("AirdropSent.1")} / {t("Received.1")}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fst-italic"
                          style={{ fontSize: "16px" }}
                        >
                          0.000 /0.000 {t("DRIP.1")}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                          {t("AirdropLastSent.1")}
                        </p>
                      </div>
                      <div className="col-6">
                        <span
                          className="fst-italic"
                          style={{ fontSize: "16px" }}
                        >
                          {t("Never.1")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="conatiner">
              <div className="row pt-4 mt-4  d-flex justify-content-center">
                <div className="col-12 mb-4 ">
                  <div className="card bg-dark text-white">
                    <div className="tabs" id="__BVID__241">
                      <div className="card-header">
                        <ul
                          role="tablist"
                          className="nav nav-tabs card-header-tabs"
                          id="__BVID__241__BV_tab_controls_"
                        >
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                changeViewer();
                              }}
                              className="nav-link"
                            >
                              {t("TeamViewer.1")}
                            </a>
                          </li>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                changeAirdrop();
                              }}
                              className="nav-link"
                            >
                              {t("TeamAirdrop.1")}
                            </a>
                          </li>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                changeDirect();
                              }}
                              className="nav-link"
                            >
                              {t("DirectAirdrop.1")}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content"
                        id="__BVID__241__BV_tab_container_"
                      >
                        <div
                          role="tabpanel"
                          aria-hidden="false"
                          className="tab-pane active card-body"
                          id="__BVID__242"
                          aria-labelledby="__BVID__242___BV_tab_button__"
                        >
                          {isChange == "Viewer" ? (
                            <div id="Viewerpart">
                              <form className>
                                <div id="buddy-input">
                                  <fieldset
                                    className="form-group"
                                    id="__BVID__216"
                                  >
                                    <h3>
                                      <legend
                                        tabIndex={-1}
                                        className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                        id="__BVID__216__BV_label_"
                                      >
                                        <p style={{ lineHeight: "40%" }}>
                                          {t("Player.1")}
                                        </p>
                                      </legend>
                                    </h3>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control"
                                        id="__BVID__217"
                                      />
                                    </div>
                                  </fieldset>
                                  <div className="d-flex justify-content-end">
                                    <button
                                      type="button"
                                      className="btn btn-primary fst-italic"
                                    >
                                      {t("Usemyaddress.1")}
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary fst-italic"
                                    >
                                      {t("Viewall.1")}
                                    </button>
                                  </div>
                                </div>
                              </form>
                              <button
                                type="button"
                                className="btn btn-secondary fst-italic"
                              >
                                {t("Show.1")}
                              </button>
                            </div>
                          ) : isChange == "Airdrop" ? (
                            <div>
                              <form className>
                                <div id="buddy-input">
                                  <fieldset
                                    className="form-group"
                                    id="__BVID__216"
                                  >
                                    <h3>
                                      <legend
                                        tabIndex={-1}
                                        className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                        id="__BVID__216__BV_label_"
                                      >
                                        <p style={{ lineHeight: "40%" }}>
                                          {t("Player.1")}
                                        </p>
                                      </legend>
                                    </h3>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control"
                                        id="__BVID__217"
                                      />
                                    </div>
                                  </fieldset>
                                  <div className="d-flex justify-content-end">
                                    <button
                                      type="button"
                                      className="btn btn-secondary fst-italic"
                                    >
                                      {t("Usemyaddress.1")}
                                    </button>
                                  </div>
                                </div>
                              </form>
                              <form className>
                                <div id="buddy-input">
                                  <fieldset
                                    className="form-group"
                                    id="__BVID__216"
                                  >
                                    <h3>
                                      <legend
                                        tabIndex={-1}
                                        className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                        id="__BVID__216__BV_label_"
                                      >
                                        <p style={{ lineHeight: "40%" }}>
                                          {t("Campaign.1")}
                                        </p>
                                      </legend>
                                    </h3>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <form className="">
                                          <div class="select-wrapper ">
                                            <select class="select form-control">
                                              <option value="value1">
                                                {t(
                                                  "Dividebudgetbetweenmatchingplayers.1"
                                                )}
                                              </option>
                                              <option value="value1">
                                                {t(
                                                  "Rewardsbudgettoonematchingplayer.1"
                                                )}{" "}
                                                *
                                              </option>
                                              <option value="value2">
                                                {t(
                                                  "Dividedbudgetacross5matchingplayers.1"
                                                )}{" "}
                                                *
                                              </option>
                                              <option value="value3">
                                                {t(
                                                  "Dividedbudgetacross20matchingplayers.1"
                                                )}{" "}
                                                *
                                              </option>
                                              <option value="value2">
                                                {t(
                                                  "Dividedbudgetacross50matchingplayers.1"
                                                )}{" "}
                                                *
                                              </option>
                                              <option value="value2">
                                                {t(
                                                  "Dividedbudgetacross100matchingplayers.1"
                                                )}{" "}
                                                *
                                              </option>
                                            </select>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                    <small className="fst-italic">
                                      *{" "}
                                      {t(
                                        "Eligiblematchingplayersselectedatrandom.1"
                                      )}
                                    </small>
                                  </fieldset>
                                </div>
                              </form>
                              <div className="row ">
                                <div className="col-md-3 mt-3">
                                  <p
                                    className="fst-italic"
                                    style={{ lineHeight: "40%" }}
                                  >
                                    {t("Minimumdirects.1")}
                                  </p>
                                  <form className="">
                                    <div class="select-wrapper ">
                                      <select class="select form-control fst-italic">
                                        <option value="value1">
                                          {t("None.1")}
                                        </option>
                                        <option value="value1">1</option>
                                        <option value="value2">5</option>
                                        <option value="value3">15</option>
                                      </select>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-md-3 mt-3">
                                  <p
                                    className="fst-italic"
                                    style={{ lineHeight: "40%" }}
                                  >
                                    {t("Teamdepth.1")}
                                  </p>
                                  <form className="">
                                    <div class="select-wrapper ">
                                      <select class="select form-control fst-italic">
                                        <option value="value1">1</option>
                                        <option value="value1">2</option>
                                        <option value="value2">10</option>
                                        <option value="value3">15</option>
                                      </select>
                                    </div>
                                  </form>
                                </div>
                                <div className="col-md-3 mt-3">
                                  <p
                                    className="fst-italic"
                                    style={{ lineHeight: "40%" }}
                                  >
                                    {t("Minimumnetdeposits.1")}
                                  </p>
                                  <form className="">
                                    <div class="select-wrapper ">
                                      <select class="select form-control fst-italic">
                                        <option value="value1">
                                          1+ {t("DRIP.1")}
                                        </option>
                                        <option value="value1">
                                          25+ {t("DRIP.1")}
                                        </option>
                                        <option value="value2">
                                          50+ {t("DRIP.1")}
                                        </option>
                                        <option value="value3">
                                          100+ {t("DRIP.1")}
                                        </option>
                                        <option value="value2">
                                          250+ {t("DRIP.1")}
                                        </option>
                                        <option value="value2">
                                          500+ {t("DRIP.1")}
                                        </option>
                                        <option value="value2">
                                          1000+ {t("DRIP.1")}
                                        </option>
                                        <option value="value2">
                                          2000+ {t("DRIP.1")}
                                        </option>
                                      </select>
                                    </div>
                                  </form>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 mt-4">
                                  <fieldset
                                    className="form-group"
                                    id="__BVID__216"
                                  >
                                    <h3>
                                      <legend
                                        tabIndex={-1}
                                        className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                        id="__BVID__216__BV_label_"
                                      >
                                        <p style={{ lineHeight: "40%" }}>
                                          {t("Budget.1")}
                                        </p>
                                      </legend>
                                    </h3>
                                    <div>
                                      <input
                                        type="text"
                                        placeholder="0"
                                        className="form-control"
                                        id="__BVID__217"
                                      />
                                    </div>
                                  </fieldset>
                                  <div>
                                    <button
                                      type="button"
                                      className="btn btn-secondary fst-italic"
                                    >
                                      {t("RUN.1")}
                                    </button>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-4 lh-base">
                                  <p
                                    className="text-end"
                                    style={{ lineHeight: "30%" }}
                                  >
                                    {t("Available.1")}:
                                    <label className="user-balance text-white fst-italic">
                                      0 {t("DRIP.1")}
                                    </label>
                                  </p>
                                  <p
                                    className="text-end"
                                    style={{ lineHeight: "30%" }}
                                  >
                                    {t("Numberofrecipients.1")}:
                                    <label className="user-balance text-white fst-italic">
                                      0
                                    </label>
                                  </p>
                                  <p
                                    className="text-end"
                                    style={{ lineHeight: "30%" }}
                                  >
                                    {t("EstimatedDripperperson.1")}:
                                    <label className="user-balance text-white fst-italic">
                                      NAN
                                    </label>
                                  </p>
                                  <div
                                    className="d-flex justify-content-end"
                                    style={{ lineHeight: "30%" }}
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-secondary fst-italic "
                                    >
                                      {t("SEND.1")}{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-5">
                                  <h3>
                                    <legend
                                      tabIndex={-1}
                                      className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                      id="__BVID__216__BV_label_"
                                    >
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "20px",
                                        }}
                                      >
                                        {t("CampaignConsole.1")}
                                      </p>
                                    </legend>
                                  </h3>
                                  <textarea value={0}></textarea>
                                </div>
                                <div className="col-md-7">
                                  <h3>
                                    <legend
                                      tabIndex={-1}
                                      className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                      id="__BVID__216__BV_label_"
                                    >
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "20px",
                                        }}
                                      >
                                        {t("CampaignViewer.1")}
                                      </p>
                                    </legend>
                                  </h3>
                                  <div className="row ">
                                    <div className="col-lg-2 mt-2 fst-italic">
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "19px",
                                        }}
                                      >
                                        {t("Address.1")}
                                      </p>
                                    </div>
                                    <div className="col-lg-2 mt-2 fst-italic">
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "19px",
                                        }}
                                      >
                                        {t("Directs.1")}
                                      </p>
                                    </div>
                                    <div className="col-lg-3 mt-2 fst-italic">
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "19px",
                                        }}
                                      >
                                        {t("Deposits.1")}
                                      </p>
                                    </div>
                                    <div className="col-lg-2 mt-1 fst-italic">
                                      <Form.Check type="checkbox" />
                                    </div>
                                    <div className="col-lg-2 mt-2 fst-italic">
                                      <p
                                        style={{
                                          lineHeight: "40%",
                                          fontSize: "19px",
                                        }}
                                      >
                                        {t("Status.1")}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : isChange == "Direct" ? (
                            <div id="Airdroppart">
                              <p
                                className="card-text fst-italic"
                                style={{ fontSize: "25px" }}
                              >
                                {t("DirectAirdrop.1")}
                              </p>
                              <div id="buddy-input">
                                <form className>
                                  <div id="buddy-input">
                                    <fieldset
                                      className="form-group"
                                      id="__BVID__216"
                                    >
                                      <h3>
                                        <legend
                                          tabIndex={-1}
                                          className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                          id="__BVID__216__BV_label_"
                                        >
                                          <p style={{ lineHeight: "40%" }}>
                                            {t("Player.1")}
                                          </p>
                                        </legend>
                                      </h3>
                                      <div>
                                        <input
                                          type="text"
                                          placeholder="Address"
                                          className="form-control"
                                          id="__BVID__217"
                                        />
                                      </div>
                                    </fieldset>
                                  </div>
                                </form>
                              </div>
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-6 text-left">
                                    <label className="text-white fst-italic">
                                      <p style={{ lineHHeight: "30%" }}>
                                        {t("Amount.1")}
                                      </p>
                                    </label>
                                  </div>
                                  <div className="col-6 text-right fst-italic">
                                    {" "}
                                    <p style={{ lineHHeight: "30%" }}>
                                      {t("Available.1")}:
                                      <label className="user-balance text-white fst-italic">
                                        0 {t("DRIP.1")}
                                      </label>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  role="group"
                                  className="input-group"
                                  style={{ lineHHeight: "30%" }}
                                >
                                  <input
                                    type="number"
                                    placeholder="DRIP"
                                    className="form-control"
                                    id="__BVID__213"
                                  />
                                </div>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary fst-italic"
                                >
                                  {t("SEND.1")}
                                </button>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container col-12">
              <div className="row mb-4 mt-2">
                <h2 className="text-white-50">{t("About.1")}</h2>
                <p className="text-white fst-italic">
                  {t(
                    "PlayerscanparticipatebypurchasingDRIPfromtheplatform'sSWAPpage,joininganotheruser’sDRIPteam(1DRIPminimumrequirement)DepositingDRIPtotheFaucetcontractearnsaconsistent1%dailyreturnoftheirDRIP(365%maximumpayout)passively.Playerscanalsocompoundtheirearningsthroughregulardeposits,rollingrewardsaswellasteambasedreferrals.Unlikemanyotherplatformspromisingaconsistentdaily%return,Faucet'scontractcannotdrainandwillALWAYSbeabletoprovidetheDRIPthathasbeenrewarded.DRIPrewardscomefroma10%taxonallDRIPtransactionsexcludingbuysfromtheplatform'sSWAPpage..1"
                  )}
                </p>
                <p id="referral" />
                <p className="text-white fst-italic">
                  {t(
                    "IfthereiseverasituationwherethetaxpoolisnotenoughtopayDRIPrewardsnewDRIPwillbemintedtoensurerewardsarepaidout.GiventhegametheorybehindtheDRIPnetwork,theprobabilitythatthesystemwillneedtomintnewDRIPtopayrewardsisextremelylow.SinceDRIPdepositedintoFaucetaresenttoaburnaddressandDRIPisconstantlybeinglockedintheliquiditypoolthroughthereservoircontract,DRIPistheonlydeflationarydailyROIplatform.ThebeststrategyforDRIPistofocusonrealworldadoptionbybuildingoutyourteamthroughdirectreferrals,asyouwillreceivebonusrewardsfromreferralsontheirdepositsanddownlinebonusesfromplayerstheyreferbasedontheamountofbR34Pheldinyourwallet.1"
                  )}
                  : 1-2, 2-3, 3-5, 4-8, 5-13, 6-21, 7-34, 8-55, 9-89, 10-144,
                  11-233, 12-377, 13-610, 14-987, 15-1597
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Facuet;
