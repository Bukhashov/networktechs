const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const db = require('../database');
const JWT_KEY = process.env.JWT_KEY;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
}
module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done)=> {
            try{
                db.all(`SELECT * from users WHERE id='${payload.uid};'`, (err, data)=>{
                    console.log(data);
                    
                    if(data){
                        done(null, data);
                    }else{
                        done(null, false);
                    }
                })
            }catch(e){
                console.log(e);
            }
        })
    )
}