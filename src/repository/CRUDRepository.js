
class CrudRepository {
    constructor(model){
        this.model = model;
    }
    
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }

    async getbyid(data){
        try {
            const reponse = await this.model.findById(data);
            return response;
        } catch (error) {
            throw {error};
        }
    }
    async get(data){
        try {
            const reponse = await this.model.find(data);
            return reponse;
        } catch (error) {
            throw {error};
        }
    }

    async update(id , data){
        try {
            const reponse = await this.model.findByIdAndUpdate(id , data);
            return response;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CrudRepository;