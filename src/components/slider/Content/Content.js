import "./Content.css";
import { GradientTitle } from "../GradientTitle/GradientTitle";
import { IconButton } from "../IconButton/IconButton";
import { Slider } from "../PhotoSlider/Slider";
import img_css from "../img/img_css.png";
import img_html from "../img/img_html.jpg";
import img_js from "../img/img_js.jpg";
import img_react from "../img/img_react.jpg";
import img_redux from "../img/img_redux.jpeg";
import img_ts from "../img/img_ts.png";
function toggleHandler(e) {
  e.preventDefault();
  e.target.classList.contains("hook") === true
    ? e.target.classList.remove("hook")
    : e.target.classList.add("hook");
}
export const Content = () => (
  <div className="content">
    <GradientTitle className="title__skills">Ключевые навыки</GradientTitle>
    <div className="content-grid">
      <p className="description__skills ">
        Онлайн-сервисы нужны каждому бизнесу, поэтому frontend-разработчики
        ценятся на рынке труда. Наша задача — внедрять актуальные решения,
        опережая конкурентов, делать IT-продукты удобными и привлекательными.
        Фронтендеры создают графические интерфейсы сайтов и приложений,
        превращают безликий код в красивое оформление. К техническим навыкам frontend-разработчиков
        относятся: знание программ, языков программирования, владение
        иностранным языком.
      </p>
    </div>
    <Slider>
      <img className="img" src={img_html} alt="Slide 1" />
      <img className="img" src={img_css} alt="Slide 2" />
      <img className="img" src={img_js} alt="Slide 3" />
      <img className="img" src={img_react} alt="Slide 4" />
      <img className="img" src={img_redux} alt="Slide 5" />
      <img className="img" src={img_ts} alt="Slide 6" />
    </Slider>
  </div>
);
