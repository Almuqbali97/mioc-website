export const isAdmin = (req, res, next) => {
    if (req.user.admin_role) {
        next()
    } else {
        return res.status(401).json({ message: 'You are not autherised as admin' });
    }
}

