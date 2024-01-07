const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema(
    {
        senderName : {
            type: String,
            required: true,

        },
        UPI_number: {
            type: String,
            required: true,
            unique:true,

        },
        UPI_ID:{
            type: String,
            required: true,
            unique:true,
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Detail", DetailSchema);