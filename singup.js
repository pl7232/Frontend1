import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Cadastro() { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    function emailValido(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validaSenha(senha) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(senha);

        return Object.values(requisitos).every((req) => req === true); 

    }

    function enviarDados() {
        if (!emailValido(email)) {
            alert('Email inválido');
            return;
            }

        if (!validaSenha(password)) {
            alert('Senha inválida');
            return;
        }

        localStorage.setItem('nome', username);
        localStorage.setItem('senha', password);
        localStorage.setItem('email', email);

        alert('Cadastro realizado com sucesso!');
        navigate('/login');
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Cadastro</h1>
                <br />
                <input placeholder='Nome' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={enviarDados}>Cadastrar</button>
            </div>
        </div>
    )
}

export default singup;