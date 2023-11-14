const route = require('express').Router()

const homeRoute = require('./home')
const authRoute = require('./auth')
const profileRoute = require('./profile')
const postRoute = require('./post')
const adminRoute = require('./admin')

route.use('/', homeRoute)
route.use('/', authRoute)
route.use('/', profileRoute)
route.use('/', postRoute)
route.use('/', adminRoute)

module.exports = route
