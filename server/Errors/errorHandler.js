/*
 ** Catch Error Handler
 */

exports.catchErrors = (fn) => {

    return(function(req, res, next) {

        fn(req, res, next).catch( (err) => {

            if( TypeError === "string" ) {

                res.status(400).json( { message: err } );
            } else next(err);
        });
    });
};

 /*
 ** MongoDb Validation Hanlder
 */

exports.mongooseErrors = (err, req, res, next) => {

    if(!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);

    let msg = "";

    errorKeys.forEach((key) => (msg += err.errors[key].msg + ", "));
    msg = msg.substr(0, msg.length - 2);

    res.status(400).json( { msg });
};

/*
** Developpement Error Handler
*/

exports.developpementErrors = (err, req, res, next) => {

    err.stack = err.stack || "";
    const errDetails = {

        message: err.message,
        status: err.status,
        stack: err.stack
    };

    res.status(err.status || 500).json(errDetails);
};

/*
** Priduction Handler Error
*/

exports.productionErrors = (err, req, res, next) => {

    res.status(err.status || 500).json({

        error: "Internal Server Error",
    });
};

/*
** 404 Error
*/

exports.notFound = (err, req, res, next) => {

    res.status(404).json({

        message: "Route not found",
    });
}