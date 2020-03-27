const connetion = require("../database/connection");
module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ong = await connetion("ongs")
      .where("id", id)
      .select("name")
      .first();
    if (!ong) {
      return response.status(400).json({ erro: "No ONG fould whit this Id" });
    }
    return response.json(ong);
  }
};
