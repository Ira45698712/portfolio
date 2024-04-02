import './style.css';
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/id208239557" target="_blank"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://twitter.com" target="_blank"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/Ira45698712" target="_blank"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/irya-dm-115520210/" target="_blank"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2024 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;