const errorMiddleware = (err, req, res, next) => {
const status = err.status || 500;
const message = err.message || "Internal Server Error";
const extraData = err.extraData || "Error from Backen";

return res.status(status).json({
    status: "error",
    message: message,
    extraData: extraData,
});
};

module.exports = errorMiddleware 