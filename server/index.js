require('dotenv').config()
const express = require('express');
const sequelize = require('./configs/db')
const models = require('./models')
const cors = require('cors')
const router = require('./routes')

const PORT = process.env.port || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router);

const start = async () => {
        try {
            await sequelize.authenticate()
            await sequelize.sync()
            app.listen(PORT, () => console.log(`server listening on ${PORT}`));

        } catch (e) {
            console.log(`ERROR: ${e}`)
        }
}

start();
