const adminMiddleware = async (req, res, next) => {
    try {
        const adminRole = await req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message : "Access Denied, Not an admin!"});
        }

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;