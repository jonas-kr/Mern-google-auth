const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const port = 1616

const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')





//Activating cors middleware so we can make requests from the origin
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
))

//Accept json in req body
app.use(express.json())
app.use(cookieParser());


//All the routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)


//Connect to database and start listening
mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(port, () => {
        console.log("Database is connected");
        console.log("Listening on Port", port);
    })
}).catch((err) => { console.log(err); })