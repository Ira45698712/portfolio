import "./Content.css";
import { GradientTitle } from "../GradientTitle/GradientTitle";
import { IconButton } from "../IconButton/IconButton";
import { Slider } from "../PhotoSlider/Slider";
import img_css from "../img/img_css.png"
import img_html from "../img/img_html.jpg"
import img_js from "../img/img_js.jpg"
import img_react from "../img/img_react.jpg"
import img_redux from "../img/img_redux.jpeg"
import img_ts from "../img/img_ts.png"


export const Content = () => (
  <div className="content">
    <GradientTitle>Ключивые навыки</GradientTitle>
    <div className="content-grid">
      <p className="description__skills ">
        К техническим навыкам относятся: знание программ, языков
        программирования, владение иностранным языком, умение делать что-то
        руками, например чинить линию электропередачи.
      </p>
        </div>
        <Slider>
          <img src={img_html} alt="Slide 1" />
          <img src={img_css} alt="Slide 2" />
          <img src={img_js} alt="Slide 3" />
          <img src={img_react} alt="Slide 4" />
          <img src={img_redux} alt="Slide 5" />
          <img src={img_ts} alt="Slide 6" />
        </Slider>

  </div>
);
