const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

app.get('/', (req, res) => 
    res.json({ msg: "Welcome to the Crypto Portfolio Manager API" })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/currencies', require('./routes/currencies'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));