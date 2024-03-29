//dependencies
const mongoose = require("mongoose");

//schema
const messageSchema = mongoose.Schema(
    {
        text:{
            type: String,
        },
        attachment: [
            {
                type: String,
            },
        ],
        sender:{
            id: mongoose.Types.ObjectId,
            name: String,
            avatar: String,
        },
        receiver:{
            id: mongoose.Types.ObjectId,
            name: String,
            avatar: String,
        },
        date_time:{
            type: Date,
            default: Date.now,
        },
        conversation_id: {
            type: mongoose.Types.ObjectId,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

//model of the Message
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;