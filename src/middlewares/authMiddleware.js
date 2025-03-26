const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../config");

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies["auth"];

    if (!token) {
        return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true; // used by handlebars
        res.locals.user = decodedToken;

        next();

    } catch (error) {
        res.clearCookie("auth");
        res.redirect("/auth/login");
    }
};
