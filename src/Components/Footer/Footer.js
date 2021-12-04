import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <div className="footer">
            <p> I create this React js application in order to be more familiar with this great library and deal more with axios,router,react bootstrap, responsive web design, github pages...
                <br />
                this <a href="https://github.com/djebby/starwars/tree/main" target="_blank" style={{color:"#61dafb",textDecoration:"none"}}> link </a> guid you to the github repository of the development version.
            </p>
            <div>
            <a style={{textDecoration: "none"}} href="https://github.com/djebby" target="_blank"> 
            <i class="bi bi-github"></i></a>
            <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/djebby-firas/" target="_blank"> <i class="bi bi-linkedin"></i> </a>
            </div>
        </div>
    )
}
