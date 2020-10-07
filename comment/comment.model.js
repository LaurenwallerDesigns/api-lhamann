import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    title: String,
    date: Date,
    firstName: String,
    body: String,
    _blog: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'blog'
    }
},
{ timestamps: true })
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/comment', { useNewUrlParser: true, useUnifiedTopology: true });
export const Comment= connection.model('Comment', commentSchema)



connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})