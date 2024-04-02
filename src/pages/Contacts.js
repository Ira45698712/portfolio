import { Form } from "../components/form/form";

const Contacts
 = () => {
    return (
        <main className="section">
            <h1 className="title-1">Contacts</h1>
            <Form />
        <div className="container">
                

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Belarus, Minsk</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+375293673694">+375 (29) 367-36-94</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">irya671@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;