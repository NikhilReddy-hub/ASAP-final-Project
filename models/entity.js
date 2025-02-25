const mongoose = require("mongoose");

const entitySchema = new mongoose.Schema({
    name: String,
    description: String
});

const Entity = mongoose.model("Entity", entitySchema);

module.exports = Entity;
