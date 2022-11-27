const db = require('../../database');
var fs = require('fs');
var path = require('path');

class Lecture{
    all = async (req, res) => {
        var titles = new Array();
        
        db.all(`SELECT * FROM lecture`, async (err, lecture)=> {
            res.status(200).json({"titles" : lecture });
        });
    }
    add = async (req, res) =>{
        const title = req.body.title;
        const lecture = req.body.lecture;
        
        var mdfile = fs.createWriteStream(`${process.cwd()}/public/md/${title}.md`);
        mdfile.write(lecture);
        mdfile.end();

        db.run(`INSERT INTO lecture(title) VALUES('${title}');`, (err, lec)=> {
            if(!err){
                res.status(200).json("Saqtaldi");
            }else{
                res.status(400).json("Qaty");
            }
        });

    }
    get = async (req, res) => {
        const title = req.params.title

        fs.readFile(`${process.cwd()}/public/md/${title}.md`, 'utf8', (err, data)=> {
            res.status(200).json({"title": title, "md": data});
        });
    }
    delete = async (req, res) => {

    }
}

module.exports = new Lecture;