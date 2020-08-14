const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";

    if (Validator.isEmpty(data.email)) {

        errors.email = "EUH YA PAS DEMAIL LA"
    } else if (!Validator.isEmail(data.email)) {

        errors.email = "Bah nan ducoup tu t'es trompé bg";
    }

    if(Validator.isEmpty(data.password)) {

        errors.password = "Oe Nan Faut Mettre un MDP LA fdp"
    }

    return ({

        errors,
        isValid: isEmpty(errors)
    });
}