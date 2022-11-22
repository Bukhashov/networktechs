require('dotenv').config();
const express = require('express');
var cors = require('cors')
const router = require('./app/routes/router');
const db = require('./database');

const port = process.env.APP_PORT | 4000

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

app.use('/api/v1', router)

app.listen(port, ()=> {
    try{
        console.log(`SERVER STARTED ${process.env.APP_DOMAIN} PORT: ${port}`);
    }catch(e){
        console.error(`SERVER| ${e}`);
    }
})