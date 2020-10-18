import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {FiLogOut, FiTrash2} from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

export default function Home(){

    const history = useHistory();

    const [anotations, setAnotataions] = useState([]);

    const userID = localStorage.getItem("userID");
    const userName = localStorage.getItem("userName");

    const title = "<AgendaOn/>";

    useEffect(() => {

        api.get("profile", {

            headers: {
                authorization: userID,
            }

        }).then(response => {

            setAnotataions(response.data);

        })

    }, [userID]);

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

    async function handleLogout(){

        localStorage.clear();
        history.push("/");
        
    } 

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

                <div className="main home-container">
                    <h1>Bem vindo(a), {userName}</h1>
                    
                    <ul>
                        {anotations.map(anotation => {

                            return(
                                <li key={anotation.id}>
                                    <strong>{anotation.title}</strong>
                                    <p>{anotation.description}</p>
                                    <p>{anotation.date}</p>

                                    <button onClick={() => handleDelete(anotation.id)} type="button">
                                        <FiTrash2 size={20}/>
                                    </button>
                                </li>
                            )

                        })}
                    </ul>

                    <button onClick={handleLogout}>
                        <FiLogOut className="logout" size={35}/>
                    </button>
                    
                </div>
            </div>
    );
};