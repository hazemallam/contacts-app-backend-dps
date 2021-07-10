const mongoose = require('mongoose')
const User = require('./user')
const taskSchema = new mongoose.Schema( {
   mobile:{
       type:Number,
       required: true,
       trim: true
   },
   phone:{
    type:Number,
    required: true,
    trim: true
   },
   address:{
    type:String,
    trim: true
   },
   userID:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
}
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task