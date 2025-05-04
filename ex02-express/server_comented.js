// 1. Inicialização
import express, { json } from 'express';

const app = express();

// 2. Middleware
app.use(json());

// 3. Rota - Para onde o usuário será direcionado após receber uma requisição.
app.post('/login', (req, res) => {

  // 4. Lógica
  // Nesse ponto, se não tivessemos usado o Middleware, o req.body seria undefined
  const { user, pass } = req.body;

  if (user === 'admin') {
    // 5. Resposta
    return res.json({ status: 'ok' });
  }

  res.status(401).json({ error: 'Unauthorized' });
});

// Inicia o servidor
app.listen(3000, () => console.log('Server ON'));