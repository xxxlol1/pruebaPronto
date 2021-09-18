require('./database/db');


const express = require('express');

const port = (process.env.port || 3000);

const app = express();

app.set('port',port)

app.use('/api', require('./rutas'))

app.listen(app.get('port'),(error)=>{

    if (error) {
        console.log('Error iniciar el servidor' + error)
    }
    console.log('Corriendo servidor en ' + port)
})