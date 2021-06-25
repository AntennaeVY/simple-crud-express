const {
  validateFileExtension,
  moveFile,
} = require("../../services/upload/upload.service");

module.exports.upload = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length == 0) {
      return res
        .status(400)
        .json({ success: false, response: "No files were uploaded" });
    }

    const { file } = req.files;

    try {
      await validateFileExtension(file.name);
    } catch (err) {
      return res.status(400).json({ success: false, response: err.message });
    }

    const newName = `${req.user._id}_${new Date().getTime()}_${file.name}`;

    moveFile(file, "src/uploads", newName)
      .then(() => {
        return res
          .status(200)
          .json({ success: true, response: "File uploaded successfuly" });
      })
      .catch((err) => {
        return res.status(500).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
