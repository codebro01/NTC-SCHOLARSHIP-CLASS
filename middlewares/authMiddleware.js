const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    try {
        const { token } = req?.cookies;
        if (!token) return next(new Error('Token not provided'));
        const user = jwt.verify(token, process.env.JWT_SECRET)
        
        if (!user) return next(new Error('Invalid Token'));
        
        const {name, email, age, role, userID} = user;

        req.user = user;
        console.log(req.user)
        next();
    }
    catch (error) {
        console.log(error)
    }
}


const checkPermissions = (requiredRole) => {
    return (req, res, next) => {
        const user = req.user;
        if(!user || !user.role) return next(new Error('User invalid'));

        if (!Array.isArray(requiredRole)) {
            requiredRole = [requiredRole];
        }

        const hasRole = requiredRole.some(role => {
            console.log('role', role)
            user.role = [user.role];
            console.log('hasRole', user.role.includes(role))
            return user.role.includes(role);
        })
        console.log(hasRole, user.role, requiredRole);


        if (!hasRole) return next(new Error('User is not authorized to access this route'));

        next();

    }
}

module.exports = { authMiddleware, checkPermissions }