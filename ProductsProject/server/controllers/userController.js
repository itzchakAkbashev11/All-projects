const { getUserByEmail, createUser, getUserById } = require("../services/userService")
const { hash, compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")
const userCtrl = {
    async register({ body }, res, next) {
        try {
            const user = await getUserByEmail(body.email)
            if (user) {
                return next({ status: 409, msg: "User alrady registered" });
            }
            body.password = await hash(body.password, 5)
            const [isCreated] = await createUser(body);
            if (!isCreated) return next(true)
            return res.status(201).send("user created successfully")
        } catch (stack) {
            next({ stack })
        }
    },
    async login({ body }, res, next) {
        try {
            const user = await getUserByEmail(body.email)
            if (!user) return next({ status: 404, msg: "wrong email or password" })
            if (!await compare(body.password, user.password)) {
                return next({ status: 401, msg: "wrong email or password" })
            }
            const accessToken = sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "30d" })
            delete user.password;
            res.cookie("access_token", accessToken, { httpOnly: true, sameSite: "None", secure: true }).status(200).json({ msg: "login successfully", user })
        } catch (stack) {
            next({ stack })
        }
    },
    async getUserInfo({ user: { id } }, res, next) {
        try {
            const user = await getUserById(id)
            res.status(200).json({ msg: "success authorized", user })
        } catch (stack) {
            next({ stack })
        }
    },
    async logout(req, res, next) {
        try {
            res.clearCookie("access_token").status(200).send("logout successfully")
        } catch (stack) {
            next({ stack })
        }
    },

}

module.exports = userCtrl;