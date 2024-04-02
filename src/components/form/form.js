import { useEffect, useState } from "react";
import './form.css';

export const Form = () => {
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email не может быть пустым");
    const [telError, setTelError] = useState("Телефон не может быть пустым");
    const [formValid, setFormValid] = useState(false);
    useEffect(() => {
        if(emailError || telError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [emailError, telError]);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if(!email_regexp.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }
    const telHandler = (e) => {
        setTel(e.target.value)
        const tel_regexp = /^\+375\d{9}$/
        if(!tel_regexp.test(e.target.value)){
            setTelError('Телефон введён с ошибкой')
            if(e.target.value.length < 3 || e.target.value.length > 8 || !e.target.value){
                setTelError('Телефон не введён')
            }
        } else {
            setTelError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.value) {
            case 'email':
                setEmailDirty(true)
                break
            case 'tel':
                setTelDirty(true)
                break
        }
    }

    return (
            <div className="form">
            <form>
                <h1 className="name_form">Форма связи со мной</h1>
                <input type="text" name="" id="" placeholder="Ваше имя"/>
                <input type="text" name="" id="" placeholder="Ваша организация"/>
                {(emailDirty && emailError)}  <div style={{color: 'red'}}>{emailError}</div>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" id="" placeholder="Введите свой email"/>
                {(telDirty && telError)}  <div style={{color: 'red'}}>{telError}</div>
                <input onChange={e => telHandler(e)} value={tel} onBlur={e => blurHandler(e)} type="tel" name="tel" id="" placeholder="Введите ваш телефон" pattern="^[0-9-+\s()]*$"/>
                <button disabled={!formValid} className="btn_connection" type="submit">Отправить</button>
            </form>
        </div>
    )
}