const User = require("../models/user");
const CrudRepository = require("./CRUDRepository");

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = UserRepository;