import xeqLogo from './assets/xeqLogo.png'
const Footer = () => {
    return (
        <div  style={{overflow:'hidden'}}>
            <footer className=" bg-light py-4 mt-auto row row-cols-1 row-cols-sm-2 row-cols-md-5 ">
             
                <div className="col mb-3 socialFooter" style={{textAlign:'left',marginLeft:"80px"}} >

                    <img src={xeqLogo} style={{width:"50px"}}/>
                    <h3>Follow Us</h3>
                    <div className="d-flex fs-2 gap-3">
                    <a className="text-black" href="#!"><i className="bi bi-telegram"></i></a>
                    <a className="text-black" href="#!"><i className="bi bi-youtube"></i></a>
                    <a className="text-black" href="#!"><i className="bi bi-reddit"></i></a>
                    <a className="text-black" href="#!"><i className="bi bi-x"></i></a>
                </div>
                </div>
                <div className="col mb-3" style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Info</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Announcements</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Coinmarketcap</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Coingecko</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Explorer</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Tools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Desktop Wallet</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Media Kit</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                <h5>Pools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Miningpoolstats</a></li>
                    </ul>
                </div>
        </footer>
  </div>
     
    );
}
 
export default Footer;