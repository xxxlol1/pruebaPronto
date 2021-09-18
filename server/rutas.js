const routes = require('express').Router()
const db = require('./database/db')

//--------------routes-----------------


//Tabla de los nombres y sus meetings
routes.get('/',(req, res)=>{
    let query = "select M.meetingId, U.name, M.meetingTime from users U INNER JOIN meetings M on  M.userId =  U.userId"
    db.query(query,(err, rows, req)=>{
        if (err) {
            throw err;
        }
        res.json(rows)
    })

}) 
//Tabla de los nombres y sus meetings
routes.get('/:id',(req, res)=>{
    const { id } = req.params;
    let query = "select meeetingId, meetingTime from meetings where user_id = ?"; 
    db.query(query,[id],(err, rows, req)=>{
        if (err) {
            throw err;
        }
        res.json(rows)
    })

}) 
//Tabla de los nombres y sus meetings
routes.get('/',(req, res)=>{
    let query = "select M.meetingId, U.name, M.meetingTime from users U INNER JOIN meetings M on  M.userId =  U.userId"
    db.query(query,(err, rows, req)=>{
        if (err) {
            throw err;
        }
        res.json(rows)
    })

}) 
//Tabla de los nombres y sus meetings
routes.get('/',(req, res)=>{
    let query = "select M.meetingId, U.name, M.meetingTime from users U INNER JOIN meetings M on  M.userId =  U.userId"
    db.query(query,(err, rows, req)=>{
        if (err) {
            throw err;
        }
        res.json(rows)
    })

}) 
//Tabla de los nombres y sus meetings
routes.get('/',(req, res)=>{
    let query = "select M.meetingId, U.name, M.meetingTime from users U INNER JOIN meetings M on  M.userId =  U.userId"
    db.query(query,(err, rows, req)=>{
        if (err) {
            throw err;
        }
        res.json(rows)
    })

}) 

module.exports = routes;

