const router = require("express").Router()
const { register, login, getUserInfo ,logout} = require("../controllers/userController")
const { auth, authAdmin } = require("../middlewares/auth")


// register new user
router.post("/register", register)

router.post("/login", login)
router.post("/authUser", auth, getUserInfo)
router.post("/logout", auth, logout)



module.exports = router;