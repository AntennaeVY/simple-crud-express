const { updateOneById } = require("../../services/users/update.service");

module.exports.updateOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    if (!update || !id) {
      return res.status(400).send("No valid data provided");
    }

    const result = await updateOneById(id, update);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
