const route = require('express').Router()

const homeRoute = require('./home')
const authRoute = require('./auth')
const profileRoute = require('./profile')

route.use('/', homeRoute)
route.use('/', authRoute)
route.use('/', profileRoute)

module.exports = route
