require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const routers = require('./routes')
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 8050


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.use('/api/v1/', routers)
app.use(errorHandler);



if (process.env.APP_ENV != "test") {
    app.listen(port, () => {
        console.log(`\n\tServer Running on http://localhost:${port}\n`)
    });
}
