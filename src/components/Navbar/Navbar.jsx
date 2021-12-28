import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import metamask from "../../images/metamask.png";
import wallet from "../../images/wallet-connect.jfif";
import { useWeb3React } from "@web3-react/core";
import logo from "../../images/logo.png";
import language from "../../images/language.png";
import uk from "../../images/uk.png";
import china from "../../images/china.png";
import japan from "../../images/japan.png";
import korea from "../../images/korea.png";
import spain from "../../images/spain.png";
import rusia from "../../images/rusia.png";
import france from "../../images/france.png";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Navbarapp = () => {
  const { t, i18n } = useTranslation();
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const [show, setshow] = useState(false);

  function handleClick(lang) {
    console.log("lang", lang);
    i18n.changeLanguage(lang);
  }


  const connectWallet = () => {
    if (show) {
      setshow(false);
      logout();
    } else {
      setshow(true);
    }
  };

  console.log("account", account);
  const connectMetaMask = () => {
    localStorage.setItem("injected", "injected");
    login("injected");
    localStorage.setItem("flag", "true");
    setshow(false);
  };
  const walletConnect = async () => {
    localStorage.setItem("walletconnect", "walletconnect");
    login("walletconnect");
    setshow(false);
  };

  return (
    <div className="fluid-container navbarmain">
      <div className="container">
        <Navbar collapseOnSelect expand="lg" className="" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand
                href=""
                style={{ color: "white" }}
                className="navbarlogo m-md-2"
              >
                PEARL NETWORK
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ">
                <Link to="/swap" style={{ textDecoration: "none" }}>
                  {" "}
                  <Nav.Link href="#swap" className="ml-md-2" id="navbartext">
                  {t('SWAP.1')}
                  </Nav.Link>
                </Link>
                <Link to="/facuet" style={{ textDecoration: "none" }}>
                  <Nav.Link href="#facuet" id="navbartext">
                  {t('FAUCET.1')}
                  </Nav.Link>
                </Link>
                <Link to="/reservoir">
                  <Nav.Link href="#reservoir" id="navbartext">
                  {t('RESERVOIR.1')}
                  </Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" id="navbartext">
                {t('Whitepaper.1')}
                </Nav.Link>
                <Nav.Link
                  eventKey={5}
                  href="#memes"
                  id="navbartext"
                  id="navbartext"
                >
                   {t('BuyBR34P.1')}
                </Nav.Link>
                <Nav.Link href="#Tutorial" id="navbartext">
                {t('Tutorial.1')}
                </Nav.Link>
                {/* <MdLanguage/> */}
                <NavDropdown title="Lang" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="" onClick={() => handleClick("en")}>
                    <img src={uk} /> {t('English.1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => handleClick("chi")}>
                    <img src={china} />
                    {t('China.1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => handleClick("Ko")}>
                    <img src={korea} />
                    {t('Korea.1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => handleClick("sp")}>
                    <img src={spain} />
                    {t('Spain.1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => handleClick("ru")}>
                    <img src={rusia} />
                    {t('Rusia.1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("fr")}>
                    <img src={france} />
                    {t('France.1')}
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <button className='btn btn-light' onClick={connectWallet}>
      <g data-v-de8c4aa0>
        <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z">
        </path>
        </g>
         {account ? "Disconnect" : "Connect Wallet"}        
      </button> */}

                <div>
                  <button className="btn btn-light" onClick={connectWallet}>
                    <g data-v-de8c4aa0>
                      <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"></path>
                    </g>
                    {account ? "Disconnect" : "Connect Wallet"}
                  </button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Modal isOpen={show} className="sc-fujyUd chnMFN web3modal-modal-card" size="md"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader >
          <button type="button" className="close mr-auto" data-dismiss="modal" onClick={() => setshow(false)} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody className="modal-body sc-eCApGN cjAFRf web3modal-provider-wrapper">
          <div className="container main-divs">
            <div className="metamask_main">
              <button type="button" onClick={connectMetaMask} className="metamask_btn">
                <div>
                  <img src={metamask} alt="" className="connect_img" />
                </div>
                <h3 className="metamask_heading">{t('MetaMask.1')}</h3>
                <p className="modal_text">{t('ConnecttoyourMetaMaskWallet.1')}</p>
              </button>
            </div>
            <div className="metamask_main">
              <button type="button" onClick={walletConnect} className="metamask_btn">
                <div className="scan-wallet" >
                  <img src={wallet} alt="WalletConnect" className="connect_img" />
                  <h3 className="metamask_heading">{t('WalletConnect.1')}</h3>
                  <p className="modal_text">{t('ScanwithWalletConnecttoconnect.1')}</p>
                </div>
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
        {/* <div id="topNavigation">
        <nav className="navbar navbar-dark bg-info navbar-expand-lg" style={{ background: '#4369b2 !important' }}>
          <div className="container">
            <span>
              <Link to="/" className="navbar-brand router-link-active" ><h2 className="pl-3"><span id="logo-text">Pearl Network</span><img id="logo_img" src={logo} /></h2>
              </Link>
            </span>
            <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"  aria-expanded="false" aria-controls="nav-collapse" style={{ overflowAnchor: 'none' }}>
              <span className="navbar-toggler-icon" />
            </button>
            <div id="nav-collapse" className="navbar-collapse collapse">
              <ul className="navbar-nav">
                <li className="nav-item nav-link">
                  <Link to="/swap" className="nav-link router-link-exact-active active">Swap</Link>
                </li>
                <li className="nav-item nav-link">
                  <Link to="/facuet" className="nav-link" >Faucet</Link>
                </li>
                <li className="nav-item nav-link">
                  <a href="http://pearl.survey4earn.com/frontend/assets/invetment plans.pdf" target="_blank" className="nav-link ">Investment Plan</a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto menus">
                <li className="nav-item nav-link">
                  <a href="http://pearl.survey4earn.com/frontend/assets/WHITE_PAPER_FINAL.pdf" target="_blank" className="nav-link">Whitepaper</a>
                </li>
                <li className="nav-item nav-link">
                  <a href="http://pearl.survey4earn.com/frontend/assets/road_map.pdf" target="_blank" className="nav-link">Road Map</a>
                </li>
                <li className="nav-item nav-link">
                  <a href="https://youtu.be/TOJg308iREw" target="_blank" className="nav-link">Tutorial</a>
                </li>
                <li id="languageDowndrop" className="nav-item b-nav-dropdown dropdown">
                  <a role="button" className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={language} className="p-1" />
                    lang </a>
                  <ul tabIndex="1" aria-labelledby="dropdownMenuButton" className="dropdown-menu dropdown-menu-right">
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/en" type="button" role="menuitem" className="dropdown-item">English <span><img src={uk} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/cn" role="menuitem" className="dropdown-item">中文 <span><img src={china} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/jp" role="menuitem" className="dropdown-item">日本人 <span><img src={japan} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/kr" role="menuitem" className="dropdown-item">한국어 <span><img src={korea} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/sp" role="menuitem" className="dropdown-item">Español <span><img src={spain} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/ru" role="menuitem" className="dropdown-item">Русский <span><img src={rusia} /></span></a></li>
                    <li role="presentation"><a href="http://pearl.survey4earn.com/language/fr" role="menuitem" className="dropdown-item">Français <span><img src={france} /></span></a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div>
                    
                    <button className="btn btn-light" onClick={connectWallet}>
                      <g data-v-de8c4aa0>
                        <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z">
                        </path>
                      </g>
                      {account ? "Disconnect" : "Connect Wallet"}</button>
                  </div>
              
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Modal isOpen={show} className="sc-fujyUd chnMFN web3modal-modal-card" size="md"
        aria-labelledby="contained-modal-title-vcenter" centered>
        <ModalHeader >
          <button type="button" className="close mr-auto" data-dismiss="modal" onClick={() => setshow(false)} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody className="modal-body sc-eCApGN cjAFRf web3modal-provider-wrapper">
          <div className="container main-divs">
            <div className="metamask_main">
              <button type="button" onClick={connectMetaMask} className="metamask_btn">
                <div>
                  <img src={metamask} alt="" className="connect_img" />
                </div>
                <h3 className="metamask_heading">MetaMask</h3>
                <p className="modal_text">Connect to your MetaMask Wallet</p>
              </button>
            </div>
            <div className="metamask_main">
              <button type="button" onClick={walletConnect} className="metamask_btn">
                <div className="scan-wallet" >
                  <img src={wallet} alt="WalletConnect" className="connect_img" />
                  <h3 className="metamask_heading">WalletConnect</h3>
                  <p className="modal_text">Scan with WalletConnect to connect</p>
                </div>
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal> */}
      </div>
    </div>
  );
};

export default Navbarapp;
