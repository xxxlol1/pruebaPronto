const routes = require('express').Router()
const db = require('./database/db')

//--------------routes-----------------


//Lista de meetings
routes.get('/', (req, res) => {
    let query = "SELECT M.meetingId, U.name, M.meetingTime FROM users U INNER JOIN meetings M on  M.userId =  U.userId"
    db.query(query, (err, rows, req) => {
        if (err) {
            throw err;
        }
        res.json(rows)
    })

})
// lista de meet por id
routes.get('/:id', (req, res) => {
    const { id } = req.params;
    let query = "SELECT meetingId, meetingTime FROM meetings WHERE userId = ?";
    db.query(query, [id], (err, rows, req) => {
        if (err) {
            throw err;
        }
        res.json(rows)
    })

})
// Delete meeting
routes.delete('/:id', (req, res) => {
    const { id } = req.params;
    let query = "DELETE FROM meetings where meetingId = ?"
    db.query(query, [id], (err, rows, req) => {
        if (err) {
            throw err;
        }
        res.json('Meeting eliminada')
    })

})
// agregar meetings
routes.post('/agregar', (req, res) => {
    const { meetingId, meetingTime, availableTime, userId } = req.body
    let query = `INSERT INTO meetings VALUES ('${meetingId}','${meetingTime}','${availableTime}','${userId}')`
    db.query(query, (err, rows, req) => {
        if (err) {
            throw err;
        }
        res.json("Meeting creada")
    })

})



// Meetings libres
routes.get('/meetingA', (req, res) => {
    const { inicia } = req.body.start;
    const { termina } = req.body.end;
    let query = `Select * from users U where not exists (Select 1 from meetings M where U.userId = M.userId and (M.availableTime Between '${meetingId}' and '${meetingTime}') and (M.availableTime Between '08:00' and '17:00') and (M.availableTime not Between '12:00' and '13:00'))`
    db.query(query, (err, rows, req) => {
        if (err) {
            throw err;
        }
        res.json(rows)
    })

})


module.exports = routes;

//