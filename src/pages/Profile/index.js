import React, { useState, useEffect } from 'react';

import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [pessoas, setPessoas] = useState([]);
    const [carregou, setCarregou] = useState(false);

    useEffect(() => {
        api.get('pessoa').then(response => {
            setPessoas(response.data);
            setCarregou(true);
        })
    }, []);

    if (carregou) {
        return (
            <div className="profile-container">
                <div className="list">
                    <h1>Lista de Nomes</h1>
                    <ul className="nameList">
                        {pessoas.map(pessoa => (
                            <li key={pessoa.id}>{pessoa.nome}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="list-button">
                    <Link className="react-link" to="/register">
                        Adicionar nome
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="carregando">
                <p>Carregando...</p>
            </div>
        )
    }
}