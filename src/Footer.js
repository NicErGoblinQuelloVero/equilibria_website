import xeqLogo from './assets/xeqLogo.png'
import twitterLogo from './assets/x.png'
import discordLogo from './assets/discordBlack.png'
import telegramLogo from './assets/telegramBlack.png'
const Footer = () => {
    return (
        <div  style={{overflow:'hidden'}}>
            <footer className=" bg-white py-4 mt-auto row row-cols-1 row-cols-sm-2 row-cols-md-5 ">
             
                <div className="col mb-3 socialFooter" style={{textAlign:'left',marginLeft:"80px"}} >

                    <img src={xeqLogo} style={{width:"50px"}}/>
                    <h3 className='fw mt-1'>Follow Us</h3>

                    <div className="d-flex fs-2 gap-3" style={{marginTop:"-10px"}}>
                    <a className="text-black" href="https://t.me/EquilibriaCommunity">
                        <img   src={telegramLogo} style={{width:"30px"}}/>
                        
                    </a>
                    <a className="text-black" href="https://discord.com/invite/Ps9pBmc2QX">
                        <img   src={discordLogo} style={{width:"30px"}}/>
                        
                    </a>
                    <a className="text-black" href="https://twitter.com/EquilibriaDevs">
                        <img   src={twitterLogo} style={{width:"30px"}}/>
                        
                    </a>
                </div>
                </div>
                <div className="col mb-3" style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Info</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://t.me/EquilibriaAnnouncements" className="nav-link p-0 text-muted">Announcements</a></li>
                        <li className="nav-item mb-2"><a href="https://coinmarketcap.com/currencies/equilibria/" className="nav-link p-0 text-muted">Coinmarketcap</a></li>
                        <li className="nav-item mb-2"><a href="https://www.coingecko.com/en/coins/equilibria" className="nav-link p-0 text-muted">Coingecko</a></li>
                        <li className="nav-item mb-2"><a href="https://explorer.equilibriacc.com/" className="nav-link p-0 text-muted">Explorer</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                    <h5>Tools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://github.com/EquilibriaCC/equilibria-wallet/releases" className="nav-link p-0 text-muted">Desktop Wallet</a></li>
                        <li className="nav-item mb-2"><a href="https://github.com/EquilibriaCC/media-kit" className="nav-link p-0 text-muted">Media Kit</a></li>
                    </ul>
                </div>

                <div className="col mb-3"  style={{textAlign:'left',marginLeft:"20px"}} >
                <h5>Pools</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://miningpoolstats.stream/equilibria" className="nav-link p-0 text-muted">Miningpoolstats</a></li>
                    </ul>
                </div>
        </footer>
  </div>
     
    );
}
 
export default Footer;