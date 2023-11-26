
import logo from "./assets/xeqLogo.png"

function Card (props){
    return(
        <div>
             <div className="card mx-auto animated-card cardHome" style={{ borderRadius: "25px", border: "none", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}>
                        <div className="card-header bg-white" style={{borderRadius:"25px",borderBottom:"none"}}>
                        <h3 className="display-7 fw-bolder mt-3">{props.title}</h3>
                        </div>
                        <div className="card-body" style={{height:"500px"}}>
                        <img src={logo} style={{width:"5rem"}}  alt=""></img>
                        <p className="card-text lead fw-light mb-4 mt-5 cardText">
                            {props.text}</p>
                        </div>
                        <div className="card-footer bg-white mb-3" style={{borderRadius:"25px",borderTop:"none"}}>
                        <a className="btn btn-primary btn-lg px-5 py-3 fw-bolder bottoneCard " href="https://github.com/EquilibriaCC/Equilibria/wiki"><p className="cText">Learn more</p></a>
                        </div>
                    </div>
        </div>
    );
}
export default Card;