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

}

module.exports = hashtagsRepository;