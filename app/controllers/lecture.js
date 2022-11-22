const db = require('../../database');
var fs = require('fs');
var path = require('path');

class Lecture{
    all = async (req, res) => {
        let titles = [];
        
        db.each(`SELECT * FROM lecture`, (err, user)=> {
           titles.push(user.titles);
        });

        res.status(200).json({"tites" : titles });
        
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
        console.log(title)
        
        fs.readFile(`${process.cwd()}/public/md/${title}.md`, 'utf8', (err, data)=> {
            res.status(200).json({"md": data});
        });
    }
    delete = async (req, res) => {

    }
}

module.exports = new Lecture;