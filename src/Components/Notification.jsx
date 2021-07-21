import React from 'react'
import "../Style/Notification.scss"

import heartSvg from "../img/heart-outline 1.svg"
import messageSvg from "../img/message-square-outline 1.svg"

const Notification = ({ img, name, description, date, typeNotification }) => {
    const color = typeNotification === "like" ? "#FB6061" : "#F7C135";

    return (
        <div className="notification">
            <div className="image__wrapper">
                <div className="image__badge" style={{backgroundColor: color }}>
                    <img className="image__badgeIcon"  src={color === "#FB6061" ? heartSvg : messageSvg} alt="icon" />
                </div>
                <img data-content="red" src={img} alt="user logo" />
            </div>
            <div className="notification__info">
                <div className="notification__name">{name}</div>
                <div className="notification__description">{description}</div>
            </div>
            <div className="notification__date">{date}</div>
        </div>
    )
}

export default Notification
