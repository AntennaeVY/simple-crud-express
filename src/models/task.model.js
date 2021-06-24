const mongoose = require("mongoose");
const { Schema } = mongoose;

const autoIncrement = require("mongoose-auto-increment");

const taskSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
      alias: "id",
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      lowercase: true,
    },

    description: {
      type: String,
      lowercase: true,
    },

    _userId: {
      type: Number,
      required: [true, "userId is required"],
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

taskSchema.plugin(autoIncrement.plugin, "Task");

taskSchema.virtual("user", {
  ref: "User",
  localField: "_userId",
  foreignField: "_id",
  justOne: true,
});

taskSchema.methods.toJSON = function () {
  const taskObject = this.toObject();
  delete taskObject._userId;
  return taskObject;
};

module.exports = mongoose.model("Task", taskSchema);
