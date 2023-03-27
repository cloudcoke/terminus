const {
    sequelize: {
        models: { User },
    },
} = require("../../models");

const JWT = require("../../lib/jwt");
const crypto = require("crypto");
const { salt } = require("../../config");

const jwt = new JWT({ crypto, salt });

const repository = require("./auth.repository");
const service = require("./auth.service");
const controller = require("./auth.controller");

const AuthRepository = new repository({ User });
const AuthService = new service({ AuthRepository, jwt });
const AuthContoller = new controller({ AuthService });

module.exports = {
    AuthContoller,
};

