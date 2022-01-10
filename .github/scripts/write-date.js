const fs = require("fs");

const yaml = require("js-yaml");

const info = yaml.load(fs.readFileSync("./open-api/api.yml", "utf8")).info;

const now = new Date();

const date =
  `${now.getFullYear()}-` +
  `${now.getMonth() + 1}`.padStart(2, "0") +
  `-${now.getDate()}`;

info.version = date;

fs.writeFileSync("open-api/version.json", JSON.stringify({ info }));
