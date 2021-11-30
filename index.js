import express from 'express';
import dotenv from'dotenv';
import connectDb from './config/database.js';

dotenv.config();

connectDb();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Server is up!')
});

const PORT = process.env.PORT || 8000;

app.listen(8000);