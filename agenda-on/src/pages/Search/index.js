import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FiTrash2, FiBookOpen} from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

export default function Home(){

    const [date, setDate] = useState("");
    const [anotations, setAnotataions] = useState([]);

    const userID = localStorage.getItem("userID");

    const title = "<AgendaOn/>";

    async function handleSearch(e){

        e.preventDefault();

        const data = {
            date
        }

        console.log(data)

        await api.post("search",data, {
            headers:{
                authorization: userID,
            }
        }).then(response => {

            setAnotataions(response.data);

        })

    }

    async function handleDelete(id){

        try {
            
            await api.delete(`anotations/${id}`,{
                headers: {
                    authorization: userID,
                }
            })

            setAnotataions(anotations.filter(anotation => anotation.id !== id));

        } catch (error) {
            alert("Erro ao deletar anotação, tente novamente!")
        }

    };

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

                <div className="main search-container">
                    <h1>Search for an anotation</h1>

                    <section className="form">
                        <h2>Search</h2>
                        <form onSubmit={handleSearch}>
                            <div className="input-group">
                                <FiBookOpen className="icon"/>
                                <input type="text" placeholder="xx/xx/xxxx"
                                value={date} onChange={e => setDate(e.target.value)}/>
                            </div>

                            <div className="footer">

                            <button className="button" type="submit">Search</button>

                            </div>
                        </form>
                    </section>
                    
                    <ul>
                        {anotations.map(anotation => {

                            return(
                                <li key={anotation.id}>
                                    
                                    <strong>Titulo:</strong>
                                    <p>{anotation.title}</p>

                                    <strong>Descricao:</strong>
                                    <p>{anotation.description}</p>

                                    <strong>Data:</strong>
                                    <p>{anotation.date}</p>

                                    <button onClick={() => handleDelete(anotation.id)} type="button">
                                        <FiTrash2 size={20}/>
                                    </button>
                                </li>
                            )

                        })}
                    </ul>
                    
                </div>
            </div>
    );
};