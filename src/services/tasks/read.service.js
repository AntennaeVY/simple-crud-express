const Task = require("../../models/task.model");

module.exports.getAllTasks = async () => {
  return await Task.find({});
};

module.exports.getAllOfUser = async (userId) => {
  if (!userId) {
    throw new Error("userId must be provided");
  }

  if (Number(userId) == NaN) {
    throw new Error("userId must be a number");
  }

  return await Task.find({ _userId: userId });
};

module.exports.getOneById = async (id) => {
  if (!id) {
    throw new Error("Id must be provided");
  }

  if (Number(id) == NaN) {
    throw new Error("Id must be a number");
  }

  return await Task.findById(id);
};

module.exports.getOneOfUserByTitle = async (title, userId) => {
  if (!title) {
    throw new Error("Title must be provided");
  }

  if (!userId) {
    throw new Error("userId must be provided");
  }

  if (typeof title != "string") {
    throw new Error("Title must be a string");
  }

  if (Number(userId) == NaN) {
    throw new Error("userId must be a number");
  }

  return await Task.findOne({ title: title, _userId: userId });
};

module.exports.getAllOfUserByStatus = async (status, userId) => {
  if (status === null) {
    throw new Error("Status must be provided");
  }

  if (!userId) {
    throw new Error("userId must be provided");
  }

  if (typeof status != "boolean") {
    throw new Error("Status must be a boolean");
  }

  if (Number(userId) == NaN) {
    throw new Error("userId must be a number");
  }

  return await Task.find({ status: status, _userId: userId });
};
