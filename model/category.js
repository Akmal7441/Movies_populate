const { Schema, model } = require("mongoose");

module.exports = model(
  "category",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  })
);
