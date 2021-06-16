const { updateOneById } = require("../services/update.service");

module.exports.updateOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const result = await updateOneById(id, update);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
