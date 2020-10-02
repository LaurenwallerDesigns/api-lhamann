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
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/post', { useNewUrlParser: true, useUnifiedTopology: true });
export const Post= connection.model('Post', postSchema)



connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})