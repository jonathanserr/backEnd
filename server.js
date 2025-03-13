import express from 'express';
import 'dotenv/config.js';
import './config/database.js'

const server = express();

const PORT = process.env.PORT || 8080;
 
//  endpoints:
server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/hola', (req, res) => {
    res.send('chao World!');
});

const ready = () => {
    console.log(`Server is running on port: ${PORT}`);
}
                                                                      
server.listen(PORT, ready);
