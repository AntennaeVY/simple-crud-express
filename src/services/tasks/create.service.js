const Task = require("../../models/task.model");

module.exports.createTask = async (data) => {
  if (!data) {
    throw new Error("No data provided");
  }

  if (typeof data != "object") {
    throw new Error("Data must be an object");
  }

  return await Task.create(data);
};
