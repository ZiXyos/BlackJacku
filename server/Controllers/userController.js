const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../Config/keys");

const validateRegisterInput = require("../Validations/register");
const validateLoginInput = require("../Validations/login");
const Users = require("../Models/user");

exports.register = async (req, res, next) => {

    return ({ message: "Hello PEPOUSE" });
}

exports.login = async (req, res, next) => {

    const { isValid, errors } = validateLoginInput(req.body);

    if(!isValid) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    Users.findOne({ email }).then( user => {

        if(!user) res.status(400).json({ emaiNotFound: "Email Not Found" });

            bcrypt.compare(password, user.password).then( isMatch => {

                if (isMatch) {

                    const payload = {

                        id: user.id,
                        name: user.name
                    };

                    jwt.sign(payload, keys.secretOrKey, (err, token) => {

                        res.json({

                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else return (res.status(400).json({ badPswd: "Bad Password" }));
        });
    });
}