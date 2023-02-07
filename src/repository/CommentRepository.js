const Comment = require("../models/Comment");
const CrudRepository = require("./CRUDRepository");

class commentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
}

module.exports = commentRepository;