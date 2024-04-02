import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Приветсьвую Вас, меня зовут <em>Ирина</em></strong><br />
                Я frontend-developer
            </h1>
            <div className="header__text">
                <p>со страстью к обучению и творчеству.</p>
            </div>
            <NavLink to="/resume" className="btn">Открыть резюме</NavLink>
            
        </div>
    </header>
      );
}
 
export default Header;