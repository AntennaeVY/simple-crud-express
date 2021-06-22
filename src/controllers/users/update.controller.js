const { updateOneById } = require("../../services/users/update.service");

module.exports.updateOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    console.log(req.user.id)

    if (!update || !id ) {
      return res.status(400).send("No valid data provided");
    }

    if (req.user._id != id && !req.isAdmin) {
      return res.status(401).send("Can't modify another user's info")
    }

    if (update.role && !req.isAdmin) {
      return res.status(401).send("Can't change your role")
    }

    const result = await updateOneById(id, update);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err);
  }
};
