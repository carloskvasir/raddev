import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ ok: 'ok' }));

app.listen(3000);
