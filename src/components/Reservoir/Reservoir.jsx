import React,{useState,useEffect, useRef} from "react";
import balance from "../../images/balance.png";
import undo from "../../images/undo.png";
import refresh from "../../images/refresh.png";
import speedometer from "../../images/speedometer.png";
import astro from "../../images/drops.png";
import contact from "../../images/contact (2).png";
import user from "../../images/user.png";
import pearl from "../../images/pearl.png";
import dummy from "../../images/dollar.png";
import transfer from "../../images/transfer.png";
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
import { loadWeb3 } from "../api";
import { faucetContractAddress, faucetContractAbi} from "../utils/Faucet";
import {fountainContractAbi, fountainContractAddress} from '../utils/Fountain';
import {dripTokenAbi, dripTokenAddress} from '../utils/DripToken';
import {reservoirAbi,reservoirAddress} from '../utils/Reservoir';
import Web3 from "web3";
const webSupply= new Web3("https://cronos-testnet-3.crypto.org:8545/");

function Reservoir() {
  const { t, i18n } = useTranslation();
  let buyInput = useRef()
  let withdrawInput = useRef();
  let [userBnbBalance, setUserBnbBalance]=useState(0);
  let [userDropBalance, setUserDropBalance]=useState(0);
  let [bnbDripPrice, setBnbDripPrice]=useState(0);
  let [userReward, setUserReward]=useState(0)
  let [totalDrops, setTotalDrops]= useState(0);
  let [stake, setStake]=useState(0);
  let [totalWithDraw, setTotalWithDraw]=useState(0);
  let [compundTotal, setCompoundTotal]= useState(0);
  let [player, setPlayer]=useState(0);
  let [loackedValue, setLoackedValue]=useState(0);
  let [totalTxs, setTotalTxs]=useState(0)
  let [reward, setReward]=useState(0)
const getDataWithMetaMask=async()=>{
  try{
  let acc = await loadWeb3();
  if(acc == "No Wallet"){
    setUserReward(0)
  }else{
    const web3 = window.web3;
    let contractOf = new web3.eth.Contract(reservoirAbi,reservoirAddress);
    let userRew = await contractOf.methods.dividendsOf(acc).call();
    userRew = web3.utils.fromWei(userRew);
    userRew = parseFloat(userRew).toFixed(3);
      setUserReward(userRew)
   }  
    }catch(e){
      console.log("get data in ", e);
    }
}

const getDataWithoutMetaMask=async()=>{
  try{
    let contract =new webSupply.eth.Contract(reservoirAbi,reservoirAddress);
    let totalDro= await contract.methods.totalSupply().call();
    totalDro = await webSupply.utils.fromWei(totalDro);
    totalDro= parseFloat(totalDro).toFixed(3);
    let totalDeposit= await contract.methods.totalDeposits().call();
    totalDeposit = await webSupply.utils.fromWei(totalDeposit);
    totalDeposit= parseFloat(totalDeposit).toFixed(3);
    let totalDraw= await contract.methods.totalWithdrawn().call();
    totalDraw = await webSupply.utils.fromWei(totalDraw);
    totalDraw= parseFloat(totalDraw).toFixed(3);
    let cmpdTotal= await contract.methods.myDividends().call();
    cmpdTotal = await webSupply.utils.fromWei(cmpdTotal);
    cmpdTotal= parseFloat(cmpdTotal).toFixed(3);
    let players= await contract.methods.players().call();
    // players = await webSupply.utils.fromWei(players);
    // players= parseFloat(players).toFixed(3);
    let loackBalance= await contract.methods.lockedTokenBalance().call();
    loackBalance = await webSupply.utils.fromWei(loackBalance);
    loackBalance= parseFloat(loackBalance).toFixed(3);
    let txs= await contract.methods.totalTxs().call();
    let rew = await contract.methods.dividendBalance().call()
    rew =  webSupply.utils.fromWei(rew);
    rew= parseFloat(rew).toFixed(3);
    setTotalDrops(totalDro)
    setStake(totalDeposit)
    setTotalWithDraw(totalDraw);
    setCompoundTotal(cmpdTotal);
    setPlayer(players);
    setLoackedValue(loackBalance)
    setTotalTxs(txs)
    setReward(rew);
  }catch(e){
    console.log("error while get without metamsk data", e);
  }

}

const bnbBalance=async()=>{
  try{
    let acc=await loadWeb3();
    if(acc== "No Wallet"){
      setUserBnbBalance(0)
    }else{
    const web3= window.web3;
    let userBnB= await web3.eth.getBalance(acc);
    let convertUserBnB= await web3.utils.fromWei(userBnB);
    convertUserBnB= parseFloat(convertUserBnB).toFixed(3)
    setUserBnbBalance(convertUserBnB)
  }
  }catch(e){
    console.log("error while get bnb balance", e);
  }
}
const dropBalance=async()=>{
  try{
    let acc=await loadWeb3();
    if(acc== "No Wallet"){
      setUserDropBalance(0);
    }else{
    const web3= window.web3;
    let contract= new web3.eth.Contract(reservoirAbi,reservoirAddress);
    let userDrop= await contract.methods.balanceOf(acc).call();
    let convertuserDrop= await web3.utils.fromWei(userDrop);
    convertuserDrop= parseFloat(convertuserDrop).toFixed(3)
    setUserDropBalance(convertuserDrop)

  }
  }catch(e){
    console.log("error while get Drop balance", e);
  }
}

const getPerBnbDripPrice=async()=>{
try{
let acc= await loadWeb3()
if(acc == "No Wallet"){
  setBnbDripPrice(0);
}else{
  let web3= window.web3;
  let contract= new web3.eth.Contract(dripTokenAbi, dripTokenAddress);
  let dropBal= await contract.methods.balanceOf(reservoirAddress).call();
  dropBal= await web3.utils.fromWei(dropBal);
  let reservireBnb= await web3.eth.getBalance(reservoirAddress);
  reservireBnb= await web3.utils.fromWei(reservireBnb);
let price= reservireBnb/ dropBal;
price= parseFloat(price).toFixed(3)
setBnbDripPrice(price);

}

}catch(e){
  console.log("get Per Bnb Price", e);
}
}

const buy=async()=>{
  try{
    let acc=await loadWeb3();
    if(acc == "No Wallet"){
alert("no wallet")
    }else{
      const web3= window.web3;
    let bal= await web3.eth.getBalance(acc);
    bal = web3.utils.fromWei(bal)

      // let bal =await web3.eth.getBalance(acc);
            if(buyInput.current.value == "" && buyInput.current.value == undefined  ){
              toast.error("Please Enter any Value")
            }else if(  bal < buyInput.current.value  ){
              
              toast.error("fund insufficient");
            }else if(buyInput.current.value  < 0.01){
              toast.error("Entered Value is below then min 0.01")

            }else {
              let contract = new web3.eth.Contract(reservoirAbi,reservoirAddress);
              
              await contract.methods.buy().send({
                from:acc,
                value: web3.utils.toWei(buyInput.current.value)
              })
              toast.success("Transaction Successed")
            }
    }

  }catch(e){
    console.log("error while buy function", e);
    toast.error("Transaction Rejected")
  }

}
const compound = async () => {
try{
  let acc = await loadWeb3();
if(acc == "No Wallet"){
  console.log("No Wallet Connected")
}else{
  const web3 = window.web3;
  let contract = new web3.eth.Contract(reservoirAbi,reservoirAddress);
  let val =await contract.methods.dividendsOf(acc).call()
  if(val > 0){

    await contract.methods.reinvest().send({
      from:acc
    })
  }else{
    toast.error("your dividend balance is low")
  }
}
}catch(e){
  console.log("error while compound", e);
}
}
const claim = async () => {
  try{
    let acc = await loadWeb3();
    if(acc == "No Wallet"){
      console.log("No Wallet Connected")
    }else{
      const web3 = window.web3;
      let reserContract = new web3.eth.Contract(reservoirAbi,reservoirAddress);
      let fountainContract = new web3.eth.Contract(fountainContractAbi, fountainContractAddress);
      let isWhiteList= await fountainContract.methods.whitelist(acc).call();
      let dividendsOf = await reserContract.methods.dividendsOf(acc).call();
      dividendsOf= web3.utils.fromWei(dividendsOf)
      let myDividends = await reserContract.methods.myDividends().call();
      myDividends = web3.utils.fromWei(myDividends)
      console.log("myDividends list", dividendsOf);
      if(dividendsOf <= 0 ){
        toast.error("you have zero dividends")
      }else if(isWhiteList == false ){
        toast.error("you are not white listed")
      }else if(myDividends <= 0){
        toast.error("you have zero dividends")
      }else{
        await reserContract.methods.withdraw().call({from:acc})
      }
      

    }
  
  }catch(e){
    console.log("error while claim", e);
  }
}
const withdraw= async () =>{
try{
  let acc = await loadWeb3();
 
  if(acc == "No Wallet"){
    console.log("No Wallet Connected")
  }else{
    const web3 = window.web3;
    let contract = new web3.eth.Contract(reservoirAbi,reservoirAddress);
    let balance = await contract.methods.balanceOf(acc).call();
    balance = web3.utils.fromWei(balance);    
    if(withdrawInput.current.value == "" ){
      toast.error("Enter value please");
    }
    else if( withdrawInput.current.value <= 0){
      toast.error("Kindly Enter greater than 0")
    }else if(balance <=0){
      toast.error("insufficient Balance")
    }else if(withdrawInput.current.value <= balance  ){
      let val = web3.utils.toWei(withdrawInput.current.value);
      await contract.methods.sell(val).send({from:acc});
      toast.success("Withdraw Successed")
    }else{
      toast.error("insufficient funds")
    }
  
    
  }

}catch(e){
  console.log("error while withdraw", e);
}
}
useEffect(() => {
  window.scrollTo(0, 0);
  setInterval(() => {
    getPerBnbDripPrice();
  bnbBalance();
  dropBalance()
  getDataWithMetaMask();
  getDataWithoutMetaMask();
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
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{reward}</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>{t("CRO.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={astro} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                      {t("TotalDROPS.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{totalDrops}</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>{t("DROP.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={speedometer} alt="" width="40px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Stake.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{stake}</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>%</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={refresh} alt="" width="54px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("Compounds.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>...</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>{t("Count.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={contact} alt="" width="94px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                      {t("TotalWithdrawn.1")}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{totalWithDraw}</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>{t("CRO.1")}</p>
                    </div>
                  </div>
                  <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                    <div className="price-top-part">
                      <img src={undo} alt="" width="30px" />
                      <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-1 fst-italic" style={{ color: "#7c625a" }}>
                        {t("CompoundedTotal.1")}{" "}
                      </h5>
                      <p className="text-large mb-2 text-white fst-italic">
                        <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{compundTotal}</span>
                      </p>
                      <p className="text-small fst-italic" style={{backgroundColor: "#4e2e4b"}}>{t("CRO.1")}</p>
                    </div>
                  </div>
                </div>
                <p className="col-12 white mb-3 text-justify fst-italic text-white" style={{fontSize: "20px"}}>
                  {" "}
                  {t("ReservoirisTheSplashNetwork’ssolutionforplayersthatwantbenefitfromnon-inflationaryyieldfarmingthroughaddingliquiditytoSplash.1")}
                </p>
                <p className="col-12 white mb-3"></p>
                <div>
                  <button
                  style={{ color: "#7c625a", fontSize: "20px" }}
                    type="button"
                    className="btn btn-outline-light btn-block"
                    onClick={compound}
                  >
                    <b>{t("COMPOUND.1")}</b>
                    
                  </button>
                  <button
                  style={{ color: "#7c625a",fontSize: "20px" }}
                    type="button"
                    className="btn btn-outline-light btn-block"
                    onClick={claim}
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
                        {t("CROBalance.1")}:
                        <label className="user-balance text-white fst-italic">
                        {userBnbBalance}
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
                              {t("CRO.1")}/{t("Splash.1")}
                              ≈
                                {bnbDripPrice}
                              </label>
                            </p>
                          </div>
                        </div>
                        <div role="group" className="input-group">
                          <input
                            type="number"
                            placeholder="CRO"
                            className="form-control"
                            id="__BVID__213"
                            ref={buyInput}
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
                            onClick={()=>buy()}
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
                                {userDropBalance}
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
                              ref={withdrawInput}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-end">
                          <div className="col-12 text-left">
                            <button
                              type="button"
                              className="btn btn-outline-light"
                              
                              onClick={withdraw}
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
                {t("ReservoirisTheSplashNetwork’ssolutionforplayersthatwantbenefitfromnoninflationaryyieldfarmingthroughaddingliquiditytoSplash.Herearethenumbers.1")}...
                </p>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                <div className="price-top-part">
                  <img src={user} alt="" className="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 fst-italic" style={{ color: "#7c625a" }}>
                    {t("Players.1")}
                  </h5>
                  <p className="text-large mb-2 text-white fst-italic">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{player}</span>
                  </p>
                  <p className="text-small fst-italic">{t("UserCount.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 text-center">
                <div className="price-top-part">
                  <img src={astro} alt="" width="60px" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-3 fst-italic" style={{ color: "#7c625a" }}>
                  {t("TotalValueLocked.1")}
                  </h5>
                  <p className="text-large mb-2 text-white fst-italic">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{loackedValue}</span>
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
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{reward}</span>
                  </p>
                  <p className="text-small">{t("CRO.1")}</p>
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
                  <p className="text-small">{t("DROPS.1")} ({t("Splash.1")} / {t("LOCKED.1")})</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 mt-3 text-center">
                <div className="price-top-part">
                  <img src={balance} alt="" width="60px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("ContractBalance.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}> {totalDrops} {t("CRO.1")}</span>
                  </p>
                  <p className="text-small">{t("DROPS.1")} ≈{t("USDT.1")}</p>
                </div>
              </div>
              <div className="container col-6 col-xl-4 col-lg-4 col-md-4 mt-3 text-center">
                <div className="price-top-part">
                  <img src={transfer} alt="" width="50px" className="" />
                  <h5 className="mb-0 font-weight-semibold color-theme-1 mb-2 mt-2" style={{ color: "#7c625a" }}>
                    {t("Transactions.1")}
                  </h5>
                  <p className="text-large mb-2 text-white">
                    <span className="notranslate" style={{ color: "#ab9769", fontSize: "20px" }}>{totalTxs}</span>
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
