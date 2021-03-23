require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const Port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(Port, () => {
    console.log(`Server develpment started port: ${Port}`);
});

