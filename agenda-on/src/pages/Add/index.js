import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function Home(){

    const title = "<AgendaOn/>";

    return(
        <div className="add-container">
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
                    <h1>Add</h1>

                    <section className="form">
                        <form>
                            <h2>Add an anotation</h2>

                            <div className="input-group">
                                <input type="date" placeholder="UserID"/>
                                <textarea name="anotation" id="0" cols="30" rows="10"></textarea>
                            </div>

                            <div className="footer">
                                <button className="button" type="submit">Add</button>
                            </div>
                        </form>
                    </section>
                </div>
        </div>
    );
};