import xeqLogo from './assets/xeqLogo.png'
const Footer = () => {
    return (
        <footer className="bg-light py-4 mt-auto">
        <div className="container px-4">

          
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">

                <div className="d-flex fs-2 gap-3 mb-4">
                    <img src={xeqLogo} style={{width:'80px'}}></img>
                </div>
                <div className="d-flex fs-2 gap-3">
                    <h1>Follow Us</h1>
                </div>
                
            
                <div className="d-flex fs-2 gap-3">
                    <a className="text-black" href="#!"><i class="bi bi-telegram"></i></a>
                    <a className="text-black" href="#!"><i class="bi bi-youtube"></i></a>
                    <a className="text-black" href="#!"><i class="bi bi-reddit"></i></a>
                    <a className="text-black" href="#!"><i class="bi bi-x"></i></a>
                </div>
                <div className="d-flex gap-3">
                    

                <div className="small m-0">Copyright &copy; Equilibria2023</div>
                </div>
               
            </div>
            
           <div className="col">

           </div>
        </div>
     
    </footer>
    );
}
 
export default Footer;