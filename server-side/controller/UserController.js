const { hashing, compare } = require("../helpers/bcrypt");
const { signPayload, verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = class UserController {
    static async login(req, res, next) {
        try {
            let { email, password } = req.body;
            if (!email || !password) {
                throw { status: 400, name: "nullEmail/Password" }
            }

            let user = await User.findOne({ where: { email } });
            if (!user) {
                throw { status: 400, name: "InvalidLogin" }
            }

            if (!compare(password, user.password)) {
                throw { status: 400, name: "InvalidLogin" }
            }

            let payload = { id: user.id };
            let token = signPayload(payload);
            res.status(200).json({ access_token: token });
        } catch (error) {
            next(error)
        }
    }

    static async register(req, res, next) {
        try {
            let { email, password } = req.body;
            if (!email || !password) {
                throw { status: 400, name: "nullEmail/Password" }
            }
            let newUser = await User.create({ email, password });
            res.status(201).json({ message: `User with email ${newUser.email} has been created` });
        } catch (error) {
            next(error)
        }
    }
}