const connection = require("../database/connection");

module.exports = {

    async index(req, res){

        const user_id = req.headers.authorization;

        const anotations = await connection("anotations")
        .where("user_id", user_id).select("*");

        return res.json(anotations);
    },

    async search(req, res){

        const { date }  = req.body;
        const user_id = req.headers.authorization;

        const anotations = await connection("anotations")
        .where("date", date)
        .where("user_id", user_id)
        .select("*");

        return res.json(anotations);
    }
}