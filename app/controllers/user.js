const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../database');
const saltRounds = 10;
const JWT_KEY = process.env.JWT_KEY

class User {
    signin = async (req, res)=> {
        const email = req.body.email;
        const password = req.body.password;

        db.each(`SELECT * FROM users WHERE email='${email}'`, (err, user) => {        
            if(user != null){
                let controlPassword = bcrypt.compare(password, user.password);
                if(controlPassword){
                    const token = jwt.sign({
                        email: user.email,
                        uid: user.id,
                    }, JWT_KEY, {
                        expiresIn: (2*60)*60
                    });
                    res.status(200).json({ 
                        uid: user.id,
                        lastname: user.lastname,
                        firstname: user.firstname,
                        token: token
                    });
                }else{
                    res.status(404).json({
                        massage: "user not found"
                    });
                }
            }
        });
    }
    signup = async (req, res) => {
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