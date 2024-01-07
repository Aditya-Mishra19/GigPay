require('dotenv').config();
const connect = require ('./setups/mongoDB');
connect();
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())


const detailsRoutes = require('./routes/detailsRoutes')
app.use('/api/detailsRoutes', detailsRoutes);

const userRoutes= require('./routes/userRoutes')
app.use('/api/userRoutes', userRoutes);


app.get('/',(req, res) => {
    res.send("<h1> server is running successfully </h1>")
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running');
});