const db = require('../../database');

class Media{
    new = async (req, res) => {
        const data = req.body.data;
        console.log(data);
        data.forEach(element => {
            db.run(`INSERT INTO media (title, src) 
            VALUES ('${element.title}','${element.src}');`)                
        })
        res.status(200).json({massage: "saved"});
    }
    getAll = async (req, res) => { 
        db.all(`SELECT * FROM media`, (err, data)=> {
            res.status(200).json({ "data" : data });
        })
    }
}

module.exports = new Media;