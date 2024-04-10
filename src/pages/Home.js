import { Content } from "../components/slider/Content/Content";
import Header from "../components/header/Header";
import { GradientTitle } from "../components/slider/GradientTitle/GradientTitle";
;

const Home = () => {
    return (
        <>
        <Header />
    

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, SCSS, NPM</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP</p>
                    </li>
                </ul>
                <Content />
        </div>
    </main>
        </>
    );
}
 
export default Home;