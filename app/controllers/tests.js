const db = require('../../database');

class Tests {
    get = async (req, res) => {
        const title = req.params.title;
        db.all(`SELECT id, question, answer1, answer2, answer3, answer4 FROM tests WHERE title='${title}'`, (err, tests)=>{
            res.status(200).json({
                "title" : title,
                "data" : tests
            });
        });

    };
    control = async (req, res) => {
        const title = req.body.title;
        const data = req.body.data;
        
        if(data.length > 0) {
            let resultCount = 0
            let q_number = 0;
            let i = 0;

            db.all(`SELECT question, key FROM tests WHERE title='${title}';`, async (err, test)=>{
                await data.forEach(d=> {
                    if(test[q_number].question == d.question && test[q_number].key == d.answer){
                        resultCount++;
                    }
                    q_number++;
                });
                
                res.status(200).json({
                    "resultCount" : resultCount,
                    "number_q" : q_number
                });
                
            })
        }      
    };
    new = async (req, res) => {
        const title = req.body.title;
        const data = req.body.data;
    
        data.forEach(element => {
            db.run(`INSERT INTO tests (title, question, answer1, answer2, answer3, answer4, key ) 
            VALUES ('${title}','${element.question}','${element.answer1}','${element.answer2}','${element.answer3}','${element.answer4}','${element.key}');`)                
        })

        res.status(200).json({massage: "saved"});
    };
}

module.exports = new Tests;