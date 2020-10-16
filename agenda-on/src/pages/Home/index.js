import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function Home(){

    const title = "<AgendaOn/>";

    return(
            <div className="home-container">
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
                            <li><Link to="/home">Procurar por anotações</Link></li>
                            <li><Link to="/home/add">Adicionar anotações</Link></li>
                            <li><Link to="/home">Remover anotações</Link></li>
                        </ul>
                    </footer>
                </aside>

                <div className="main">
                    <h1>Home</h1>
                </div>
            </div>
    );
};