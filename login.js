import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function enviarDados() {
        const nomeSalvo = localStorage.getItem('nome');
        const senhaSalva = localStorage.getItem('senha');

        if (username === nomeSalvo && password === senhaSalva) {
            alert('Login realizado com sucesso!');
            navigate('/home');
        } else {
            alert('Usuário ou senha inválidos');
        }
    }

    return (
        <div className="App">
            <div className="App">
                <h1>Login</h1>
                <br/>
                <input placeholder='Nome' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
            <input placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={enviarDados}>Entrar</button>
            </div>
        </div>
    )
}

export default Login;