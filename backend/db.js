const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/paytm/admin"

mongoose.connect(mongoDB).then(() => console.log("connected to MongoDb successfully")).catch((err) => console.log(err));

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 30,
        trim: true 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required : true
    },
    balance: {
        type: Number,
        required : true
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User, Account
};