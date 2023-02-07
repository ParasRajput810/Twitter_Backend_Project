const Comment = require("../models/Comment");
const CrudRepository = require("./CRUDRepository");

class commentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
    async findbyid(id){
        try {
            const reponse = await Comment.findById(id).populate("likes");
            return reponse;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = commentRepository;