import React from "react";
import {Link} from "react-router-dom";
import {FiLogOut} from "react-icons/fi";

import "./style.css";

export default function Home(){

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
                    <h1>Home</h1>
                    

                    
                    <Link to="/">
                        <FiLogOut className="logout" size={55}/>
                    </Link>
                    
                </div>
            </div>
    );
};