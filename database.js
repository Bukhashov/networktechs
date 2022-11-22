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
            title VARCHAR(50),
            markdown VARCHAR(8000)
        );`)

    }catch(e){
        console.log(`DATABASE| ${e}`);
    }
});

module.exports = db;