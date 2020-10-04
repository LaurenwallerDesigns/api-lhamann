import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const saltRounds = 10;
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });


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

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next()
    }
    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
          return next(err)
        }
        this.password = hash
        next()
      })
    })

  userSchema.methods.checkPassword = function(password) {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err)
        }
  
        resolve(same)
      })
    })
  }

export const User= connection.model('User', userSchema)


connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})