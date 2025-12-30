const fs = require("fs");
const path = require("path");

exports.getProjects = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/projects.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};
