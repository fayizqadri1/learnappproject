const express = require('express');
const app = express();

const {Pool} = require('pg');
const pool = new Pool({
    // user: 'postgres',
    // host: 'localhost',
    // database: 'angularcurd',
    // password: '12345',
    // port: 5432,

    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test@123',
    port: 5432
})


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requpested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PATCH", "DELETE", "OPTIONS")
    next();
});

app.get('/getdata', (req, res) => {
    res.json({"statusCode": 200, "statusMessage": "SUCCESS is something"})
})

app.post("/api/addemp", (req, res) => {
  //  const doctor = req.body;
      //  console.log(doctor)
    try {


        const empName = req.body.empname;
        const empId = req.body.empid;
        const empRole = req.body.emprole;


        const newdoctor = pool.query("INSERT INTO empview(EmployeeId,EmployeeName,EmployeeRole) VALUES ($1,$2,$3) RETURNING *", [empId, empName, empRole]).then(() => {
            console.log('inserted')
            res.status(201).json({message: 'employee added'});

        }).catch(() => {
            return res.status(201).json({message: 'This is an error!'});

        })


    } catch (err) {

        console.log(err.message);


    }


});
// app.listen(3000, (req, res) => {
//     console.log('port is running on 3000');
// })
module.exports = app;


// CREATE TABLE empview(
//     EmployeeId BIGINT PRIMARY KEY ,
//      EmployeeName VARCHAR(255),
//      EmployeeRole  VARCHAR(255),

//      Created_On TIMESTAMP DEFAULT NOW()

// )
