const Like = require("../models/like");
const CrudRepository = require("./CRUDRepository");
class likeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const response = await Like.find({
                onModel : data.onModel,
                likeable : data.likeable,
                userId : data.userId
            })
            return response;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = likeRepository;
