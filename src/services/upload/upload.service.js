module.exports.validateFileExtension = async (fileName) => {
  if (!fileName) {
    throw new Error("Invalid file name");
  }

  const validExtensions = ["png", "jpg", "jpeg"];

  const fileNameArray = fileName.split(".");
  const fileExtension = fileNameArray[fileNameArray.length - 1];

  if (!validExtensions.includes(fileExtension)) {
    throw new Error(`Only ${validExtensions.join("/")} files are valid`);
  }
};

module.exports.moveFile = async (file, path, newName) => {
  if (!file.mv) {
    throw new Error("Couldn't move the file");
  }

  return new Promise((resolve, reject) => {
    file.mv(`${path}/${newName}`, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};
