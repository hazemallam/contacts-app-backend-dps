const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://hazemallam:sabreEnwagdy@cluster0.vaftt.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})