import React from "react";
import '../styles.css';

export default function Header() {

    return (
        <div className='header'>
            <img src="/logo.png" alt="Moviedux Logo" className="logo" />
            <h2 className='app-subtitle'>It's time to watch movies.</h2>

        </div>
    );

}   