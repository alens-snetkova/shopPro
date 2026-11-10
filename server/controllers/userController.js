class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Id is not defined"));
    }
    res.json(query.id);
  }
  async delete(req, res) {}
}

module.exports = new UserController();
