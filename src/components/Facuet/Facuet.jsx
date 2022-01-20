import React, { useState, useRef, useEffect } from "react";
import money from "../../images/money.png";
import astro from "../../images/astro.png";
import dummy from "../../images/dummy.png";
import shake from "../../images/shake.png";
import { ToastContainer, toast } from 'react-toastify';
import user from "../../images/user.png";
import Form from "react-bootstrap/Form";
import { faucetContractAddress, faucetContractAbi, faucetTokenAddress, faucetTokenAbi } from "../utils/Faucet";
import { buddySystemAddress, buddySystemAbi } from "../utils/BuddySystem"
import "./Facuet.css";
import { useTranslation } from "react-i18next";
import { loadWeb3 } from "../api";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import price from 'crypto-price';
import Web3 from "web3";
const webSupply= new Web3("https://api.avax-test.network/ext/bc/C/rpc");
// const webSupply = window.web3;

const Facuet = () => {
  let navigate = useNavigate();
  let buddySearch= useRef()
  let [isChange, setIschange] = useState("Viewer");
  let [availabe, setAvailable] = useState(0);
  let [myDeposited, setMyDeposited] = useState(0);
  let [maxPayout, setMaxPayout] = useState(0);
  let [clamied, setClaimed] = useState(0);
  let [team, setTeam] = useState(0);
  let [rewarded, setRewarded] = useState(0);

  // player
  let [direct, setdirect] = useState(0);
  let [netDepppost, setnetDeposit] = useState(0);
  let [Airdropsent, setAirdropsent] = useState(0);
  let [AirdropLastSent, setAirdroplastsent] = useState(0);
  let [playerTeam, setPlayerteam] = useState(0);

  // users balance

  let [userDripBalance, setuserDripBalance] = useState(0);
  let [usersBalance, setUsersBalance] = useState(0);
  let [myCal, setMycal] = useState(0);

  // for direct air drop

  let airAddress = useRef();
  let airAmount = useRef();
  //for Current Wave Starter 
  let [currentWaveStarter, setCurrentWaveSarter] = useState(0);
  let [manager, setManger] = useState(0);
  let [benificiary, setBenificiary] = useState(0);
  let [lastCheckin, setLastCheckin] = useState(0);
  let [inActiveThreshols, setInactivethreshold] = useState(0);

  const { t, i18n } = useTranslation();
  const inputEl = useRef();
  const buddy = useRef();
  let addressInput = useRef();
  let [storeRefarl, setStoreRefral]= useState([])
  const getData = async () => {
    
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      try {

        let contractOf = new webSupply.eth.Contract(faucetContractAbi, faucetContractAddress);
        let tokenContractOf = new webSupply.eth.Contract(faucetTokenAbi, faucetTokenAddress);
        let contractInfo = await contractOf.methods.contractInfo().call();
        let myTeam = contractInfo._total_users;
        setTeam(myTeam);

      } catch (e) {
        console.log("Error while getting data with out meta mask in faucet");
      }

    } else {


      try {

        const web3 = window.web3;
        let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
        let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);

        let userInfoTotal = await contractOf.methods.userInfoTotals(acc).call();
        let totalDeposits = userInfoTotal.total_deposits;
        let Uinfo = await contractOf.methods.userInfo(acc).call();
        let totalclaimed = Uinfo.payouts;
        let payOutOf = await contractOf.methods.payoutOf(acc).call();

        let myclaimsAvailable = await contractOf.methods.claimsAvailable(acc).call();
        myclaimsAvailable = web3.utils.fromWei(myclaimsAvailable);
        myclaimsAvailable = parseFloat(myclaimsAvailable).toFixed(3);
        let netPay = payOutOf.net_payout;
        let maxPay = payOutOf.max_payout;
        let dripBalance = await tokenContractOf.methods.balanceOf(acc).call();
        dripBalance = web3.utils.fromWei(dripBalance);
        dripBalance = parseFloat(dripBalance).toFixed(3);

        let balance = await web3.eth.getBalance(acc);
        balance = web3.utils.fromWei(balance);
        balance = parseFloat(balance).toFixed(3);

        let calculated = balance / dripBalance;
        calculated = parseFloat(calculated).toFixed(6);


        setUsersBalance(balance);
        setuserDripBalance(dripBalance);
        setMycal(calculated);

        totalclaimed = web3.utils.fromWei(totalclaimed);
        totalclaimed = parseFloat(totalclaimed).toFixed(3);
        totalDeposits = web3.utils.fromWei(totalDeposits);
        totalDeposits = parseFloat(totalDeposits).toFixed(3);
        maxPay = web3.utils.fromWei(maxPay);
        maxPay = parseFloat(maxPay).toFixed(3);
        let AvmaxPay = maxPay - totalclaimed;
        netPay = web3.utils.fromWei(netPay);
        netPay = parseFloat(netPay).toFixed(6)
        // console.log("team = ", AvmaxPay);

        setMyDeposited(totalDeposits);
        setMaxPayout(maxPay);
        setAvailable(myclaimsAvailable);
        setClaimed(totalclaimed);
      } catch (e) {
        console.log("error while getting data in faucet",e);
      }
    }
  }
  //Direct AirDrop
  const directAirDrop = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else {

      try {
        let enteredAirVal = airAmount.current.value;
        let enteredAddrs = airAddress.current.value;
        if (enteredAirVal > 0) {
          if (enteredAddrs.length > 10) {
            if (userDripBalance > enteredAirVal) {
              const web3 = window.web3;
              let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
              let usersinf =  await contractOf.methods.users(enteredAddrs);
              let uplineAddress = usersinf.upline;
              let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
              let ownwerAddrss = await contractOf.methods.dripVaultAddress().call();
              enteredAirVal = web3.utils.toWei(enteredAirVal);
              console.log("upline = ",uplineAddress)
              if ( uplineAddress==undefined ||uplineAddress=="0" || uplineAddress=="0x0000000000000000000000000000000000000000")
              {
                toast.error("No Refferral ")
              }else{

              
              await tokenContractOf.methods.approve(ownwerAddrss,enteredAirVal).send({
                from:acc
              });
              toast.success("Transaction Successfull")
              await tokenContractOf.methods.transferFrom(acc,ownwerAddrss,enteredAirVal).send({
                from:acc
              })
              toast.success("Transaction Successfull");
              await contractOf.methods.airdrop(enteredAddrs, enteredAirVal).send({
                from: acc
              })
              toast.success("Transaction Succcessfull")
            }
            } else {
              toast.error("Insufficient Balance Please Recharge!")
            }
          } else {
            toast.error("Incorrrect palyer's Address")
          }
        } else {
          toast.error("Looks like you forgot to enter Splash Amount")
        }
      } catch (e) {
        console.log("Error :", e)
      }
    }

  }
  // Custody

  const custody = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      console.log("Not Connected")

    }
    else {
      try {
        let web3 = window.web3;
        let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
        let myCustody = await contractOf.methods.custody(acc).call();
        let myManager = myCustody.manager;
        let myBenificiary = myCustody.beneficiary;
        let myLastCheckIn = myCustody.last_checkin;

        let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
        let referral = await contractOfBuddy.methods.buddyOf(acc).call();


        setLastCheckin(myLastCheckIn);
        setManger(myManager);
        setBenificiary(myBenificiary);
        setCurrentWaveSarter(referral);

      } catch (e) {
        console.log("Error while getting custody data")
      }
    }

  }


  //Player Info
  const goPlayerinfo = async () => {
    let enteredAddress = addressInput.current.value;
    console.log("Here in player info get :", enteredAddress)
    try {
      const web3 = window.web3;
      let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
      let userInfoTotal = await contractOf.methods.userInfoTotals(enteredAddress).call();
      let playeruserInfo = await contractOf.methods.userInfo(enteredAddress).call();
      let myDirect = playeruserInfo.direct_bonus;
      let nedeposit = userInfoTotal.total_deposits;
      let myrefferals = userInfoTotal.referrals;
      nedeposit = web3.utils.fromWei(nedeposit);
      nedeposit = parseFloat(nedeposit).toFixed(3)
      let aidropsent = userInfoTotal.airdrops_received;
      aidropsent = web3.utils.fromWei(aidropsent);
      aidropsent = parseFloat(aidropsent).toFixed(3);
      let airlstdrp = userInfoTotal.airdrops_total;
      airlstdrp = web3.utils.fromWei(airlstdrp);
      airlstdrp = parseFloat(airlstdrp).toFixed(3);
      setnetDeposit(nedeposit);
      setAirdropsent(aidropsent);
      setAirdroplastsent(airlstdrp);
      setPlayerteam(myrefferals);
      setdirect(myDirect);



    } catch (e) {
      toast.error("Can't Fetch User's Information at the moment please try again later.")
      console.log("error", e)
    }
  }
  const approveAmount = async () => {
    try{
      let acc = await loadWeb3();
      if(acc == "No Wallet"){
        toast.error("No wallet connected")
    }else{
      let acc = await loadWeb3();
      const web3 = window.web3;
      let enteredVal = inputEl.current.value;
      // console.log("You entered val = ", enteredVal);
      if (enteredVal >= 1) {
        if (userDripBalance > parseFloat(enteredVal)) {
          // console.log("You entered val = ", web3.utils.toWei(enteredVal));
          let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
          let referral = await contractOfBuddy.methods.buddyOf(acc).call();
          // console.log("Tayy ; ", referral)
          if (referral.length > 15) {
            // let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
            let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
            await tokenContractOf.methods.approve(faucetContractAddress, web3.utils.toWei(enteredVal))
              .send({
                from: acc
              })
            toast.success("Transaction successfull")
            // await contractOf.methods.deposit("0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c", web3.utils.toWei(enteredVal)).send({
            //   from: acc
            // })
            // toast.success("Transaction successfull")
          } else {
            toast.error("No Buddy Please get A buddy first");
            console.log("No Buddy Please get A buddy first")
          }
        } else {
          toast.error("Entered value is greater than your balance")
        }
      } else {
        toast.error("Deposit amount should be greater than 1")
      }
    }
    }catch(e){
      console.log("error while approve amount", e);
    }
  }
  const depositAmount = async () => {
    try {
      let acc = await loadWeb3();
      if(acc == "No Wallet"){
        toast.error("No Wallet connected")
      }else{
      const web3 = window.web3;
      let enteredVal = inputEl.current.value;
      if (enteredVal >=  1) {
        if (userDripBalance > parseFloat(enteredVal)) {
          let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
          let referral = await contractOfBuddy.methods.buddyOf(acc).call();

          if (referral.length > 15) {
            let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
            let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
            console.log("allowance contract", contractOf.methods);
            // let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
            // await tokenContractOf.methods.approve(faucetContractAddress, web3.utils.toWei(enteredVal))
            //   .send({
            //     from: acc
            //   })
            let allowance = await tokenContractOf.methods.allowance(acc,faucetContractAddress).call();
            console.log("allowance", allowance);
            if(allowance >=  parseFloat(web3.utils.toWei(enteredVal))){
              await contractOf.methods.deposit("0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c", web3.utils.toWei(enteredVal)).send({
                from: acc
              })
              toast.success("Transaction successfull")
            }else{
              toast.error("Entered value is greater than your approval amount ")
            }
           
          } else {
            toast.error("No Buddy Please get A buddy first");
            console.log("No Buddy Please get A buddy first")
          }
        } else {
          toast.error("Entered value is greater than your balance")
        }
      } else {
        toast.error("Deposit amount should be greater than 1 ")
      }
    }
    } catch (e) {
      toast.error("Transaction Failed ")
      console.log("Transaction Failed",e)
    }
  }

  const updatemyBuddy = async () => {
    try{
    let acc = await loadWeb3();
    if(acc == "No Wallet"){
      toast.error("No Wallet Connected");
    }else{
      if(buddy.current.value <= 0){
        toast.error("Please enter buddy refral")
      }else{
        let enteredVal = buddy.current.value;
        // console.log("Your Buddy: ", enteredVal)
        const web3 = window.web3;
        let contractOfBuddy = new web3.eth.Contract(buddySystemAbi, buddySystemAddress);
        await contractOfBuddy.methods.updateBuddy(enteredVal).send({
          from: acc
        })
        let data={
          ownerRefral: acc,
          userRefral: enteredVal
      }
        // let formData = new FormData();
        // formData.append("ownerRefral", acc)
        // formData.append("userRefral", enteredVal)
        await axios.post("http://localhost:5005/api/users/takeRefral", data);
        toast.success("Buddy updated")
      }
    }
  }catch(e){
    toast.error("Buddy rejected")
    console.log("error while update buddy", e);
  }
  }
  const myClaim = async () => {

    try {
      let acc = await loadWeb3();
      if (acc == "No Wallet") {
        toast.error("No Wallet Connected!")
      } else {
        // console.log("Reward", availabe)
        if (availabe > 0) {
          const web3 = window.web3;
          // if( /.)
          let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
          await contractOf.methods.claim().send({
            from: acc
          })
          toast.success("Transaction successfull")
        } else {
          toast.error("No Claims Available")
        }
      }

    } catch (e) {
      toast.error("Transaction Failed")
    }

  }
  const getOwnerReferral = async () => {
    try {
      const web3 = window.web3;
      let contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
      let ownwerAddrss = await contractOf.methods.dripVaultAddress().call();
      // console.log("Owner Address :", ownwerAddrss);
      buddy.current.value = ownwerAddrss;
    } catch (e) {
      console.log("Error :", e)
    }

  }

  const hydarated = async () => {
    try {
      let acc = await loadWeb3();
      if (acc == "No Wallet") {
        toast.error("No Wallet Connected");
      }
      else {
        if (availabe > 0) {
          const web3 = window.web3;
          const contractOf = new web3.eth.Contract(faucetContractAbi, faucetContractAddress);
          await contractOf.methods.roll().send({
            from: acc
          })
        } else {
          toast.error("No Availabe Claims you need to deposit first")
        }
      }

    } catch (e) {
      console.log("Error while calling hydrated function");
    }

  }
  const getMaxBal = async () => {
    try{
          let acc = await loadWeb3();
          if(acc == "No Wallet"){
            toast.error("No wallet Connected")
          }else{
            const web3 = window.web3;
            let tokenContractOf = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);
            let bal = await tokenContractOf.methods.balanceOf(acc).call();
            bal = await web3.utils.fromWei(bal);
            bal = parseFloat(bal).toFixed(3)
            inputEl.current.value= bal;
            
          }
    }catch(e){
      console.log("error while get max balance", e);
    }
  }
  const getUserAddress = async () => {
    try{
      let acc = await loadWeb3();
      if(acc == "No Wallet"){
        toast.error("No Wallet Connected");
      }else{
        buddySearch.current.value = acc;
      }

    }catch(e){
      console.log("error while get user address", e);
    }
  }
 
  const getRefrals = async () =>{
    try{
        if(buddySearch.current.value <= 0){ 
          toast.error("Enter Referral Address")
        }else{
         let  data ={
          ownerRefral:buddySearch.current.value
         }
            let res = await axios.post("http://localhost:5005/api/users/getRefral", data);
            if(res.data.length){
              setStoreRefral(res.data[0].refrals);
            }else{
              toast.error("No Referral Found")
            }
        }
    }catch(e){
      console.log("error while get refrals", e);
    }
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
    window.scrollTo(0, 0);
    setInterval(() => {
      getData();
      custody();
    }, 1000);
  }, []);
  return (
    <div className="images">
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
                          {t("THETAP.1")}
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
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Available.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{availabe}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>
                        {t("Splash.1")} ≈ ... {t("USDT.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={astro} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Deposit.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{myDeposited}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>
                        {t("Splash.1")} ≈ ... {t("USDT.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={dummy} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Claimed.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{clamied}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>{t("Splash.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center mt-md-4">
                    <div className="price-top-part">
                      <img src={shake} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Rewarded.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{clamied}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>
                        {t("Direct.1")} / {t("Indirect.1")}
                      </p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center mt-md-4">
                    <div className="price-top-part">
                      <img src={money} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("MaxPayout.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{maxPayout}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>{t("Splash.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center mt-md-4">
                    <div className="price-top-part">
                      <img src={user} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Team.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{team}</span>
                      </p>
                      <p className="text-small fst-italic" style={{ backgroundColor: "#4e2e4b" }}>
                        {t("Players.1")} ({t("Direct.1")} / {t("Total.1")})
                      </p>
                    </div>
                  </div>
                </div>
                <p className="col-12 white mb-3 text-justify fst-italic text-white mt-md-3" style={{ fontSize: "20px" }}>
                  {" "}
                  {t(
                    "Splassive’sTheTapisalowrisk,highrewardcontractthatoperatessimilarlytoahighyieldcertificateofdepositbypayingout2%dailyreturnoninvestmentupto360%..1"
                  )}
                </p>
                <p className="col-12 white mb-3 text-justify fst-italic text-white" style={{ fontSize: "20px" }}>
                  {" "}
                  {t(
                    "Playerscancompoundandextendtheirearningsthroughdeposits,hydrating(compounding)rewardsaswellasthroughteambasedreferrals..1"
                  )}
                </p>
              </div>
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6">
                <div className="row mb-2">
                  <div className="text-left col-lg-5 col-md-12">
                    <div className="priceDiv">
                      <span className="fst-italic" style={{ color: "#7c625a", fontSize: "19px" }}>
                        {t("Price.1")} {myCal} {t("AVAX.1")}/{t("Splash.1")}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="actions col-lg-7 col-md-12 text-right">
                    <button
                      id="copyRefButton"
                      type="button"
                      className="btn btn-link"
                      style={{ display: "none", color: "#7c625a" }}
                    >
                      {t("CopyReferralLink.1")}!
                    </button>
                    <Link
                      style={{ color: "#7c625a", fontSize: "19px" }}
                      to="/swap" >
                      {t("GetSplash.1")}
                    </Link>
                    <a target="_blank" href="https://www.youtube.com/watch?v=TOJg308iREw" style={{ color: "#7c625a", fontSize: "19px" }}>
                      {" "}
                      {t("Tutorial.1")}
                    </a>
                  </div>
                </div>
                <div className="card text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
                  <div className="card-body" >
                    {/* <p className="card-text"></p> */}
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
                                {t("SplashBalance.1")}:
                                <label className="user-balance text-white fst-italic">
                                  {userDripBalance}
                                </label>
                              </p>
                            </div>
                          </div>
                          <div role="group" className="input-group">
                            <input
                              ref={inputEl}
                              type="number"
                              placeholder="Splash"
                              className="form-control"
                              id="__BVID__213"
                            />
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={getMaxBal}
                              style={{
                                backgroundColor: "#86ad74",
                                border: "1px solid #86ad74",
                                fontSize: "16px"
                              }}
                            >
                              {t("Max.1")}
                            </button>
                          </div>
                          <small className="form-text text-left fst-italic">
                            <p style={{ fontSize: "13px" }}>
                              {t("Aminimumof1Pearlrequiredfordeposits.1")}*
                            </p>
                          </small>
                          <small className="form-text text-left">
                            <p style={{ fontSize: "13px" }}>
                              {t("A10%taxischargedondeposits.1")}*
                            </p>
                          </small>
                        </div>
                        <div className="row justify-content-end">
                          <div className="col-12 d-flex flex-row justify-content-evenly">
                            <button
                              onClick={() => approveAmount()}
                              type="button"
                              className="btn btn-outline-light"
                            >
                              {t("Approve.1")}
                            </button>
                            <button
                              onClick={() => depositAmount()}
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
                    onClick={() => hydarated()}
                    style={{ color: "#7c625a", fontSize: "20px" }}
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    <b>{t("HYDRATE.1")}({t("recompound.1")})</b>
                  </button>
                  <button
                    style={{ color: "#7c625a", fontSize: "20px" }}
                    onClick={() => myClaim()}
                    type="button"
                    className="btn btn-outline-light btn-block"
                  >
                    <b>{t("Claim.1")}</b>
                  </button>
                </div>
                <p />
              </div>
            </div>
            <div className="row mb-4 mt-2">
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <h2>{t("JoinTheWave.1")}</h2>
                <div className="card text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
                  <div className="card-body">
                    {/* <p className="card-text"> */}
                    <p className=" fst-italic" style={{ fontSize: "18px" }}>
                      {t("CurrentWaveStarter.1")}
                    </p>
                    <span
                      className=" fst-italic"
                      style={{
                        color: "#b8b6b6",
                        fontSize: "20px",
                        lineHeight: "30%",
                      }}
                    >
                      <b>{currentWaveStarter}</b>
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
                      <b>{manager}</b>
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
                      <b>{benificiary}</b>
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
                      <b>{lastCheckin}</b>
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
                      <b>{inActiveThreshols}</b>
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
                                {t("WaveStarter.1")}
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
                            onClick={() => updatemyBuddy()}
                            type="button"
                            className="btn btn-outline-light"
                          >
                            {t("Update.1")}
                          </button>
                        </div>
                        <div>
                          <br />
                          <button
                            onClick={() => getOwnerReferral()}
                            type="button"
                            className="btn btn-outline-light"
                          >
                            {t("SupportMarketingandDevelopment.1")}
                          </button>
                        </div>
                      </div>
                    </form>
                    <p />
                  </div>
                </div>
              </div>
              <div className="container col-12 col-xl-6 col-lg-6 col-md-6 mb-4">
                <h2>{t("CheckoutWhoSplashed.1")}</h2>
                <div className="card text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
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
                                ref={addressInput}
                                type="text"
                                placeholder="Address"
                                className="form-control"
                                id="__BVID__217"
                              />
                            </div>
                          </fieldset>
                          <div>
                            <button
                              onClick={() => goPlayerinfo()}
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
                          {direct}
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
                          {playerTeam}
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
                          {netDepppost} {t("Splash.1")}
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
                          {Airdropsent} {t("Splash.1")}
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
                          {AirdropLastSent}
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
                  <div className="card text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>
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
                            <div className="row" id="Viewerpart">
                                <div className="col-md-6" id="buddy-input">
                              <form className>
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
                                    <div className="">
                                      <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control"
                                        id="__BVID__217"
                                        ref={buddySearch}
                                      />
                                    </div>
                                  </fieldset>
                                  <div className="d-flex justify-content-start">
                                    <button
                                      style={{ backgroundColor: "#86ad74", color: "white" }}
                                      type="button"
                                      className="btn fst-italic me-2"
                                      onClick={getUserAddress}
                                    >
                                      {t("Usemyaddress.1")}
                                    </button>
                                    <button
                                      style={{ backgroundColor: "#86ad74", color: "white", border: "1px solid #86ad74" }}
                                      type="button"
                                      className="btn fst-italic"
                                      onClick={getRefrals} 
                                    >
                                      {t("Viewall.1")}
                                    </button>
                                    <button
                                style={{ backgroundColor: "#7c625a", color: "white", border: "1px solid #7c625a" }}
                                type="button"
                                className="btn fst-italic ml-3"
                                onClick={getRefrals}
                              >
                                {t("Show.1")}
                              </button>
                                  </div>
                              </form>
                                </div>
                              <div className="col-md-5 col-12 ml-md-auto mt-md-1 mt-3" style={{backgroundColor: "#86ad74", overflowY: "scroll", height: "170px", dispaly: "flex", justifyContent: "center"}}>
                              {
                                storeRefarl.map((item)=>{
                                  return <>{item}
                                  <br/>
                                  </>
                                })
                              }

                              </div>
                  
                                  
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
                                      style={{ backgroundColor: "#86ad74", color: "white", border: "1px solid #86ad74" }}
                                      type="button"
                                      className="btn fst-italic"
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
                                          1+ {t("Splash.1")}
                                        </option>
                                        <option value="value1">
                                          25+ {t("Splash.1")}
                                        </option>
                                        <option value="value2">
                                          50+ {t("Splash.1")}
                                        </option>
                                        <option value="value3">
                                          100+ {t("Splash.1")}
                                        </option>
                                        <option value="value2">
                                          250+ {t("Splash.1")}
                                        </option>
                                        <option value="value2">
                                          500+ {t("Splash.1")}
                                        </option>
                                        <option value="value2">
                                          1000+ {t("Splash.1")}
                                        </option>
                                        <option value="value2">
                                          2000+ {t("Splash.1")}
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
                                      style={{ backgroundColor: "#86ad74", color: "white", border: "1px solid #86ad74" }}
                                      type="button"
                                      className="btn fst-italic"
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
                                      0 {t("Splash.1")}
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
                                    {t("EstimatedSplashperperson.1")}:
                                    <label className="user-balance text-white fst-italic">
                                      NAN
                                    </label>
                                  </p>
                                  <div
                                    className="d-flex justify-content-end"
                                    style={{ lineHeight: "30%" }}
                                  >
                                    <button
                                      style={{ backgroundColor: "#86ad74", color: "white", border: "1px solid #86ad74" }}
                                      type="button"
                                      className="btn fst-italic "
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
                                          ref={airAddress}
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
                                        {userDripBalance}
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
                                    placeholder="Splash"
                                    ref={airAmount}
                                    className="form-control"
                                    id="__BVID__213"
                                  />
                                </div>
                              </div>
                              <div>
                                <button

                                  onClick={() => directAirDrop()}
                                  style={{ backgroundColor: "#86ad74", color: "white", border: "1px solid #86ad74" }}
                                  type="button"
                                  className="btn fst-italic"
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
                <h2 className="text-white">{t("About.1")}</h2>
                <p className="text-white fst-italic" style={{ fontSize: "20px" }}>
                  {t(
                    "PlayerscanparticipatebypurchasingSplashfromtheplatform'sTheWellpage,joininganotheruser’sSplashteam(1Splashminimumrequirement)DepositingSplashtotheTheTapcontractearnsaconsistent2%dailyreturnoftheirSplash(365%maximumpayout)passively.Playerscanalsocompoundtheirearningsthroughregulardeposits,rollingrewardsaswellasteambasedreferrals.Unlikemanyotherplatformspromisingaconsistentdaily%return,TheTap'scontractcannotdrainandwillALWAYSbeabletoprovidetheSplashthathasbeenrewarded.Splashrewardscomefroma10%taxonallSplashtransactionsexcludingbuysfromtheplatform'sTheWellpage..1"
                  )}
                </p>
                <p id="referral" />
                <p className="text-white fst-italic" style={{ fontSize: "20px" }}>
                  {t(
                    "IfthereiseverasituationwherethetaxpoolisnotenoughtopaySplashrewardsnewSplashwillbemintedtoensurerewardsarepaidout.GiventhegametheorybehindtheSplashnetwork,theprobabilitythatthesystemwillneedtomintnewSplashtopayrewardsisextremelylow.SinceSplashdepositedintoTheTaparesenttoaburnaddressandSplashisconstantlybeinglockedintheliquiditypoolthroughthereservoircontract,SplashistheonlydeflationarydailyROIplatform.ThebeststrategyforSplashistofocusonrealworldadoptionbybuildingoutyourteamthroughdirectreferrals,asyouwillreceivebonusrewardsfromreferralsontheirdepositsanddownlinebonusesfromplayerstheyreferbasedontheamountofSplashDAOheldinyourwallet.1"
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
