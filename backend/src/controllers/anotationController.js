const connection = require("../database/connection");

module.exports = {

    async index(req, res){

        const {page=1} = req.query;

        const [count] = await connection("anotations").count();

        const anotations = await connection('anotations')
        .join('users', "user_id", "=", "anotations.user_id")
        .limit(5)
        .offset((page-1)*5)
        .select(['anotations.*', "users.name", "users.email", 
        "users.whatsapp", "users.city", "users.uf"]);

        res.header("X-Total-Count", count['count(*)']);

        return res.json(anotations);
    },

    async create(req, res){

        const { title, description, date }  = req.body;
    
        const user_id = req.headers.authorization;

        console.log({
            title,
            description,
            date,
            user_id
        })
    
        const result = await connection('anotations').insert({
            title,
            description,
            date,
            user_id
        });

        const id = result[0];

        return res.json({id});
    },

    async delete(req, res){

        const {id} = req.params;
        const user_id = req.headers.authorization;

        const anotations = await connection('anotations')
        .where("id", id).select("user_id").first();

        if(anotations.user_id != user_id){
            return res.status(401).json({error: 'Operation not permited'});
        }

        await connection("anotations").where("id", id).delete();

        return res.status(204).send();
    }

}