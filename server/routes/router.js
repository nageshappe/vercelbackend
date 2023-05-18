const express=require('express')
const route=express.Router()
const controller=require('../controller/controller')
const authentication=require('../authentication/auth')


//API
route.post('/api/students',controller.create)
route.post('/api/jobs',controller.createj)
//route.post('/api/jobsjson',controller.createjob)
route.get('/api/display/students',controller.displayst)
route.get('/api/display/jobs',controller.displayj)
route.put('/api/students/:rollnumber',controller.updatest)
route.put('/api/jobs/:jobid',controller.updatejob)
route.delete('/api/students/:rollnumber',controller.deletest)
route.delete('/api/jobs/:jobid',controller.deletejob)
route.post('/api/login',authentication.loginf)

module.exports=route