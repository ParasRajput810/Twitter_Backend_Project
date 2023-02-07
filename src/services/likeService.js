const {likeRepository ,tweetRepository , commentRepository } = require("../repository/index");

class likeService{
    constructor(){
        this.likerepository = new likeRepository();
        this.tweetrepository = new tweetRepository();
        this.commentrepository = new commentRepository();
    }

    async create(ModelType , ModelID , UserId){
        
        try {
            if(ModelType == 'Tweet'){
                var likeable = await this.tweetrepository.findbyid(ModelID);
                
            } else if(ModelType == 'Comment') {
                var likeable = await this.commentrepository.findbyid(ModelID);
            }
            else {
                throw {error : "Unkown Model Type"};
            }

            
            let exist = await this.likerepository.findByUserAndLikeable({
                onModel : ModelType,
                likeable : ModelID,
                userId : UserId,
            });
            if(exist){
                likeable.likes.pull(exist.id);
                await likeable.save();
                await this.likerepository.deletelike(exist.id);
                var isadded  = false;
            }
            else{
                const response  = await this.likerepository.create({
                    onModel : ModelType,
                    likeable : ModelID,
                    userId : UserId,
                });
                likeable.likes.push(response.id);
                await likeable.save();
                var isadded = true;
            }
            return isadded;
            
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = likeService;