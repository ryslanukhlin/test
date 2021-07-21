import React from 'react';

import "../Style/MainLayout.scss";
import HomeOutline1 from "../img/home-outline 1.svg";
import SmilingFaceOutline1 from "../img/smiling-face-outline 1.svg";
import PersonOutline1 from "../img/person-outline 1.svg";
import SettingsOutline1 from "../img/settings.svg";
import Settings from "../img/settings.svg";
import Vector7 from "../img/Vector 7.svg";

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="body__layout">
                <div className="header__wrapper">
                    <header className="header">
                        <div className="header__section">
                            <img src={Vector7} alt="Vector7" />
                            <h1>Notifications</h1>
                        </div>
                        <img src={Settings} alt="Group" />
                    </header>
                </div>
                <hr className="body__hr" />
                {children}
            </div>
            <footer className="footer">
                <ul className="footer__list">
                    <li className="footer__item"><img src={HomeOutline1} alt="HomeOutline1" /></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item"><img src={SmilingFaceOutline1} alt="SmilingFaceOutline1" /></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item"><img src={PersonOutline1} alt="PersonOutline1" /></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item"><img src={SettingsOutline1} alt="SettingsOutline1" /></li>
                </ul>
            </footer>
        </div>
    )
}

export default MainLayout
