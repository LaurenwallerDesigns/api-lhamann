import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema  = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    verified: false
},
{ timestamps: true })
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });

export const User= connection.model('User', userSchema)


connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})