const express = require('express')
const app = express()
const PORT = 3000 
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.post('login', (req, res) => {
    const { email, password } = req.body;
    
    if (email == 'danelpedro@gmail.com' && password == '123') {
        res.json({error: false, message: 'Usuário logado com sucesso!'});
    } 
    else{
        res.json({error: true, message: 'Usuário não conhecido.'});
    }
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
});