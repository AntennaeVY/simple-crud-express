const Task = require("../../models/task.model");

module.exports.deleteOneById = async (id) => {
  if (!id) {
    throw new Error("Id must be provided");
  }

  if (Number(id) == NaN) {
    throw new Error("Id must be a number");
  }

  return await Task.findByIdAndDelete(id);
};
