const express = require('express');
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.options('*', cors());


const port = process.env.PORT
const productsRoute = require('./routes/productsRoute')
const usersRoute = require('./routes/usersRoute')
const orderRoute = require('./routes/orderRoute')


app.use(express.json());
app.use('/api/users/', usersRoute)
app.use('/api/products/', productsRoute);
app.use('/api/orders/', orderRoute)

app.get('/', (req, res) => {
    res.send('This is a response from backend!')
});


app.listen(port, () => console.log(`Server is running on port ${port} 🔥`));

mongoose.connect('mongodb+srv://root:toor@cluster0.cguhf.mongodb.net/mern-ecommerce?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connection ✅...');
})
.catch((err)=>{
    console.log(err)
});