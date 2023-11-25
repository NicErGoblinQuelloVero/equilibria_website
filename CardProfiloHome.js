import React from "react";


function CardProfiloHome(props){
    const profilo = "/profilo?=" + props.user; 
    let immagineProfilo = require("../../assets/img/utenti/"+props.user+"profilo.jpg")
    return (
        <div className="col mb-4">       
            <div className="card h-100 shadow p-3 mb-5 bg-white rounded" style={{marginTop:"15px"}}>
                <div className="card-header-white" style={{textAlign:"center"}}>
                    <h4>Il tuo profilo</h4>
                </div>
                <div className="card-body p-4 ">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-1 row-cols-xl-1 justify-content-center">
                            <img className="card-img-top" src={immagineProfilo} alt="..." style={{width:"15rem",borderRadius:"50%",marginTop:"-50px"}}/>
                            <div className="text-center" style={{marginTop:"15px"}}>
                                <h5 className="fw-bolder">{props.nome}</h5>
                            </div>
                            <div className="text-center">
                                <a className="btn btn-outline-dark mt-auto" href={profilo} style={{marginRight:"5px",width:"130px"}}>Mostra profilo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProfiloHome;