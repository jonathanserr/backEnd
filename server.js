import express from 'express';
import 'dotenv/config.js';

const server = express();

const PORT = process.env.PORT || 8080;

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const ready = () => {
    console.log(`Server is running on puerto ${PORT}`);
}
                                                                      
server.listen(PORT, ready);
