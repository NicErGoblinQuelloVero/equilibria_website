
import logo from "./assets/l3.png"

function CardTeam (props){

    
    let immagineProfilo ="./assets/"+props.logo;

    return(
        <div>
             <div className="card mx-auto animated-card cardTeam" style={{ width:"100%",borderRadius: "25px", border: "none", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>
                        <div className="card-header bg-white" style={{borderRadius:"25px",borderBottom:"none"}}>

                        
                        <div className="card-body" style={{height:"500px"}}>
                        <img src={logo} style={{width:"6rem"}} className="mt-3" alt=""></img>
                            <h3 className="fw-bolder mt-3">{props.name}</h3>
                            <h3 className="fw-light" style={{fontSize:"1.2rem"}}>{props.desc}</h3>
                        
                            <p className="fw teamDesc" style={{fontSize:"1.2rem",marginTop:"20px"}}>{props.description}</p>
                        </div>
                        
                     
                        </div>
                        </div> 
        </div>
    );
}
export default CardTeam;