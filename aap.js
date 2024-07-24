const mysql = require('mysql');

// first connected to mysql database employee
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'employee'
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database');
});

// sending data to database
const sql = 'INSERT INTO employees ( firstName,lastName, email,phoneno,address,hired date,job title,salary,manager id) VALUES (?, ?,?,?,?,?,?,?,?)';
const values = ['neha', 'kumari','neha@gmail.com','9089575790',' Alpha 1','2023-01-02','software',"40000",'123'];

con.query(sql, values, (error, results) => {
  if (error) {
    return console.error('Error inserting data:', error);
  }
  console.log('Data inserted successfully:', results);
});