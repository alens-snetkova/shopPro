const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const img = req.files.img;
      let fileName = uuid.v4() + ".jpg";
      await img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: fileName,
      });
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, typeid, limit, page } = req.query;
    typeId = typeId || typeid;
    page = Number(page) || 1;
    limit = Number(limit) || 9;
    let offset = page * limit - limit;
    let devices;

    if (brandId && typeId) {
      devices = await Device.findAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    } else if (brandId) {
      devices = await Device.findAll({ where: { brandId }, limit, offset });
    } else if (typeId) {
      devices = await Device.findAll({ where: { typeId }, limit, offset });
    } else {
      devices = await Device.findAll({ limit, offset });
    }

    return res.json(devices);
  }

  async getOne(req, res) {}
  async delete(req, res) {}
}

module.exports = new DeviceController();
