import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {FiLogIn, FiUser} from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

export default function Logon(){

    const history = useHistory();

    const [id, setId] = useState("");

    const title = "<AgendaOn/>";

    async function handleLogin(e){

        e.preventDefault();

        try {
            
            const response = await api.post('/sessions', {id});
            
            localStorage.setItem("userID", id);
            localStorage.setItem("userName", response.data.name);

            history.push("/home");

        } catch (error) {
            
            alert("Falha no login, tente novamente.");

        }
    }

    return(
        <div className="logon">
    '       <div className="logon-container">
                <h1>{title}</h1>
                <section className="form">
                    <form onSubmit={handleLogin}>
                        <h2>Sign Up</h2>

                        <div className="input-group">
                            <FiUser className="icon"/>
                            <input type="text" placeholder="UserID"
                            value={id} onChange={e => setId(e.target.value)}/>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">Log In</button>
                            

                            <Link to="/register">
                                <FiLogIn size={18} color="black"/>
                                    Register
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};