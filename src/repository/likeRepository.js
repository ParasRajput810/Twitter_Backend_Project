const Like = require("../models/like");
const CrudRepository = require("./CRUDRepository");
class likeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }
    async deletelike(id){
        try {
            const response = await Like.findByIdAndDelete(id);
            return response ;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = likeRepository;
