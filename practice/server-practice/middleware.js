const logger = (req, res, next) => {
    req.newMethod = "blah blah blah";
    console.log(req.method + " " + new Date().toLocaleString());
    next();
}

module.exports = logger;