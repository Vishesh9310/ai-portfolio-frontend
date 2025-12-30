const fs = require("fs");
const path = require("path");

exports.getCertificates = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/certificates.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};
