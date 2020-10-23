const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const userController = require("./controllers/userController");
const anotationController = require("./controllers/anotationController");
const profileController = require("./controllers/profileController");
const sessionContrller = require("./controllers/sessionController");

const routes = express.Router();


/* SESSION */
routes.post("/sessions", celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), sessionContrller.create);


/* USERS */
routes.get("/users", userController.index);

routes.post("/users", celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
	    email: Joi.string().required().email(),
	    whatsapp: Joi.string().required().min(8).max(11),
	    city: Joi.string().required(),
	    uf: Joi.string().required().length(2),
    })
}), userController.create);


/* ANOTATIONS */
routes.get("/anotations", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), anotationController.index);

routes.post("/anotations", celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(1),
        description: Joi.string().required().min(1),
        date: Joi.string().required().length(10),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), anotationController.create);

routes.delete("/anotations/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), anotationController.delete);


/* PROFILE */
routes.post("/search", celebrate({
    [Segments.BODY]: Joi.object().keys({
        date: Joi.string().required().length(10),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), profileController.search);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}),  profileController.index);


/* EXPORT */
module.exports = routes;