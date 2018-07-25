const mongoose = require("mongoose");
const { Schema } = mongoose;

const univSchema = new Schema({
}, { strict: false });

module.exports = mongoose.model("Universe", univSchema);