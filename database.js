const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("db.db", (e)=>{
    try{
        console.log("DATABASE RUNED");

        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            firstname VARCHAR(50),
            lastname VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(250),
            confirm BOOLEAN
        );`);

        db.run(`CREATE TABLE IF NOT EXISTS lecture (
            id INTEGER PRIMARY KEY,
            title VARCHAR(50)
        );`);
        db.run(`CREATE TABLE IF NOT EXISTS tests (
            id INTEGER PRIMARY KEY,
            title VARCHAR(150),
            question VARCHAR(150),
            answer1 VARCHAR(150),
            answer2 VARCHAR(150),
            answer3 VARCHAR(150),
            answer4 VARCHAR(150),
            key VARCHAR(150)
        );`);
        db.run(`CREATE TABLE IF NOT EXISTS userAnswer (
            id INTEGER PRIMARY KEY,
            u_id INTEGER,
            title VARCHAR(150),
            question INTEGER,
            anwser INTEGER
        );`);

    }catch(e){
        console.log(`DATABASE| ${e}`);
    }
});

module.exports = db;

// Cisco Packet Tracer ishindegi modeldeý rejımi
// Cisco Packet Tracer baǵdarlamasyna kirispe
// Habqa negizdelgen juldyz topologıasymen jelini modeldeý