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
    password: '*******',
    database: 'job_search'
})

app.post('/create', (req, res) => {
    const dateSearched = req.body.dateSearched
    const jobTitle = req.body.jobTitle
    const email = req.body.email
    const companyName = req.body.companyName
    const companyAddress = req.body.companyAddress
    const personContacted = req.body.personContacted
    const url = req.body.url
    const phone = req.body.phone
    const jobSearchSiteId = req.body.jobSearchSiteId
    const typeOfWorkApplied = req.body.typeOfWorkApplied
    const outcomeId = req.body.outcomeId
    const reportToEddId = req.body.reportToEddId
    

    db.query('insert into jobSearchTable (dateSearched, jobTitle, email, companyName, companyAddress, personContacted, url, phone, jobSearchSiteId, typeOfWorkApplied, outComeId, reportToEddId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [dateSearched, jobTitle, email, companyName, companyAddress, personContacted, url, phone, jobSearchSiteId, typeOfWorkApplied, outcomeId, reportToEddId], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted")
        }
    })
})

app.get('/job_search', (req, res) => {
    db.query("SELECT * FROM jobSearchTable", (err, result) => {
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