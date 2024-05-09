export const userProfile = (req, res) => {
    res.json({ user: req.user });
}