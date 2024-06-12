// function checkPrice(req, res, next) {
exports.checkPrice = (req, res, next) => {
    if (req.body.prince < 100) {
        res.send("Price is too much Low, We don't allow to sell");
    } else {
        next();
    }
}
