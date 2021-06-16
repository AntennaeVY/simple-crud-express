const { deleteOneById } = require("../services/delete.service");

module.exports.deleteOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteOneById(id);

    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
