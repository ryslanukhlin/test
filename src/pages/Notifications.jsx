import React from 'react';
import Notification from "../Components/Notification";
import "../Style/Notifications.scss";
import userLogo from "../img/userLogo.png";
import userLogo1 from "../img/userLogo1.png";

const Notifications = () => {
    return (
        <>
            <div className="tabs">
                <button>All</button>
                <button>New</button>
            </div>
            <h2 className="title">New notifications</h2>
            <div className="notifications__wrapper">
                <Notification 
                    img={userLogo} 
                    name="Julia Pro" 
                    description="left a comment under your post"
                    date="at 15:00"
                    typeNotification="message"
                />
                <Notification 
                    img={userLogo1} 
                    name="Vlad Boom" 
                    description="liked 5 your post publications"
                    date="at 17:00"
                    typeNotification="like"
                />
            </div>
            <h2 className="title">Read notifications</h2>
            <div className="notifications__wrapper">
                <Notification 
                    img={userLogo} 
                    name="Julia Pro" 
                    description="left a comment under your post"
                    date="at 15:00"
                    typeNotification="message"
                />
                <Notification 
                    img={userLogo1} 
                    name="Vlad Boom" 
                    description="liked 5 your post publications"
                    date="at 17:00"
                    typeNotification="like"
                />
                                <Notification 
                    img={userLogo} 
                    name="Julia Pro" 
                    description="left a comment under your post"
                    date="at 15:00"
                    typeNotification="message"
                />
                <Notification 
                    img={userLogo1} 
                    name="Vlad Boom" 
                    description="liked 5 your post publications"
                    date="at 17:00"
                    typeNotification="like"
                />
            </div>
        </>
    )
}

export default Notifications
