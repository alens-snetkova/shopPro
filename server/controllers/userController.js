class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    try {
      const { id } = req.query;
      if (!id) {
        return next(ApiError.badRequest("Id is not defined"));
      }
      res.json(id);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    return res.json({ message: "User deleted" });
  }
}

module.exports = new UserController();
