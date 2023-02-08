const jwt = require('passport-jwt');
const User = require("../models/user");

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

var opts ={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_secret',
}

const passportAuth = (passport)=>{
    try {
        passport.use(new JwtStrategy(opts , async(jwt_payload , done)=>{
            const user = await User.findById(jwt_payload.id);
            if(!user){
                return done(null , false);
            }
            else{
                return done(null , user);
            }
        }))
    } catch (error) {
        throw {error};
    }
} 

module.exports = passportAuth;