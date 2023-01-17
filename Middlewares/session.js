module.exports = (req,res,next) => {
    if (req.session.config) {
        res.locals.config = req.session.config
    }
    next()
}