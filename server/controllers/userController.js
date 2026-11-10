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
  async delete(req, res) {}
}

module.exports = new UserController();
