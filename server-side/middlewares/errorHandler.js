function errorHandler(error, req, res, next) {
    console.log(error, '<== Error Handler');

    let status = error.status || 500;
    let message = error.message || "Internal Server Error";

    switch (error.name) {
        case "SequelizeValidationError":
            status = 400;
            message = error.errors[0].message;
            break;
        case "nullEmail/Password":
            status = 400;
            message = "Email and Password is required";
            break;
        case "InvalidLogin":
            status = 400;
            message = "Invalid Email/Password";
        case "InvalidToken":
            status = 401;
            message = "Invalid Token";
            break;
        case "unauthorized":
            status = 401;
            message = "Unauthorized";
            break;
    }

    res.status(status).json({ message });
}

module.exports = errorHandler;