const hashtags = require("../models/hashtags");

class hashtagsRepository{
    async create(data){
        
        try {
            const response = await hashtags.create(data);
            return response ;
        } catch (error) {
            throw {error};
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await hashtags.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titlelist){
        try {
            const response = await hashtags.find({
                title : titlelist,
            });
            return response;
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = hashtagsRepository;