const express = require('express');
const connectToDatabase = require ('./src/config.js');
const dotenv = require ('dotenv');
const cors = require('cors');
const { swaggerUi, swaggerSpec }= require ('./src/swagger.js')


dotenv.config();

const app = express();
// Middleware
app.use(express.json());

// app.use (express.json ({ extended: false}));
app.use(cors());

// Define routes
app.use ('/api/auth', require ('./routes/auth'));
app.use ('/api/user', require('./routes/user'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

connectToDatabase();

