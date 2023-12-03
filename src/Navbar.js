import logoXeq from './assets/xeqLogo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                   

                    <a className="navbar-brand" href=""><img src={logoXeq} alt="" style={{width:"25px",marginTop:"-2px"}}/><span className="fw-bolder  medium text"> Equilibria</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 medium fw-bolder">
                            <li className="nav-item"><a className="nav-link" href="#exchanges">Exchanges</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://explorer.equilibriacc.com/">Explorer</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://github.com/EquilibriaCC/equilibria-wallet/releases">Wallets</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://github.com/EquilibriaCC/Equilibria/wiki">Documentation</a></li>
                            <li className="nav-item"><a className="nav-link" href="#FAQsection">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
 
export default Navbar;