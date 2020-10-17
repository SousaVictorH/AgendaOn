import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FiLogIn, FiMail, FiPhone, FiColumns, FiEdit} from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

export default function Register(){

    async function handleRegister(e){

        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {

            const response = await api.post("/users", data);
            alert(`Seu ID de acesso: ${response.data.id}`);

        } catch (error) {

            alert("Erro no cadastro, tente novamente.")

        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const title = "<AgendaOn/>";

    return(
        <div className="register">
            <div className="register-container">

                <h1>{title}</h1>

                <section className="form">

                    <form onSubmit={handleRegister}>
                        <h2>Register</h2>

                        <div className="input-group">
                            <FiEdit className="icon"/>

                            <input type="text" placeholder="Name" name="userName"
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <FiMail className="icon"/>

                            <input type="text" placeholder="Email" name="userEmail"
                            value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <FiPhone className="icon"/>

                            <input type="text" placeholder="Whatsapp" name="userWpp"
                            value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                        </div>

                        <div className="input-group">
                            <div className="s-input-group">
                                <FiColumns className="icon"/>

                                <input type="text" placeholder="Cidade" name="userCity"
                                value={city} onChange={e => setCity(e.target.value)}/>

                                <input className="uf" type="text" placeholder="UF" name="userUf"
                                value={uf} onChange={e => setUf(e.target.value)}/>
                            </div>
                        </div>

                        <div className="footer">
                            <button className="button" type="submit">Register</button>
                            
                            <Link to="/">
                                <FiLogIn size={18} color="black"/>
                                    Log In
                            </Link>
                        </div>
                    </form>
                </section>              
            </div>
        </div>
    );
}