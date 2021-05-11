require('dotenv').config();//importaciones de terceros arriba primero


const Server = require('./models/server');


const server = new Server(); //instancia del servidor


server.listen();