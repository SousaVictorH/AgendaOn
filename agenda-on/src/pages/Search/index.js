import React from "react";
import {Link} from "react-router-dom";
import {FiBookOpen, FiLogOut} from "react-icons/fi";

import "./style.css";

export default function Search(){

    const title = "<AgendaOn/>";

    return(
        <div className="container">
                <aside>
                    <header>
                        <h1>{title}</h1>

                        <p>Aqui você pode escrever lembretes referentes 
                            a um determinado dia, como em uma agenda!
                        </p>
                    </header>

                    <footer>
                        <p>Inclui funcionalidade como:</p>
                        <ul>
                            <li><Link to="/home">Listar anotações</Link></li>
                            <li><Link to="/home/search">Procurar por anotações</Link></li>
                            <li><Link to="/home/add">Adicionar anotações</Link></li>
                        </ul>
                    </footer>
                </aside>

                <div className="main">
                    <h1>Search</h1>

                    <section className="form">
                        <form>
                            <h2>Search for an anotation</h2>

                            <div className="input-group">
                                <FiBookOpen className="icon"/>
                                <input type="text" placeholder="date"/>
                            </div>

                            <div className="footer">
                                <button className="button" type="submit">Search</button>
                            </div>
                        </form>
                    </section>

                    <Link to="/">
                        <FiLogOut className="logout" size={55}/>
                    </Link>
                </div>
        </div>
    );
};