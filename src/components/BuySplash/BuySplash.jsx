import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { PreSallAddress, PresallAbi } from '../utils/preSall';
import { faucetContractAddress, faucetContractAbi, faucetTokenAddress, faucetTokenAbi } from "../utils/Faucet";
import { loadWeb3 } from "../api";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';





function BuySplash() {

    let [calsplash, setcalSplash] = useState(0)
    let [balanceOf, setbalanceOf] = useState(0)
    let [CheckWhiteList, setCheckWhiteList] = useState([])
    let [OnChangeValue, setOnChangeValue] = useState(0)
    let [hardcap, sethardcap] = useState('Checking...')
    let [softcap, setsoftcap] = useState('Checking...')






    let getdata = useRef()
    let withDrawValue = useRef()

    let AddAdress_Value = useRef()
    let RemoveAdress_Value = useRef()







    // const Buy = async () => {
    //     try {



    //         let inputvalue = getdata.current.value;
    //         let input_fromWei = web3.utils.fromWei(inputvalue)




    //         let acc = await loadWeb3()
    //         const web3 = window.web3;
    //         let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);
    //         let return_Value = await preSall.methods.whitelist(acc).call();

    //         console.log("True_heeee", return_Value);

    //         if (return_Value == true) {


    //             let limit_here = await preSall.methods.limit(acc).call();
    //             let limit_parWallet_here = await preSall.methods.limitperwallet().call();
    //             console.log("Limit", limit_here);
    //             console.log("Limit", limit_parWallet_here);



    //             if (limit_here<limit_parWallet_here) {

    //                 let CalSp = await preSall.methods.calculateSplashforWT(inputvalue).call();
    //                 let calsplash_fromwei = web3.utils.fromWei(CalSp)
    //                 setcalSplash(calsplash_fromwei)
                 
    //                 inputvalue = web3.utils.toWei(inputvalue)




    //                 await preSall.methods.Buy(inputvalue).send({
    //                     from: acc,
    //                     value: CalSp

    //                 })
    //             } else {
    //                 toast.error("Max Limit Exceed")

    //             }








    //         }
    //         else {
    //             toast.error("You are not WhiteListed")

    //         }









    //     }
    //     catch (e) {

    //         console.log("error while claim", e);
    //     }

    // }


    const Buy = async () => {
        try {



            let inputvalue = getdata.current.value;
        




            let acc = await loadWeb3()
            const web3 = window.web3;
            let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);
            let return_Value = await preSall.methods.whitelist(acc).call();

            console.log("True_heeee", return_Value);

            if (return_Value == true) {

                let limit_here = await preSall.methods.limit(acc).call();
                let limit_parWallet_here = await preSall.methods.limitperwallet().call();
                limit_here=web3.utils.toWei(limit_here)
                console.log("Limit", limit_here);
                console.log("Limit", limit_parWallet_here);

                if(limit_here<limit_parWallet_here){



                    let CalSp = await preSall.methods.calculateSplashforWT(inputvalue).call();
                    let calsplash_fromwei = web3.utils.fromWei(CalSp)
                    setcalSplash(calsplash_fromwei)
                    // CalSp=web3.utils.toWei(CalSp)
                    inputvalue = web3.utils.toWei(inputvalue)




                    await preSall.methods.Buy(inputvalue).send({
                        from: acc,
                        value: CalSp

                    })
                } else {
                    toast.error("MAX Limit Exceed")
    
                }

            }
            else {
                toast.error("You are not WhiteListed")

            }









        }
        catch (e) {

            console.log("error while claim", e);
        }

    }

    const Onchange_here = async () => {

        let inputvalue = getdata.current.value;


        let acc = await loadWeb3()
        const web3 = window.web3;

        console.log("acc", acc)




        let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);
        let CalSp = await preSall.methods.calculateSplashforWT(inputvalue).call();
        let calsplash_fromwei = web3.utils.fromWei(CalSp)
        setOnChangeValue(calsplash_fromwei)

    }


    let balace_here

    const contractBalance = async () => {

        try {

            let acc = await loadWeb3()
            const web3 = window.web3;
            let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);
            balace_here = await preSall.methods.checkContractBalance().call();
            balace_here = web3.utils.fromWei(balace_here)
            setbalanceOf(balace_here)


            if (balace_here >= 650) {
                sethardcap('Reached')


            }
            else {
                sethardcap('Not Reached')

            }

            if (balace_here >= 360) {
                setsoftcap('Reached')


            }
            else {
                setsoftcap('Not Reached')

            }

        }
        catch (e) {

            console.log("error while claim", e);
        }




    }


    const WithdrawAVAX = async () => {
        const web3 = window.web3;

        let withDraw_valu_here = withDrawValue.current.value;
        console.log("Balanc here", balanceOf)
        console.log("Value here", withDraw_valu_here)



        try {
            if (withDraw_valu_here <= balanceOf && withDraw_valu_here > 0) {

                let acc = await loadWeb3()
                let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);

                await preSall.methods.WithdrawAVAX(web3.utils.toWei(withDraw_valu_here)).send({
                    from: acc

                })

            }
            else {
                toast.error("Insufficient Balance")

            }

        }
        catch (e) {

            console.log("error while claim", e);
        }

    }


    const addAdress_here = async () => {

        try {
            let acc = await loadWeb3()
            const web3 = window.web3;

            let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);

            let listingPrice = await preSall.methods.ListingPrice().call();
            console.log("error while claim", listingPrice);


            await preSall.methods.addaddressWhitelist().send({
                from: acc,
                value: listingPrice

            })

        }
        catch (e) {

            console.log("error while claim", e);
        }

    }




    // const RemoveAdress_here = async () => {

    //     try {
    //         let acc = await loadWeb3()
    //         const web3 = window.web3;

    //         let removeAdressValu_add = RemoveAdress_Value.current.value;




    //         console.log("acc", acc)
    //         let Token_value = new web3.eth.Contract(faucetTokenAbi, faucetTokenAddress);

    //         await Token_value.methods.removeAddressFromWhitelist(removeAdressValu_add).send({
    //             from: acc

    //         })

    //     }
    //     catch (e) {

    //         console.log("error while claim", e);
    //     }

    // }




    const check_whiteList = async () => {

        try {
            let acc = await loadWeb3()
            const web3 = window.web3;





            let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);
            let Arraydata = await preSall.methods.Check_WhitelistAccounts().call();
            console.log("Arry datahhhh", Arraydata)
            setCheckWhiteList(Arraydata)


        }
        catch (e) {

            console.log("error while claim", e);
        }

    }

    const addAddressesToWhitelist = async () => {

        try {
            let acc = await loadWeb3()
            const web3 = window.web3;
            let AddAdressValu_add = AddAdress_Value.current.value;


            console.log("acc", acc)
            let preSall = new web3.eth.Contract(PresallAbi, PreSallAddress);

            await preSall.methods.addAddressToWhitelist(AddAdressValu_add).send({
                from: acc

            })

        }
        catch (e) {

            console.log("error while claim", e);
        }

    }



    useEffect(() => {

        setInterval(() => {
            check_whiteList();
            contractBalance();



        }, 1000);
    }, []);



    const { t, i18n } = useTranslation();
    return (
        <div className="images">
            <div className="router-view">
                <div className="container landing-page">
                    <div className="row mb-4 mt-2">
                        <div className="container col-xl-12">
                            <div className="home-text text-center row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <span class="luck-title notranslate" >
                                                {t("BuySplash.1")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-4 mt-2'>
                        <div className="container col-12 col-xl-5 col-lg-5 mb-4">
                            <div className='row'>
                                <div className='col' >
                                    <div className="card  text-white"
                                        style={{ backgroundColor: "#4e2e4b" }}>
                                        <div className="card-body">
                                            <div className="landing-page">
                                                <div className="text-left">
                                                    <h3>
                                                        <p
                                                            className="notranslate fst-italic"
                                                            style={{ fontSize: "22px" }}
                                                        >
                                                            {t("SplassivePresaleDetails.1")}
                                                        </p>
                                                    </h3>
                                                </div>
                                                <ui>
                                                    <li>{t("WalletMustbewhitelist.1")}</li>
                                                    <li>{t("PresalePrice0.00605AVAX.1")}</li>
                                                    <li>{t("ListingPrice0.03025AVAX.1")}</li>
                                                    <li>{t("Max5AVAXperWallet.1")}</li>
                                                </ui>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <div className="card  text-white"
                                        style={{ backgroundColor: "#4e2e4b" }}>
                                        <div className="card-body">
                                            <div className="landing-page">
                                                <div className="text-left">
                                                    <h3>
                                                        <p
                                                            className="notranslate fst-italic"
                                                            style={{ fontSize: "22px" }}>
                                                            {t("PresaleContractBalance.1")}
                                                        </p>
                                                    </h3>
                                                </div>

                                                <div className="row ">
                                                    <div className="col-6">
                                                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                                                            {t("ContractBalance.1")}
                                                        </p>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end" >
                                                        <span
                                                            className="fst-italic"
                                                            style={{ fontSize: "16px" }}
                                                        >
                                                            {balanceOf}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className="col-6">
                                                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                                                            {t("HARDCAP650AVAX.1")}
                                                        </p>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end" >
                                                        <span
                                                            className="fst-italic"
                                                            style={{ fontSize: "16px" }}
                                                        >
                                                            {hardcap}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className="col-6">
                                                        <p className="fst-italic" style={{ fontSize: "16px" }}>
                                                            {t("SOFTCAP360AVAX.1")}
                                                        </p>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end" >
                                                        <span
                                                            className="fst-italic"
                                                            style={{ fontSize: "16px" }}
                                                        >
                                                            {softcap}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className=''>

                                                    {/* <button
                                                        type="button"
                                                        className="btn btn-outline-light fst-italic "
                                                        onClick={() => addAdress_here()}
                                                        

                                                    >
                                                        {t("Get Listed")}
                                                    </button> */}

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container col-12 col-xl-6 col-lg-6 mb-4">
                            <div className='row'>
                                <div className='col' >
                                    <div className="card  text-white"
                                        style={{ backgroundColor: "#4e2e4b" }}>
                                        <div className="card-body">
                                            <div className="landing-page">
                                                <div className="text-left">
                                                    <h3>
                                                        <p className="notrans.late fst-italic text-center" style={{ fontSize: "30px" }}>{t("PreSale.1")}</p>
                                                    </h3>
                                                </div>
                                                <form className="mt-5">
                                                    <div id="buddy-input">
                                                        <fieldset className="form-group" id="__BVID__216">
                                                            <h3>
                                                                <legend
                                                                    tabIndex={-1}
                                                                    className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                                                    id="__BVID__216__BV_label_"
                                                                >
                                                                    <p style={{ lineHeight: "40%" }}>
                                                                        {t("EstimatereceivedSplash.1")}

                                                                    </p>
                                                                </legend>
                                                            </h3>
                                                            <div>
                                                                <input

                                                                    ref={getdata}


                                                                    type="Number"
                                                                    placeholder="0"
                                                                    className="form-control"
                                                                    id="__BVID__217"

                                                                    onChange={() => Onchange_here()}
                                                                />
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </form>



                                                <form className="mt-5">
                                                    <div id="buddy-input">
                                                        <fieldset className="form-group" id="__BVID__216">
                                                            <h3>
                                                                <legend
                                                                    tabIndex={-1}
                                                                    className="bv-no-focus-ring col-form-label pt-1 fst-italic"
                                                                    id="__BVID__216__BV_label_"
                                                                >
                                                                    <p style={{ lineHeight: "40%" }}>
                                                                        {t("AVAX.1")}
                                                                    </p>
                                                                </legend>
                                                            </h3>
                                                            <div>
                                                                <input

                                                                    type="Number"
                                                                    value={OnChangeValue}

                                                                    className="form-control"
                                                                    id="__BVID__217"

                                                                />
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </form>
                                                <div className='row d-flex justify-content-center mt-5'>
                                                    <div className='col-md-6 col-11' >
                                                        <div className="d-grid gap-2">
                                                            <button className='btn fst-italic  mt-2 fw-bold p-2' size="lg" style={{ backgroundColor: "#86ad74", color: "white", fontSize: "25px" }} onClick={() => Buy()} >
                                                                {t("BUY SPLASH")}
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row d-flex justify-content-center mb-5'>
                        <div className='col-lg-11'>
                            <div className="card text-white" style={{ backgroundColor: "#4e2e4b", color: "#dacc79", border: "2px solid #4e2e4b" }}>

                                <p
                                    className="card-text fst-italic text-center mt-3 fw-bold"
                                    style={{ fontSize: "30px" }}
                                >
                                    {t("ADMINPANEL.1")}
                                </p>

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
                                        <div id="buddy-input ">
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
                                                                {t("Withdraw.1")}
                                                            </p>
                                                        </legend>
                                                    </h3>
                                                    <div>
                                                        <input

                                                            ref={withDrawValue}

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
                                                        className="btn btn-outline-light fst-italic"

                                                        onClick={() => WithdrawAVAX()}
                                                    >
                                                        {t("Withdraw.1")}
                                                    </button>
                                                </div>

                                            </form>
                                        </div>



                                        {/* <div id="buddy-input ">
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
                                                            <p className='mt-4' style={{ lineHeight: "40%" }}>
                                                                {t("RemoveAddressFromWhitelist.1")}
                                                            </p>
                                                        </legend>
                                                    </h3>
                                                    <div>
                                                        <input

                                                            type="text"
                                                            ref={RemoveAdress_Value}
                                                            placeholder="Address"
                                                            className="form-control"
                                                            id="__BVID__217"
                                                        />
                                                    </div>
                                                </fieldset>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-light fst-italic" onClick={() => RemoveAdress_here()}
                                                    >
                                                        {t("RemoveAddressFromWhitelist.1")}
                                                    </button>
                                                </div>

                                            </form>
                                        </div> */}


                                        <div id="buddy-input  mt-2">
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
                                                            <p className='mt-4' style={{ lineHeight: "40%" }}>
                                                                {t("AddAddressToWhiteList.1")}
                                                            </p>
                                                        </legend>
                                                    </h3>
                                                    <div>
                                                        <input

                                                            type="text"
                                                            ref={AddAdress_Value}
                                                            placeholder="Address"
                                                            className="form-control"
                                                            id="__BVID__217"
                                                        />

                                                        {/* {
                                                            CheckWhiteList.map((items, index) => {

                                                                return (
                                                                    <>
                                                                        <ul className='listarray'>
                                                                            <li>{items}</li>
                                                                        </ul>
                                                                    </>
                                                                )
                                                            })
                                                        } */}


                                                    </div>
                                                </fieldset>
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-light fst-italic" onClick={() => addAddressesToWhitelist()}
                                                    >
                                                        {t("Add Addresses ToWhiteList")}
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
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
    )
}

export default BuySplash