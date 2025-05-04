import express, { json } from 'express';

const app = express();

app.use(json());

app.post('/login', (req, res) => {
  const { user, pass } = req.body;

  if (user === 'admin') {
    return res.json({ status: 'ok' });
  }

  res.status(401).json({ error: 'Unauthorized' });
});

app.listen(3000, () => console.log('Server ON'));