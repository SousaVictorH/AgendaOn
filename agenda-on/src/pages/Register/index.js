import React from "react";
import {FiLogIn, FiMail, FiKey, FiPhone, FiColumns} from "react-icons/fi";

import "./style.css";

export default function Register(){
    const title = "<AgendaOn/>";
    return(
        <div className="register-container">
        <h1>{title}</h1>
        <section className="form">
            <form>
                <h2>Register</h2>

                <div className="input-group">
                    <FiMail className="icon"/>
                    <input type="text" placeholder="Email"/>
                </div>

                <div className="input-group">
                    <FiPhone className="icon"/>
                    <input type="text" placeholder="Whatsapp"/>
                </div>

                <div className="input-group">
                    <FiKey className="icon"/>
                    <input type="Password" placeholder="Password"/>
                </div>

                <div className="input-group">
                    <div className="s-input-group">
                        <FiColumns className="icon"/>
                        <input type="text" placeholder="Cidade"/>
                        <input className="uf" type="text" placeholder="UF"/>
                    </div>
                </div>

                <div className="footer">
                    <button className="button" type="submit">Register</button>
                    
                    <a href="/">
                        <FiLogIn size={18} color="black"/>
                        Log In
                    </a>
                </div>
            </form>
        </section>
    </div>
    );
}