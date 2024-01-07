const mongoose = require("mongoose");

const fraudSchema = new mongoose.Schema(
    {
        fraudUpiIds: {
                type: [String],
                unique:true,
            }
    },
    { timestamps: true }
);

module.exports = mongoose.model("fraud", fraudSchema);