import express from 'express';
import 'dotenv/config';
import router from './routes/router.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, () =>{
    console.log(`Servidor corriendo en puerto http://localhost:${port}`)
})