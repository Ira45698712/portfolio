import "./style.css";
import Header from "../components/header/Header";
import photo from '../img/projects/photo.jpg'
import vk from "../img/icons/vk.svg";
import instagram from "../img/icons/instagram.svg";
import twitter from "../img/icons/twitter.svg";
import linkedIn from "../img/icons/linkedIn.svg";
import gitHub from "../img/icons/gitHub.svg";

const Resume = () => {
  return (
    <>

    <div className="resume">
      <div className="main__blok">
        <div className="info__main__blok">
          <h1 className="info__fio">Дмитракова Ирина Андреевна</h1>
          <h3 className="info__age">Девушка,  21 год,  родилась 13 мая 2002</h3>
          <h4 className="info__status">Активно ищет работу</h4>
          <h6 className="chapter">Контакты</h6>
          <h3 className="info__contact">+375 (29) 367-36-94 — предпочитаемый способ связи</h3>
          <h3 className="info__contact">Saturday1305@yandex.ru</h3>
          <h6 className="chapter">Способ связи</h6>
          <ul className="social">
                    <li className="social__item"><a href="https://vk.com/id208239557" target="_blank"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://twitter.com" target="_blank"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/Ira45698712" target="_blank"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/irya-dm-115520210/" target="_blank"><img src={linkedIn} alt="Link" /></a></li>
                </ul>
          <h3 className="info__moving">Минск, готова к переезду, готова к редким командировкам</h3>
          <h3 className="info__moving">Регион переезда - Европа</h3>
          <h3 className="info__moving">Ближайшее метро - Кунцевщина</h3>
        </div>
        <div>
          <img className="my__photo" src={photo} alt="" />
        </div>
        
      </div>
      <div className="blok__specialization">
        <h2 className="specialization">Веб-разработчик</h2>
        <ul className="name__specialization">Специализации:
          <li className="my__specialization">- Веб-разработчик</li>
          <li className="my__specialization">- HTML-верстальщик</li>
          <li className="my__specialization">- Программист</li>
        </ul>
        <h3 className="info__employment">Занятость: частичная занятость, проектная работа, волонтерство, стажировка</h3>
        <h3 className="info__moving">График работы: сменный график, гибкий график, удаленная работа</h3>
      </div>
      <div className="blok__skills">
      <h2 className="main__skills">Ключевые навыки</h2>
      <div className="my__skills">
      <h4 className="skills">Знание Microsoft Office</h4>
        <h4 className="skills">Пользователь ПК</h4>
        <h4 className="skills">HTML5</h4>
        <h4 className="skills">CSS</h4>
        <h4 className="skills">React</h4>
        <h4 className="skills">Английский язык</h4>
        <h4 className="skills">JavaScript</h4>
        <h4 className="skills">Поиск информации в интернет</h4>
        <h4 className="skills">Работа в команде</h4>
        <h4 className="skills">Грамотная речь</h4>
        <h4 className="skills">1С: Предприятие 8</h4>
      </div>
        
      </div>
    </div>
    </>
  );
};

export default Resume;
