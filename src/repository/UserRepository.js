const User = require("../models/user");
const CrudRepository = require("./CRUDRepository");

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    async getbyemail(email){
        try {
            const response = await User.findOne({
                emailId:email
            });
            return response;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = UserRepository;