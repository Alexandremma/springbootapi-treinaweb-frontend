import React, { useState } from 'react';

import api from '../../services/api';

import './style.css';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
    const [nome, setNome] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            nome
        };

        if (data.nome) {
            try {
                const response = await api.post('pessoa', data);
                
                alert(`Nome: ${response.data.nome} registrado com sucesso!`);

                history.push('/');
            } catch (err) {
                alert('Erro, tente novamente.');
            }
        } else {
            alert('Nome inválido!');
        }
    }

    return (
        <div className="register-container">
            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Digite um nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <button className="button" type="submit">Adicionar</button>
            </form>

            <br/>

            <Link className="react-link" to="/">
                Ver Lista
            </Link>
        </div>
    );
}
