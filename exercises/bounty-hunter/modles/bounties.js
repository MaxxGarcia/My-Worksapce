const mongoose = require("mongoose");
const { Schema } = mongoose;

const bountySchema = new Schema({
    bountyFirstName: {
        type: String,
        required: true
    },
    bountyLastName: String, 
    bountyLiving: String,
    bountyAmount: Number,
    bountyType: {
        type: String,
        enum: ["Jedi", "Sith", "Unknown"]
    },
});

module.exports = mongoose.model("Bounty", bountySchema);