const route = require('express').Router()

const homeRoute = require('./home')
const authRoute = require('./auth')

route.use('/', homeRoute)
route.use('/', authRoute)

module.exports = route
