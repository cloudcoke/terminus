const {
    sequelize: {
        models: { User },
    },
} = require("../../models");

const JWT = require("../../lib/jwt");
const crypto = require("crypto");
const { salt } = require("../../config");
const jwt = new JWT({ crypto, salt });

const repository = require("./user.repository");
const service = require("./user.service");
const controller = require("./user.controller");

const UserRepository = new repository({ User });
const UserService = new service({ UserRepository, jwt });
const UserContoller = new controller({ UserService });

module.exports = {
    UserContoller,
};

