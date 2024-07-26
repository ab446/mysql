const mysql = require('mysql');

// पहले mysql डेटाबेस 'employee' से कनेक्ट करें
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

// sending the data into database
const sql = 'INSERT INTO employees (EmployeeID,FirstName,LastName,Email,PhoneNumber,HireDate,JobTitle,Department,Salary,ManagerID) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?, ?)';
const values = ['4','sony', 'Kumari', 'sony@gmail.com', '9089575797','2020-01-17','Software Engineer','IT','60000','5'];

con.query(sql, values, (error, results) => {
    if (error) {
        return console.error('Error inserting data:', error);
    }
    console.log('Data inserted successfully:', results);
});
