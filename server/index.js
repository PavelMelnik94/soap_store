require('dotenv').config();
const express = require('express');
const sequelize = require('./configs/db');
const models = require('./models');
const cors = require('cors');
const router = require('./routes');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.port || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


// обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server listening on ${PORT}`));

    } catch (e) {
        console.log(`ERROR: ${e}`)
    }
}

start()
    .then(() => {
    //    ...
    });
