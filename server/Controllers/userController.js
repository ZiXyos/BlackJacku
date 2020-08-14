const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../Config/keys");

const validateRegisterInput = require("../Validations/register");
const validateLoginInput = require("../Validations/login");
const Users = require("../Models/user");

exports.register = async (req, res, next) => {

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) return (res.status(400).json(errors));

    Users.findOne({ email: req.body.email }).then( user => {

        if(user) res.json({ email: "ahaha email deja use on vole pas on a dit" });
        else {

            const newUser = new User({

                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {

                bcrypt.hash(newUser.password, salt, (err, hash) => {

                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                })
            });
        }
    });
};


exports.login = async (req, res, next) => {

    const { isValid, errors } = validateLoginInput(req.body);

    if(!isValid) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    Users.findOne({ email }).then( user => {

        if(!user) res.status(404).json({ emaiNotFound: "Email Not Found" });

            bcrypt.compare(password, user.password).then( isMatch => {

                if (isMatch) {

                    const payload = {

                        id: user.id,
                        name: user.name
                    };

                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 } ,(err, token) => {

                        res.json({

                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else return (res.status(400).json({ badPswd: "Bad Password" }));
        });
    });
};
