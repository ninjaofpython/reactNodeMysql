const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Database connection info

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '******',
    database: 'employees'
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query('insert into employees_table (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)', [name, age, country, position, wage], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted")
        }
    })
})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees_table", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Yeah it's running on port 3001")
})