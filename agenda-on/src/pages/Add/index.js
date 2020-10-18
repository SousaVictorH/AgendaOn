import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {FiEdit2, FiBookOpen} from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

export default function Add(){

    const history = useHistory();

    async function handleAdd(e){

        e.preventDefault();

        const userID = localStorage.getItem("userID");

        const data = {
            title,
            description,
            date
        }

        try {

            await api.post("anotations",data, {
                headers:{
                    authorization: userID,
                }
            });

            history.push("/home");

        } catch (error) {

            alert("Erro, tente novamente.")

        }
    }

    const [title, setTitulo] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const title2 = "<AgendaOn/>";

    return(
        <div className="container">
                <aside>
                    <header>
                        <h1>{title2}</h1>

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
                    <h1>Add an anotation</h1>

                    <section className="form" onSubmit={handleAdd}>
                        <form>
                            <h2>Add</h2>

                            <div className="input-group">
                                <FiEdit2 className="icon"/>
                                <input type="text" placeholder="title"
                                value={title} onChange={e => setTitulo(e.target.value)}/>
                            </div>

                            <div className="input-group">
                                <FiBookOpen className="icon"/>
                                <input type="text" placeholder="xx/xx/xxxx"
                                value={date} onChange={e => setDate(e.target.value)}/>
                            </div>

                            <div className="input-group">
                                <textarea name="anotation" placeholder="description" id="0" cols="30" rows="10"
                                value={description} onChange={e => setDescription(e.target.value)}></textarea>
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