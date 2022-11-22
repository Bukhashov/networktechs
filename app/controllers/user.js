const bcrypt = require('bcrypt');
const db = require('../../database');
const saltRounds = 10;

class User {
    singin = async (req, res)=> {
        const email = req.body.email;
        const password = req.body.password;

        db.each(`SELECT * FROM users WHERE email='${email}'`, (err, user) => {        
            if(user != null){
                let controlPassword = bcrypt.compare(password, user.password);
                
                if(controlPassword){
                    res.status(200).json({ 
                        token: ""
                    });
                }else{
                    res.status(400).json({
                        massage: "user not found"
                    });
                }
            }
        });
    }
    singup = async (req, res) => {
        const lastname = req.body.lastname;
        const firstname = req.body.firstname;
        const email = req.body.email;
        const password = req.body.password;

        let controlEmail = false;
        db.each(`SELECT email FROM users WHERE email='${email}'`, (err, user) => {
            if(user.email != null){
                controlEmail = true
            }
        });

        if(!controlEmail){
            if(password.length > 8){
                const hashPassword = await bcrypt.hash(password, saltRounds);
    
                db.run(`INSERT INTO users(
                    firstname, 
                    lastname, 
                    email, 
                    password, 
                    confirm
                ) VALUES(
                    '${firstname}', 
                    '${lastname}', 
                    '${email}', 
                    '${hashPassword}', 
                    ${false});`, (err, user) => {
                        if(!err){
                            res.status(200).json({
                                massage: "created",
                                user: user,
                            })
                        }else{
                            console.log(err)
                        }
                    });
            }else{
                res.status(400).json(
                    { message: "password length < 8" }
                );
            }
        }else{
            res.status(400).json(
                { massage: `email ${user.email} used`}
            );
        }

    }
}

module.exports = new User;