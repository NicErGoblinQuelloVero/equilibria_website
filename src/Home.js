import React,{useEffect, useRef} from "react"
import FAQSection from "./FAQSection"
import nonkyc from "./assets/nonkyclogoicon.png"
import tradeOgre from "./assets/tradeOgre.png"
import coin from "./assets/coin2.png"
import sectionShape from "./assets/sectionShape.svg"
import sectionShape2 from "./assets/s02.svg"
import imgHome from "./assets/4o.png"
import Card from "./Card"
import CardTeam from "./CardTeam"
import TeamCarousel from "./TeamCarousel"


import x from "./assets/x.png"
import discord from "./assets/discord.png"
import telgram from "./assets/telegram.png"



const Home = () => {

    useEffect(() => {
        const handleScroll = () => {
          const cards = document.querySelectorAll(".animated-card");
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8; // Cambia il valore in base a quando vuoi far apparire le card
            if (isVisible) {
              card.classList.add("show");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Pulisci l'ascoltatore di eventi quando il componente viene smontato
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); // L'effetto viene eseguito solo al montaggio

    return ( 
        <main className="flex-shrink-0">
            <header className="py-5 inizio" style={{ overflow: "hidden", position: "relative" }}>
            <div className="container px-3 pb-5">
                <div className="row gx-3 align-items-center">
        
                <div className="col-12 col-md-8  col-sm-8">
                    <div className="text-center text-xxl-start sas">
                    <h1 className="fw-bolder titolo d-none d-sm-block" style={{ color: "black", fontSize: "8rem",fontFamily:'Montserrat'}}>
                        <span className="text d-inline">Equilibria</span>
                    </h1>
                    <p className="fw display-6 titolo2" style={{ color: "black", fontSize: "2rem" }}> The Private and Chain-Agnostic Oracle </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-left justify-content-xxl-start offset">
                        <div className="row">
                        <div className="col d-none d-md-block">
                            <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder inc" href="https://explorer.equilibriacc.com/" style={{boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>Explorer</a>
                        </div>
                        <div className="col" style={{textAlign:'left'}}>
                            <a className="btn btn-outline-dark btn-lg px-4 py-3 me-sm-3 fs-6 fw-bolder buttonHome inc" href="https://github.com/EquilibriaCC/Equilibria/wiki" style={{border:"none",boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>Documentation</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-sm-4">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    <div className="profile">
                        <img className="profile-img shape" src={imgHome}></img>
                        <img className="profile-img float-animation" src={coin}></img>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>

            <section className="bg-light py-5 " style={{ overflow: "hidden", position: "relative" }}>
            <div className="container px-6">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                <div className="text-center my-5">
                    <h1 className="display-4 fw-bolder">
                    <span className=" d-inline">Discover Equilibria</span>
                    </h1>
                </div>
                </div>
            </div>
            <div style={{ position: "relative", zIndex: "2" }}>
                <div className="cards mx-auto" >
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <Card title="Private" text="Equilibria, a privacy-focused cryptocurrency stemming from the Monero fork,
                         places significant emphasis on private and untraceable transactions, ensuring an elevated level of confidentiality 
                         and security within the dynamic landscape of digital currencies for user protection and financial privacy"/>    
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4 ">
                        <Card title="Decentralized" text="Equilibria employs a sophisticated hybrid Proof of Work (PoW) and Proof of 
                        Stake (PoS) consensus algorithm, a groundbreaking approach that not only validates transactions but also governs 
                        the Oracle Nodes, solidifying its status as an innovative and versatile blockchain platform at the forefront of the 
                        cryptocurrency landscape."/>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4 ">
                        <Card title="Versatile" text="Equilibria's oracle system stands out with remarkable chain-agnostic capabilities, 
                        showcasing its versatility through comprehensive solutions in decentralized finance (DeFi). Simultaneously, it ensures an 
                        added layer of privacy for ERC-20 tokens, further enhancing its position in the evolving cryptocurrency ecosystem."/>
                    </div>
                </div>
                </div>
            </div>
            <img src={sectionShape} className="sectionShape" alt="Section Shape" style={{ position: "absolute", bottom: "-800px", left: "-850px", width: "100%" }} />
            </div>
        </section>
        <section className="bg-white py-5 mt-2" >
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
                <div className="text-center my-5">
                <h2 className="display-4 fw-bolder mb-5">
                    <span className="text d-inline">Follow Us</span>
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card " style={{ border: "none" }}>
                                <a href=" https://t.me/EquilibriaCommunity">
                           
                                <img src={telgram} style={{ width: '70%' }} className="mx-auto loghi" alt="Telegram"></img>
                                </a>
                                <div className="card-body">
                              
                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card " style={{ border: "none" }}>
                           
                                <a href=" https://discord.com/invite/Ps9pBmc2QX">
                                    <img src={discord} style={{ width: '70%' }} className="mx-auto loghi" alt="Telegram"></img>
                                </a>
                                <div className="card-body">
                                
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ border: "none" }}>
                                <a href="https://twitter.com/EquilibriaDevs">
                                    <img src={x} style={{ width: '70%' }} className="mx-auto loghi" alt="Telegram"></img>
                                </a>
                                <div className="card-body">
                                
                                </div>
                            </div>
                        </div>
                    </div>



                   
                </div>

                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="bg-light py-5 teamSection" style={{height:"900px",overflow:"hidden"}}>
       
            <div>
                <div className="cards mx-auto" style={{marginTop:"-100px"}}>
                
                    <TeamCarousel></TeamCarousel>
                    </div>
                    <img src={sectionShape2} className="sectionShape2" alt="Section Shape"  style={{zIndex:"1", marginTop:"-750px",marginLeft:"1000px",width:"70%"}}/>
        </div>
     
        </section>

        

        <section className="bg-white py-5" id="exchanges">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
                <div className="text-center my-5">
                <h2 className="display-4 fw-bolder mb-5">
                    <span className="text d-inline">Available On</span>
                </h2>
                <div className="container">
                    <div className="row">
                    <div className="col-md">
                        <div className="card mt-4" style={{border:"none"}}>
                        <img src={tradeOgre} style={{width:'85%'}} className="mx-auto logoExchange"></img>
                        <div className="card-body">
                            <h2 className="fw-light mb-4">Trade Ogre</h2>
                            <a className="btn btn-primary btn-lg px-5 py-3  fw-bolder inc bottoneCard" href="https://tradeogre.com/exchange/XEQ-BTC"  style={{marginTop:"10px"}}><p className="cText">Buy now</p></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md"></div>
                    <div className="col-md">
                        <div className="card mt-4" style={{border:"none"}}>
                        <img  src={nonkyc} style={{width:'85%'}} className="mx-auto logoExchange"></img>
                        <div className="card-body">
                            <h2 className="fw-light mb-4 ">NonKYC</h2>
                            <a className="btn btn-primary btn-lg px-5 py-3  fw-bolder inc bottoneCard" href="https://nonkyc.io/market/XEQ_BTC" style={{marginTop:"10px"}}><p className="cText">Buy now</p></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section id="FAQsection">
            <FAQSection></FAQSection>
        
        </section>

    </main>

     );
}
 
export default Home;
