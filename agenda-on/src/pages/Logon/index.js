import React from "react";
import {FiLogIn, FiUser, FiKey} from "react-icons/fi";

import "./style.css";

export default function Logon(){

    const title = "<AgendaOn/>";

    return(
        <div style={{backgroundImage: `url(require("assets/astronomy.jpg")`}} className="logon-container">
            <h1>{title}</h1>
            <section className="form">
                <form>
                    <h2>Sign Up</h2>

                    <div className="input-group">
                        <FiUser className="icon"/>
                        <input type="text" placeholder="UserID"/>
                    </div>

                    <div className="input-group">
                        <FiKey className="icon"/>
                        <input type="text" placeholder="Password"/>
                    </div>

                    <button className="button" type="submit">Log In</button>

                    <a href="/register">
                        <FiLogIn size={18} color="black"/>
                        Register
                    </a>
                </form>
            </section>
        </div>
    );
};