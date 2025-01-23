const path = require("path");

exports.getCatalogue = (req, res) => {
  const filePath = path.join(__dirname, "../data/catalogue.json");
  res.sendFile(filePath);
};
