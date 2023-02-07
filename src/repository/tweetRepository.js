const Tweet = require("../models/tweet");

class tweetRepository {
    async create(data){
        try {
            const response = await Tweet.create(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async findbyid(Id){
        try {
            const response = await Tweet.findById(Id);
            return response;
        } catch (error) {
            throw {error};
        }
    }
}


module.exports = tweetRepository;