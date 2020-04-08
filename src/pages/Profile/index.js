import React, { useState, useEffect } from 'react';

import './style.css';
import api from '../../services/api';

export default function Profile() {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        api.get('pessoa').then(response => {
            setPessoas(response.data);
        })

        console.log(pessoas);
    }, []);

    return (
        <div className="profile-container">
            <h1>Lista de Nomes</h1>
            {pessoas.map(pessoa => (
                <p key={pessoa.id}>{pessoa.nome}</p>
            ))}
        </div>
    );
}