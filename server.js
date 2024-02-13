const express = require('express');
const db = require('./db');
const controllers = require('./controllers/plantController')
const logger = require('morgan');
const bodyParser = require('body-parser')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3002;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/plants', controllers.getAllPlants)

app.get('/plants/:id', controllers.getPlantById)

app.post('/plants', controllers.createPlant)

app.put('/plants/:id', controllers.updatePlant)

app.delete('/plants/:id', controllers.deletePlant)

