const mongoose = require("mongoose");
const { Schema } = mongoose;

const bountySchema = new Schema({
    bountyFirstName: {
        type: String,
        required: true
    },
    bountyLastName: String, 
    bountyLiving: Boolean,
    bountyPrice: Number,
    bountyType: {
        type: String,
        enum: ["jedi", "sith", "Unknown"]
    },
});

module.exports = mongoose.model("Bounty", bountySchema);