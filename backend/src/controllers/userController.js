const connection = require("../database/connection");
const generateUniqueId = require('../util/generateUniqueId');

module.exports = {

    async index(req, res){

        const users = await connection('users').select("*");
    
        return res.json(users);
    
    },

    async create(req, res){

        const { name, email, whatsapp, city, uf }  = req.body;
    
        const id = generateUniqueId();
    
        await connection('users').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return res.json({id});
    }

}