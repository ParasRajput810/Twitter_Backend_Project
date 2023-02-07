const {commentRepository , tweetRepository} = require("../repository/index");

class commentService{
    constructor(){
        this.commentrepository = new commentRepository;
        this.tweetrepository = new tweetRepository;
    }

    async create(data){
       
        try {
            if(data.ModelType == "Tweet"){
                var commentable = await this.tweetrepository.findbyid(data.ModelId);
                
            }
            else if(data.ModelType == "Comment"){
                var commentable = await this.commentrepository.findbyid(data.ModelId);
                
            }
            else{
                throw {error : "Unkown model type"};
            }
        
            const response = await this.commentrepository.create({
                content : data.content,
                onModel : data.ModelType,
                Commentable : data.ModelId,
                userId : data.userId,
            });
            
            commentable.comments.push(response.id);
            commentable.save();
            return response;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = commentService;