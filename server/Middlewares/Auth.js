const jwt = require('jsonwebtoken');
const key = require("../Config/keys");

module.exports = async (req, res, next) => {

    try {

        if(!req.headers.authorization) {
            res.status(400).json({ badAuth: "Table Not Allowed To U" });
            throw "Forbidde";
        }

        const token = req.headers.authorization.split(" ")[1];
        const payload = await jwt.verify(token, keys.secretOrKey);

        req.payload = payload
        next();
    }

    catch(err) {

        res.status(401).json({ message: "forbidden 🚯🚯🚯" })
    }
}