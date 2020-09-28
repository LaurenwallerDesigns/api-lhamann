import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema  = new Schema({
    title: String,
    date: Date,
    description: String,
    body: String,
    createdBy: {
        firstName: String,
        lastName: String
    }
},
{ timestamps: true })
export const Post= mongoose.model('Post', postSchema)

mongoose.connect('mongodb://127.0.0.1:27017/post', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})