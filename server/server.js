require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// instanciando las rutas creadas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err) => {

        useNewUrlParser: true;
        useUnifiedTopology: true;

        if (err) throw err;

        console.log('Base de datos ONLINE');

    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})