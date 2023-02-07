const {userRepository} = require("../repository/index");

class userService {
    constructor(){
        this.userrepository = new userRepository();
    }
    async signup(data){
        try {
            const response = await this.userrepository.create(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async signin(data){
        try {
            
            const user = await this.userrepository.getbyemail(data.emailId);
            if(!user){
                throw {error : "No such user exists"};
            }
            if(!user.comparepassword(data.password)){
                throw {error : "Incorrect password"};
            }

            const response = user.genJWT();

            return response;
            
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = userService;