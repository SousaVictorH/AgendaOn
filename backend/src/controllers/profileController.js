const connection = require("../database/connection");
const { search } = require("../routes");

module.exports = {

    async index(req, res){

        const user_id = req.headers.authorization;

        const anotations = await connection("anotations")
        .where("user_id", user_id).select("*");

        return res.json(anotations);
    },

    async search(req, res){

        const user_id = req.headers.authorization;
        const {date} = req.body;

        console.log({
            date, user_id
        })

        const anotations = await connection("anotations")
        .where("user_id", user_id)
        .where("date", date)
        .select("*");

        return res.json(anotations);

    }
}