const app = express();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const productRoute = require('./routes/products');
const authRoute = require('./routes/auth');
const {rateLimiterUsingThirdParty} = require('./rateLimiter');

// database connection and secret token
require('dotenv/config');

app.use(express.json())
app.use('/products', productRoute);
app.use('/api/user', authRoute);
app.use('/api/products', productRoute);
app.use(bodyParser.json());
app.use(rateLimiterUsingThirdParty);

app.get('/',(req, res) =>{
    res.send('We are on home');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to MongoDB!')
)

// port
app.listen(8000);
