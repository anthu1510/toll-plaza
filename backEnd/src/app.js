const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


// Aiddlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

app.use('/', require('./routers/users.router'));
app.use('/vehicle', require('./routers/vehicles_details.router'));

require('../src/config/connect');

// Error Handler
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
