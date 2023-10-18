import nonkyc from "./assets/nonkyclogoicon.png"
import tradeOgre from "./assets/tradeOgre.png"
import formaHome from "./assets/prova.svg"
import coin from "./assets/0.png"
import sectionShape from "./assets/sectionShape.svg"
import logo from "./assets/xeqLogo.png"
import imgHero from "./assets/prova5.png"
const Home = () => {
    
    return ( 
        <main className="flex-shrink-0">
    
    <header className="masthead" style={{overflow:"hidden"}}>
        <div className="container-fluid">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 col-md-12 prova" style={{ zIndex: 1}}>

                    <div className="mb-6 mb-lg-0 mt-5 mt-lg-0 text-left text-lg-start offset-3 justify-content-left" >
                        <div className="col justify-content-left blockHome" >
                            <h1 className="fw-bolder titolo d-none d-sm-block" style={{ color: "black", fontSize: "10rem",fontFamily:'Montserrat'}}><span className="text d-inline">Equilibria</span></h1>
                            <p className="fw display-6 titolo2"  style={{ color: "black", fontSize: "2rem" }}>The Private and Chain-Agnostic Oracle</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-left justify-content-xxl-start mb-3 offset">
                                <div className="row">
                                    <div className="col d-none d-md-block">
                                        <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="#" style={{boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>Explorer</a>
                                    </div>
                                    <div className="col" style={{textAlign:'left'}}>
                                        <a className="btn btn-outline-dark btn-lg px-4 py-3 me-sm-3 fs-6 fw-bolder buttonHome" href="#" style={{border:"none",boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>Documentation</a>
                                    </div>
                                </div>
                            </div>       
                    </div>

                
                </div>
                </div>

                <div className="col-lg-6">
                    <div className="masthead-device-mockup">
                        <img src={imgHero} alt="Hero Image" id="animated-image" className="img-fluid " style={{ zIndex: -1, width: "100%", marginRight:"-20px"}} />
                    </div>
                </div>
            </div>
        </div>
    </header>
        

        <section className="bg-light py-5" style={{ overflow: "hidden", position: "relative" }}>
            <div className="container px-6">
                <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-5">
                    <h1 className="display-4 fw-bolder"><span className=" d-inline">Discover Equilibria</span></h1>
                    </div>
                </div>
                </div>
                <div style={{ position: "relative", zIndex: "2" }}>
                <div className="cards mx-auto">
                    <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card mx-auto " style={{ borderRadius: "25px", border: "none", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>
                                <div className="card-header bg-white" style={{borderRadius:"25px",borderBottom:"none"}}>
                                    <h2 className="display-7 fw-bolder mt-3">Private</h2>
                                    
                                </div>
                                <div className="card-body " style={{height:"500px"}}>
                                    <img src={logo} style={{width:"6rem"}}></img>
                                    <p className="card-text lead fw-light mb-4 mt-5 cardText ">Equilibria is a privacy-focused cryptocurrency that originates from the Monero fork. 
                                    Its primary feature lies in providing users with private and untraceable transactions, ensuring a high level of 
                                    confidentiality and security in the realm of digital currencies.</p>
                                 
                                </div>
                                <div className="card-footer bg-white mb-3" style={{borderRadius:"25px",borderTop:"none"}}>
                                    <a className="btn btn-primary btn-lg px-5 py-3 fw-bolder" href="projects.html">Learn more</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card mx-auto" style={{ borderRadius: "25px", border: "none", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>
                        <div className="card-header bg-white" style={{borderRadius:"25px",borderBottom:"none"}}>
                                    <h2 className="display-7 fw-bolder mt-3">Decentralized</h2>
                                </div>
                                <div className="card-body " style={{height:"500px"}}>
                                <img src={logo} style={{width:"6rem"}}></img>
                                    <p className="card-text lead fw-light mb-4 mt-5 cardText">Equilibria employs a sophisticated hybrid Proof of Work (PoW) and Proof of Stake (PoS) consensus algorithm, 
                                    a groundbreaking approach that not only validates transactions but also governs the Oracle Nodes, solidifying its status as 
                                    an innovative and versatile blockchain platform at the forefront of the cryptocurrency landscape.</p>
                                 
                                </div>
                                <div className="card-footer bg-white mb-3" style={{borderRadius:"25px",borderTop:"none"}}>
                                    <a className="btn btn-primary btn-lg px-5 py-3 fw-bolder" href="projects.html">Learn more</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="card mx-auto" style={{ borderRadius: "25px", border: "none", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>
                        <div className="card-header bg-white" style={{borderRadius:"25px",borderBottom:"none"}}>
                                    <h2 className="display-7 fw-bolder mt-3">Versatile</h2>
                                </div>
                                <div className="card-body " style={{height:"500px"}}>
                                <img src={logo} style={{width:"6rem"}}></img>
                                    <p className="card-text lead fw-light mb-4 mt-5 cardText">Equilibria's oracle system distinguishes itself with its remarkable chain-agnostic capabilities, 
                                    demonstrating its versatility by delivering comprehensive solutions that span the realms of decentralized finance (DeFi) 
                                    while also ensuring enhanced privacy for ERC-20 tokens.</p>
                                 
                                </div>
                                <div className="card-footer bg-white mb-3" style={{borderRadius:"25px",borderTop:"none"}}>
                                    <a className="btn btn-primary btn-lg px-5 py-3 fw-bolder" href="projects.html">Learn more</a>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <img src={sectionShape} className="sectionShape" alt="Section Shape" style={{ position: "absolute", bottom: "-800px", left: "-850px", width: "100%" }}  />
            </div>
        </section>
        

        <section className="bg-white py-5 mt-2" id="exchanges">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-xxl-8">
                        <div className="text-center my-5">
                            <h2 className="display-4 fw-bolder mb-5"><span className="text d-inline">Available On</span></h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md">
                                        <div className="card mt-4" style={{border:"none"}}>
                                        <img src={tradeOgre}  style={{width:'85%'}} className="mx-auto"></img>
                                            <div className="card-body">
                                                <h2 className="fw-light mb-4">Trade Ogre</h2>
                                                <a className="btn btn-primary btn-lg px-5 py-3  fw-bolder" href="projects.html">Buy now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">

                                    </div>
                                    <div className="col-md">
                                    <div className="card mt-4"  style={{border:"none"}}>
                                        <img src={nonkyc} style={{width:'85%'}} className="mx-auto"></img>
                                        <div className="card-body">
                                            <h2 className="fw-light mb-4 ">NonKYC</h2>
                                            <a className="btn btn-primary btn-lg px-5 py-3  fw-bolder" href="projects.html">Buy now</a>
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



    </main>
     );
}
 
export default Home;
