module.exports = class ProfileController {
    static async getProfile(req, res, next) {
        try {
            res.status(200).json({ message: "Profile" })
        } catch (error) {
            next(error)
        }
    }
}