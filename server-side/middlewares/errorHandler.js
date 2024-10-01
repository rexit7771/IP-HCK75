function errorHandler(error, req, res, next) {
    let status = error.status || 500;
    let message = error.message || "Internal Server Error";

    console.log(error, '<== Error Handler');

    res.status(status).json({ message });
}

module.exports = errorHandler;