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
const sql = 'INSERT INTO users ( name, email,contact,address) VALUES (?, ?,?,?)';
const values = ['gita', 'gita@gmail.com','111111111111',' up'];

con.query(sql, values, (error, results) => {
  if (error) {
    return console.error('Error inserting data:', error);
  }
  console.log('Data inserted successfully:', results);
});