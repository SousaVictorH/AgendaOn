const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {

    async index(req, res){

        const users = await connection('users').select("*");
    
        return res.json(users);
    
    },

    async create(req, res){

        console.log("OK");

        const { name, email, whatsapp, city, uf }  = req.body;
    
        const id = crypto.randomBytes(4).toString("HEX");
    
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