const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'firstSoft2023!',
    database: 'appdb',
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.htm');
});

app.post('/submit/nomenklatura', (req, res) => {
    const formData = req.body;

    console.log(formData);
    // db.query('INSERT INTO nomenklatura SET ?', formData, (err, result) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('Internal Server Error');
    //     } else {
    //         console.log(result);
    //         res.send('Form submitted successfully for Nomenklatura!');
    //     }
    // });
});


app.post('/submit/kontragent', (req, res) => {
    const formData = req.body;

    db.query('INSERT INTO kontragent SET ?', formData, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Form submitted successfully for Kontragent!');
        }
    });
});



app.listen(port, () => { console.log(`http://localhost:${port}`) });