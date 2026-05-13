const { Client } = require('pg');
const express = require('express');
const cors = require('cors');

const md5 = require('md5');

const server = express();

const axios = require('axios');

server.use(express.json());
const PORT = 3000;

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'cbc123',
    database: 'trabalhoFinal',
    port: 5432,
});

async function conectar() {
    try {
        await client.connect();
        console.log('Conectado ao PostgreSQL');

        const res = await client.query('SELECT * FROM "user"'); 
        console.log('Dados do banco:', res.rows);
    } catch (err) {
        console.error('Erro na conexão:', err);
    }
}

server.post('/users', async (req, res) => {
    const { username, password } = req.body;

    const response = await client.query(`
        INSERT INTO public.users(
        username, password)
        VALUES ('${username}', '${md5(password)}')
    `);
    console.log('sql: ', `
        INSERT INTO public.users(
        username, password)
        VALUES'${username}', '${md5(password)}')
        `);

    res.json('Usuário cadastrado com sucesso!!');

})

server.get('/alunos', async (req, res) => {
    const result = await axios.post('http://192.168.204.142:3000/alunos', {
        name: 'Daniel'
    });

    res.json(result.data);
});
    
    res.json(result.data);

server.listen(PORT, () => {
    conectar();
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})