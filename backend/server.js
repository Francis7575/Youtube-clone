const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = {
    origin: 'https://vidtube-6vlg.onrender.com', // Update this to match your frontend URL
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, DELETE',
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://vidtube-6vlg.onrender.com'); // Match frontend URL
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Combine headers
    next();
});
app.use(express.json())
app.use(cookieParser(process.env.SECURITY_KEY))
app.use(express.urlencoded({ extended: true }))

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Server is up!')
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})