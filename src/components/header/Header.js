import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import "./style.css";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3},
    }),
}

const Header = () => {
    return (
        <motion.header
        initial="hidden"
        whileInView="visible"
        className="header">
        <div className="header__wrapper">
            <motion.h1 custom={1} variants={textAnimation} className="header__title">
                <strong>Приветствую Вас, меня зовут <em>Ирина</em></strong><br />
                Я frontend-developer
            </motion.h1>
            <motion.div custom={2} variants={textAnimation} className="header__text">
                <p>со страстью к обучению и творчеству.</p>
            </motion.div>
            <NavLink  to="/resume" className="btn">Открыть резюме</NavLink>
            
        </div>
    </motion.header>
      );
}
 
export default Header;